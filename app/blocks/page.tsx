// import type { Metadata } from 'next'
// import { EditionSimpleGrid } from '@/components/edition-content'
// import { blocks, catalogLabels } from '@/lib/content'
// export const metadata: Metadata = { title: 'Блоки Minecraft', description: catalogLabels.blocks.description }
// export default function Page(){const c=catalogLabels.blocks;return <main><header className="page-hero"><span className="eyebrow">{c.eyebrow}</span><h1>{c.title.toUpperCase()}</h1><p>{c.description}</p></header><section className="catalog"><EditionSimpleGrid items={blocks} type="blocks" /></section></main>}


import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блоки Minecraft",
  description: "Раздел временно недоступен",
};

export default function Page() {
  return <ComingSoon />;
}