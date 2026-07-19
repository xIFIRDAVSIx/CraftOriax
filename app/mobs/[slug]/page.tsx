import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Heart,
  Sword,
  Globe,
  Sun,
  Package,
  Brain,
  Scroll
} from 'lucide-react'

import {
  getAllMobSlugs,
  getMobBySlug,
  mobs
} from '@/lib/content'
import MobBanner from '@/components/MobBanner/MobBanner'

import styles from './mob-detail.module.css'


export function generateStaticParams() {
  return getAllMobSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const mob = getMobBySlug(slug)

  if (!mob) {
    return {
      title: 'Моб не найден',
      description: 'Запрашиваемый моб не существует.'
    }
  }

  return {
    title: `${mob.name} — моб Minecraft`,
    description: mob.description
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const mob = getMobBySlug(slug)

  if (!mob) {
    notFound()
  }

  const summary = mobs.find((m) => m.slug === slug)

  return (
    <main>
      <article className={styles.article}>
        <nav className={styles.breadcrumbs}>
          <Link href="/mobs">Мобы</Link>
          <span>/</span>
          <span>{mob.name}</span>
        </nav>

        <MobBanner
          name={mob.name}
          category={mob.category}
          health={mob.health}
          banner={mob.banner}
          editions={mob.editions}
          variant="page"
        />

        <section className={styles.description}>
          <h2>Описание</h2>
          <p>{mob.description}</p>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Heart size={20} />
              <h3>Здоровье</h3>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.bigStat}>
                {mob.health} HP
              </span>
              <span className={styles.subStat}>
                {mob.category === 'Босс'
                  ? 'Босс'
                  : 'Обычный моб'}
              </span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Sword size={20} />
              <h3>Урон</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.damageList}>
                <li>
                  <span>Лёгкая</span>
                  <strong>{mob.damage.easy}</strong>
                </li>
                <li>
                  <span>Обычная</span>
                  <strong>{mob.damage.normal}</strong>
                </li>
                <li>
                  <span>Сложная</span>
                  <strong>{mob.damage.hard}</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Globe size={20} />
              <h3>Биомы</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.tagList}>
                {mob.spawn.biomes.map((biome) => (
                  <li key={biome}>{biome}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Sun size={20} />
              <h3>Условия появления</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.bulletList}>
                {mob.spawn.conditions.map((cond) => (
                  <li key={cond}>{cond}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Package size={20} />
              <h3>Дроп</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.bulletList}>
                {mob.drops.map((drop) => (
                  <li key={drop}>{drop}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Brain size={20} />
              <h3>Поведение</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.bulletList}>
                {mob.behavior.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${styles.card} ${styles.wide}`}>
            <div className={styles.cardHeader}>
              <Scroll size={20} />
              <h3>Интересные факты</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.factList}>
                {mob.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
