import sectionMetaJson from "../../section-meta.json";

export type SectionEntry = {
  route: string;
  title: string;
  description: string;
  ogImage: string;
  scrollTargetId: string | null;
};

export const SECTION_META_LIST: SectionEntry[] = sectionMetaJson.sections;

export const SECTION_META_BY_ROUTE: Record<string, SectionEntry> =
  Object.fromEntries(SECTION_META_LIST.map((s) => [s.route, s]));

export function getSectionMetaForRoute(route: string): SectionEntry {
  return SECTION_META_BY_ROUTE[route] ?? SECTION_META_BY_ROUTE["/"]!;
}
