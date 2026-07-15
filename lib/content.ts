import versionsData from '@/data/versions.json'
import mobsData from '@/data/mobs.json'
import blocksData from '@/data/blocks.json'
import itemsData from '@/data/items.json'
import articlesData from '@/data/articles.json'

export type Version = (typeof versionsData)[number]
export type Mob = (typeof mobsData)[number]
export type Block = (typeof blocksData)[number]
export type Item = (typeof itemsData)[number]
export type Article = (typeof articlesData)[number]

export const versions = versionsData as Version[]
export const mobs = mobsData as Mob[]
export const blocks = blocksData as Block[]
export const items = itemsData as Item[]
export const articles = articlesData as Article[]
export const guides = articles.filter((article) => article.type === 'guide')
export const news = articles.filter((article) => article.type === 'news')

export const catalogLabels = {
  versions: { title: 'Версии', eyebrow: 'Хронология игры', description: 'Все ключевые обновления Java и Bedrock Edition — механики, мобы, блоки и история изменений.' },
  mobs: { title: 'Мобы', eyebrow: 'Обитатели мира', description: 'Поведение, здоровье, места появления и добыча существ Minecraft.' },
  blocks: { title: 'Блоки', eyebrow: 'Основа каждого мира', description: 'Строительные, природные и функциональные блоки — где найти и как использовать.' },
  items: { title: 'Предметы', eyebrow: 'Инвентарь исследователя', description: 'Инструменты, оружие и материалы с рецептами и практическим применением.' },
}

export type Edition = 'Java' | 'Bedrock'
export type SearchEntry = { slug: string; title: string; description: string; type: string; href: string; meta: string; editions: Edition[] }
const bothEditions: Edition[] = ['Java', 'Bedrock']
export const searchIndex: SearchEntry[] = [
  ...versions.map((v) => ({ slug: v.slug, title: v.name, description: v.summary, type: 'Версия', href: `/versions/${v.slug}`, meta: `${v.edition} · ${v.date}`, editions: [v.edition as Edition] })),
  ...mobs.map((m) => ({ slug: m.slug, title: m.name, description: m.behavior, type: 'Моб', href: `/mobs/${m.slug}`, meta: `${m.category} · ${m.health} HP`, editions: m.editions as Edition[] })),
  ...blocks.map((b) => ({ slug: b.slug, title: b.name, description: b.use, type: 'Блок', href: `/blocks/${b.slug}`, meta: b.category, editions: b.editions as Edition[] })),
  ...items.map((i) => ({ slug: i.slug, title: i.name, description: i.description, type: 'Предмет', href: `/items/${i.slug}`, meta: i.category, editions: i.editions as Edition[] })),
  ...articles.map((a) => ({ slug: a.slug, title: a.title, description: a.description, type: a.type === 'guide' ? 'Гайд' : 'Новость', href: `/${a.type === 'guide' ? 'guides' : 'news'}/${a.slug}`, meta: `${a.category} · ${a.readTime}`, editions: bothEditions })),
]
