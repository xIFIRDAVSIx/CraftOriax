import type { Metadata } from 'next'
import { ArticleCard } from '@/components/cards'
import { guides } from '@/lib/content'
export const metadata: Metadata = { title: 'Гайды по Minecraft', description: 'Подробные русскоязычные руководства по выживанию, настройкам, FPS, модам и серверам.' }
export default function Page(){return <main><header className="page-hero"><span className="eyebrow">Практические знания</span><h1>ГАЙДЫ</h1><p>Понятные инструкции для первого дня, стабильного FPS, модификаций и собственного сервера.</p></header><section className="section article-section"><div className="article-list">{guides.map((a,i)=><ArticleCard key={a.slug} article={a} index={i+1}/>)}</div></section></main>}
