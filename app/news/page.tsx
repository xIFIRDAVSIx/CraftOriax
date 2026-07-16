// import type { Metadata } from 'next'
// import { EditionArticleList } from '@/components/edition-content'
// import { news } from '@/lib/content'
// export const metadata: Metadata = { title: 'Новости Minecraft', description: 'Разборы обновлений, механик и культуры Minecraft.' }
// export default function Page(){return <main><header className="page-hero"><span className="eyebrow">Журнал CraftOriax</span><h1>НОВОСТИ</h1><p>Глубокие разборы обновлений и наблюдения за тем, как меняется кубический мир.</p></header><section className="section article-section"><EditionArticleList items={news}/></section></main>}


import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блоки Minecraft",
  description: "Раздел временно недоступен",
};

export default function Page() {
  return <ComingSoon />;
}