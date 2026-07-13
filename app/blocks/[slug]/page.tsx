import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blocks } from '@/lib/content'
export function generateStaticParams(){return blocks.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=blocks.find(b=>b.slug===slug);return {title:x?`${x.name} — блок Minecraft`:'Блок',description:x?.use}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=blocks.find(b=>b.slug===slug);if(!x)notFound();return <main><article className="detail-hero"><div className="breadcrumbs"><Link href="/blocks">Блоки</Link><span>/</span><span>{x.name}</span></div><div className="detail-heading"><div><span className="eyebrow">{x.category}</span><h1>{x.name}</h1></div><p>{x.use}</p></div></article><div className="detail-body"><div className="facts-grid"><div className="fact"><span>Категория</span><strong>{x.category}</strong></div><div className="fact"><span>Твёрдость</span><strong>{x.hardness}</strong></div></div><h2>ГДЕ НАЙТИ</h2><p>{x.location}.</p><h2>ИСПОЛЬЗОВАНИЕ</h2><p>{x.use}</p></div></main>}
