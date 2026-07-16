// import type { Metadata } from 'next'
// import { CatalogGrid } from '@/components/catalog-grid'
// import { catalogLabels, mobs } from '@/lib/content'
// export const metadata: Metadata = { title: 'Мобы Minecraft', description: catalogLabels.mobs.description }
// export default function Page(){const c=catalogLabels.mobs;return <main><header className="page-hero"><span className="eyebrow">{c.eyebrow}</span><h1>{c.title.toUpperCase()}</h1><p>{c.description}</p></header><section className="catalog"><CatalogGrid items={mobs} type="mobs" /></section></main>}


import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блоки Minecraft",
  description: "Раздел временно недоступен",
};

export default function Page() {
  return <ComingSoon />;
}