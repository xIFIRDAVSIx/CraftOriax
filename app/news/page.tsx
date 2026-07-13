import type { Metadata } from 'next'
import { ArticleCard } from '@/components/cards'
import { news } from '@/lib/content'
export const metadata: Metadata = { title: 'Новости Minecraft', description: 'Разборы обновлений, механик и культуры Minecraft.' }
export default function Page(){return <main><header className="page-hero"><span className="eyebrow">Журнал CraftOriax</span><h1>НОВОСТИ</h1><p>Глубокие разборы обновлений и наблюдения за тем, как меняется кубический мир.</p></header><section className="section article-section"><div className="article-list">{news.map((a,i)=><ArticleCard key={a.slug} article={a} index={i+1}/>)}</div></section></main>}
