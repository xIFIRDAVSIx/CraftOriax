import Link from 'next/link'
import { notFound } from 'next/navigation'
import { items } from '@/lib/content'
export function generateStaticParams(){return items.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=items.find(i=>i.slug===slug);return {title:x?`${x.name} — предмет Minecraft`:'Предмет',description:x?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=items.find(i=>i.slug===slug);if(!x)notFound();return <main><article className="detail-hero"><div className="breadcrumbs"><Link href="/items">Предметы</Link><span>/</span><span>{x.name}</span></div><div className="detail-heading"><div><span className="eyebrow">{x.category}</span><h1>{x.name}</h1></div><p>{x.description}</p></div></article><div className="detail-body"><h2>РЕЦЕПТ</h2><div className="fact"><span>Ингредиенты</span><strong>{x.recipe}</strong></div><h2>ПРИМЕНЕНИЕ</h2><p>{x.usage}</p></div></main>}
