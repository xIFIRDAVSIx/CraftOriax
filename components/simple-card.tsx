import Link from 'next/link'
import { ArrowUpRight, Box, Hammer } from 'lucide-react'
import type { Block, Item } from '@/lib/content'

export function SimpleCard({ item, type }: { item: Block | Item; type: 'blocks' | 'items' }) {
  const isBlock = type === 'blocks'
  const description = isBlock ? (item as Block).use : (item as Item).description
  const detail = isBlock ? (item as Block).location : (item as Item).recipe
  return <Link href={`/${type}/${item.slug}`} className="simple-card"><div className="simple-icon">{isBlock ? <Box /> : <Hammer />}</div><span className="eyebrow">{item.category}</span><h2>{item.name}</h2><p>{description}</p><div className="simple-detail"><span>{isBlock ? 'Где найти' : 'Рецепт'}</span><strong>{detail}</strong></div><ArrowUpRight className="simple-arrow" /></Link>
}
