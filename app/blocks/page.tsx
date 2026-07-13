import type { Metadata } from 'next'
import { SimpleCard } from '@/components/simple-card'
import { blocks, catalogLabels } from '@/lib/content'
export const metadata: Metadata = { title: 'Блоки Minecraft', description: catalogLabels.blocks.description }
export default function Page(){const c=catalogLabels.blocks;return <main><header className="page-hero"><span className="eyebrow">{c.eyebrow}</span><h1>{c.title.toUpperCase()}</h1><p>{c.description}</p></header><section className="catalog"><div className="card-grid">{blocks.map(b=><SimpleCard key={b.slug} item={b} type="blocks" />)}</div></section></main>}
