import { readFileSync, writeFileSync } from 'fs';
import { geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';

const OCEAN = '#CCF1FF';
const LAND  = '#C2DAED';
const SIZE  = 1024;
const CX    = SIZE / 2;
const CY    = SIZE / 2;
const R     = CX - 2; // 510 — 2px inset so clip edge doesn't alias

// Load world-atlas land-110m topojson
const topoRaw = readFileSync('node_modules/world-atlas/land-110m.json', 'utf8');
const topo    = JSON.parse(topoRaw);
const land    = feature(topo, topo.objects.land);

// Orthographic projection — centred on Atlantic (lon 0°, lat 20°) for a balanced world view
const projection = geoOrthographic()
  .scale(R)
  .translate([CX, CY])
  .clipAngle(90)
  .rotate([0, -20]);   // tilt slightly north so continents are better centred

const pathGen = geoPath(projection);

// Render all land features into a single SVG <path>
const landD = pathGen(land);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="${SIZE}" height="${SIZE}"
     viewBox="0 0 ${SIZE} ${SIZE}">
  <defs>
    <clipPath id="globe-clip">
      <circle cx="${CX}" cy="${CY}" r="${R}"/>
    </clipPath>
  </defs>

  <!-- ocean background — clipped to circle -->
  <circle cx="${CX}" cy="${CY}" r="${R}"
          fill="${OCEAN}" clip-path="url(#globe-clip)"/>

  <!-- land masses -->
  <path d="${landD}"
        fill="${LAND}" clip-path="url(#globe-clip)"/>
</svg>`;

const outPath = 'artifacts/sorta-website/public/globe.svg';
writeFileSync(outPath, svg, 'utf8');
console.log(`Written ${outPath} (${Math.round(svg.length / 1024)} KB)`);
