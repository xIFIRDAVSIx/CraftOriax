import type { Metadata } from 'next'
import { SimpleCard } from '@/components/simple-card'
import { catalogLabels, items } from '@/lib/content'
export const metadata: Metadata = { title: 'Предметы Minecraft', description: catalogLabels.items.description }
export default function Page(){const c=catalogLabels.items;return <main><header className="page-hero"><span className="eyebrow">{c.eyebrow}</span><h1>{c.title.toUpperCase()}</h1><p>{c.description}</p></header><section className="catalog"><div className="card-grid">{items.map(i=><SimpleCard key={i.slug} item={i} type="items" />)}</div></section></main>}
