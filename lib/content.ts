import javaVersionsData from '@/data/versions.json'
import bedrockVersionsData from '@/data/bedrock-versions.json'

import mobsData from '@/data/mobs.json'
import blocksData from '@/data/blocks.json'
import itemsData from '@/data/items.json'
import articlesData from '@/data/articles.json'

import creeperMob from '@/data/mobs/creeper.json'
import zombieMob from '@/data/mobs/zombie.json'
import skeletonMob from '@/data/mobs/skeleton.json'
import spiderMob from '@/data/mobs/spider.json'
import caveSpiderMob from '@/data/mobs/cave-spider.json'
import endermanMob from '@/data/mobs/enderman.json'
import beeMob from '@/data/mobs/bee.json'
import breezeMob from '@/data/mobs/breeze.json'
import allayMob from '@/data/mobs/allay.json'
import snifferMob from '@/data/mobs/sniffer.json'
import wardenMob from '@/data/mobs/warden.json'


export type Edition =
  'Java' | 'Bedrock'


export type MobCategory =
  | 'Враждебный'
  | 'Нейтральный'
  | 'Дружелюбный'
  | 'Босс'
  | 'Утилитарный'


export type MobBanner =
  | 'creeper'
  | 'zombie'
  | 'skeleton'
  | 'spider'
  | 'cave_spider'
  | 'enderman'
  | 'bee'
  | 'breeze'
  | 'allay'
  | 'sniffer'
  | 'warden'
  | 'default'


export type MobSummary = {
  slug: string
  name: string
  category: MobCategory
  health: number
  banner: MobBanner
  editions: Edition[]
}


export type MobDamage = {
  easy: number
  normal: number
  hard: number
}


export type MobSpawn = {
  biomes: string[]
  conditions: string[]
}


export type MobDetail = {
  slug: string
  name: string
  description: string
  category: MobCategory
  health: number
  damage: MobDamage
  spawn: MobSpawn
  drops: string[]
  behavior: string[]
  facts: string[]
  banner: MobBanner
  editions: Edition[]
}


export type VersionPatch = {
  version: string
  releaseDate?: string
  date?: string
  changes: string[]
}


export type Version = {
  slug: string
  id: string
  title: string
  name: string
  edition: Edition
  releaseDate: string
  date?: string
  year?: number
  codename: string
  summary: string
  features: string[]
  blocks: string[]
  items: string[]
  mobs: string[]
  biomes: string[]
  structures: string[]
  patches: VersionPatch[]
  image: string
  accent: string
}


export type Block = {
  slug: string
  name: string
  category: string
  use: string
  location?: string
  hardness?: number
  editions: Edition[]
  image: string
}


export type Item = {
  slug: string
  name: string
  category: string
  description: string
  recipe?: string
  usage?: string
  editions: Edition[]
  image: string
}


export type Article = {
  slug: string
  title: string
  description: string
  type: 'guide' | 'news'
  category: string
  readTime: string
  date: string
  image: string
  content: string[]
}


export const versions =
  javaVersionsData as Version[]


export const bedrockVersions =
  bedrockVersionsData as Version[]


export const mobs =
  mobsData as MobSummary[]


export const blocks =
  blocksData as Block[]


export const items =
  itemsData as Item[]


export const articles =
  articlesData as Article[]


export const guides =
  articles.filter(
    (article) =>
      article.type === 'guide'
  )


export const news =
  articles.filter(
    (article) =>
      article.type === 'news'
  )


const mobDetails: Record<string, MobDetail> = {
  creeper: creeperMob as MobDetail,
  zombie: zombieMob as MobDetail,
  skeleton: skeletonMob as MobDetail,
  spider: spiderMob as MobDetail,
  'cave-spider': caveSpiderMob as MobDetail,
  enderman: endermanMob as MobDetail,
  bee: beeMob as MobDetail,
  breeze: breezeMob as MobDetail,
  allay: allayMob as MobDetail,
  sniffer: snifferMob as MobDetail,
  warden: wardenMob as MobDetail,
}


export function getMobBySlug(
  slug: string
): MobDetail | null {
  return mobDetails[slug] ?? null
}


export function getAllMobSlugs(): string[] {
  return mobs.map((m) => m.slug)
}


export const catalogLabels = {

  versions: {
    title: 'Версии',
    eyebrow: 'Хронология игры',
    description:
      'Все ключевые обновления Java и Bedrock Edition — механики, мобы, блоки и история изменений.'
  },

  mobs: {
    title: 'Мобы',
    eyebrow: 'Обитатели мира',
    description:
      'Поведение, здоровье, места появления и добыча существ Minecraft.'
  },

  blocks: {
    title: 'Блоки',
    eyebrow: 'Основа каждого мира',
    description:
      'Строительные, природные и функциональные блоки — где найти и как использовать.'
  },

  items: {
    title: 'Предметы',
    eyebrow: 'Инвентарь исследователя',
    description:
      'Инструменты, оружие и материалы с рецептами и практическим применением.'
  },

}


export type SearchEntry = {
  slug: string
  title: string
  description: string
  type: string
  href: string
  meta: string
  editions: Edition[]
}


const bothEditions: Edition[] =
  [
    'Java',
    'Bedrock'
  ]


export const searchIndex: SearchEntry[] = [

  ...versions.map((v) => ({
    slug: v.slug,
    title: v.name,
    description: v.summary,
    type: 'Версия',
    href: `/versions/${v.slug}`,
    meta: `${v.edition} · ${v.date || ''}`,
    editions: [
      v.edition
    ]
  })),


  ...bedrockVersions.map((v) => ({
    slug: v.slug,
    title: v.name,
    description: v.summary,
    type: 'Версия',
    href: `/versions/${v.slug}`,
    meta: `${v.edition} · ${v.date || ''}`,
    editions: [
      v.edition
    ]
  })),


  ...mobs.map((m) => ({
    slug: m.slug,
    title: m.name,
    description:
      `${m.category} моб Minecraft с ${m.health} HP. Полное описание, поведение, дроп и факты.`,
    type: 'Моб',
    href: `/mobs/${m.slug}`,
    meta: `${m.category} · ${m.health} HP`,
    editions: m.editions
  })),


  ...blocks.map((b) => ({
    slug: b.slug,
    title: b.name,
    description: b.use,
    type: 'Блок',
    href: `/blocks/${b.slug}`,
    meta: b.category,
    editions: b.editions
  })),


  ...items.map((i) => ({
    slug: i.slug,
    title: i.name,
    description: i.description,
    type: 'Предмет',
    href: `/items/${i.slug}`,
    meta: i.category,
    editions: i.editions
  })),


  ...articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    type:
      a.type === 'guide'
        ? 'Гайд'
        : 'Новость',
    href:
      `/${a.type === 'guide'
        ? 'guides'
        : 'news'}/${a.slug}`,
    meta:
      `${a.category} · ${a.readTime}`,
    editions:
      bothEditions
  }))

]
