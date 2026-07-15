'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { MobCard, VersionCard } from './cards'
import { supportsEdition, useEdition } from './edition-provider'
import type { Mob, Version } from '@/lib/content'

type CatalogItem = Version | Mob

export function CatalogGrid({ items, type }: { items: CatalogItem[]; type: 'versions' | 'mobs' }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Все')
  const { edition } = useEdition()
  const filters = type === 'versions' ? [] : ['Все', 'Враждебный', 'Дружелюбный', 'Нейтральный']
  const filtered = useMemo(() => items.filter((item) => {
    const matchesText = item.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = type === 'versions' || filter === 'Все' || (item as Mob).category === filter
    return supportsEdition(item, edition) && matchesText && matchesCategory
  }), [items, query, filter, type, edition])
  return <><div className="catalog-tools"><label><Search size={18} /><span className="sr-only">Поиск в каталоге</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Поиск для ${edition}...`} /></label>{filters.length > 0 && <div className="filter-pills">{filters.map((value) => <button key={value} className={filter === value ? 'active' : ''} onClick={() => setFilter(value)}>{value}</button>)}</div>}</div><div className="card-grid">{filtered.map((item) => type === 'versions' ? <VersionCard key={item.slug} version={item as Version} /> : <MobCard key={item.slug} mob={item as Mob} />)}</div>{!filtered.length && <div className="empty-state"><h2>Ничего не найдено</h2><p>Для {edition} Edition нет материалов по этому запросу.</p></div>}</>
}
