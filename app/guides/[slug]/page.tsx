import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { guides } from '@/lib/content'
export function generateStaticParams(){return guides.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=guides.find(i=>i.slug===slug);return {title:x?.title??'Гайд',description:x?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=guides.find(i=>i.slug===slug);if(!x)notFound();return <main><article className="detail-hero"><div className="breadcrumbs"><Link href="/guides">Гайды</Link><span>/</span><span>{x.category}</span></div><div className="detail-heading"><div><span className="eyebrow">{x.date} · {x.readTime}</span><h1>{x.title}</h1></div><p>{x.description}</p></div><div className="detail-image"><Image src={x.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div></article><div className="detail-body">{x.content.map((p,i)=><section key={p}><h2>{i+1}. {['ПОДГОТОВКА','ГЛАВНЫЙ ШАГ','ЧТО ДАЛЬШЕ'][i]}</h2><p>{p}</p></section>)}</div></main>}
