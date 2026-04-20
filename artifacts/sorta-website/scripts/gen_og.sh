#!/usr/bin/env bash
# Regenerate all 7 OG images from the hero section background image.
# Run from the project root: bash artifacts/sorta-website/scripts/gen_og.sh
set -e

HERO="artifacts/sorta-website/public/hero_image.jpg"
OUT="artifacts/sorta-website/public"

for slug in home problem solution use-cases team why-now contact; do
  magick "$HERO" \
    -gravity Center -crop 1200x630+0+0 +repage \
    -quality 90 \
    "${OUT}/og-${slug}.jpg"
  echo "Generated og-${slug}.jpg"
done

echo "All 7 OG images regenerated."
