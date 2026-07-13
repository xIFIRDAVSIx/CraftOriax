import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SearchExperience } from '@/components/search-experience'
import { searchIndex } from '@/lib/content'
export const metadata:Metadata={title:'Поиск',description:'Поиск по версиям, мобам, блокам, предметам и статьям CraftOriax.'}
export default function Page(){return <main className="search-page"><span className="eyebrow">Вся база знаний</span><h1>ПОИСК</h1><Suspense fallback={<p>Загрузка поиска...</p>}><SearchExperience entries={searchIndex}/></Suspense></main>}
