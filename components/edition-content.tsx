'use client'

import { ArticleCard, VersionCard } from './cards'
import { SimpleCard } from './simple-card'
import { supportsEdition, useEdition } from './edition-provider'
import type { Article, Block, Item, Version } from '@/lib/content'

export function EditionSimpleGrid({ items, type }: { items: (Block | Item)[]; type: 'blocks' | 'items' }) {
  const { edition } = useEdition()
  const filtered = items.filter((item) => supportsEdition(item, edition))
  return <>{filtered.length ? <div className="card-grid">{filtered.map((item) => <SimpleCard key={item.slug} item={item} type={type} />)}</div> : <Empty edition={edition} />}</>
}

export function EditionArticleList({ items }: { items: Article[] }) {
  const { edition } = useEdition()
  const filtered = items.filter((item) => supportsEdition(item, edition))
  return <>{filtered.length ? <div className="article-list">{filtered.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div> : <Empty edition={edition} />}</>
}

export function EditionVersionShowcase({ versions }: { versions: Version[] }) {
  const { edition } = useEdition()
  const filtered = versions.filter((version) => supportsEdition(version, edition)).slice(0, 3)
  return <div className="versions-layout"><div>{filtered[0] && <VersionCard version={filtered[0]} featured />}</div><div className="stacked-cards">{filtered.slice(1).map((version) => <VersionCard key={version.slug} version={version} />)}</div></div>
}

export function EditionHomeArticles({ articles }: { articles: Article[] }) {
  const { edition } = useEdition()
  return <div className="article-list">{articles.filter((article) => supportsEdition(article, edition)).slice(0, 4).map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div>
}

function Empty({ edition }: { edition: string }) {
  return <div className="empty-state"><h2>Материалы не найдены</h2><p>Для {edition} Edition пока нет материалов в этом разделе.</p></div>
}
