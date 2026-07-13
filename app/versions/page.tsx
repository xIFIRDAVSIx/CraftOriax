import type { Metadata } from 'next'
import { CatalogGrid } from '@/components/catalog-grid'
import { catalogLabels, versions } from '@/lib/content'
export const metadata: Metadata = { title: 'Версии Minecraft', description: catalogLabels.versions.description }
export default function Page(){const c=catalogLabels.versions;return <main><header className="page-hero"><span className="eyebrow">{c.eyebrow}</span><h1>{c.title.toUpperCase()}</h1><p>{c.description}</p></header><section className="catalog"><CatalogGrid items={versions} type="versions" /></section></main>}
