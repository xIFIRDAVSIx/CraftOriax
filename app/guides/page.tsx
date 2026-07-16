// import type { Metadata } from 'next'
// import { EditionArticleList } from '@/components/edition-content'
// import { guides } from '@/lib/content'
// export const metadata: Metadata = { title: 'Гайды по Minecraft', description: 'Подробные русскоязычные руководства по выживанию, настройкам, FPS, модам и серверам.' }
// export default function Page(){return <main><header className="page-hero"><span className="eyebrow">Практические знания</span><h1>ГАЙДЫ</h1><p>Понятные инструкции для первого дня, стабильного FPS, модификаций и собственного сервера.</p></header><section className="section article-section"><EditionArticleList items={guides}/></section></main>}


import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блоки Minecraft",
  description: "Раздел временно недоступен",
};

export default function Page() {
  return <ComingSoon />;
}