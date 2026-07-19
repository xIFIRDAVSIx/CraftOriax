import type { FC } from 'react'

import type {
  MobBanner,
  MobCategory,
  Edition
} from '@/lib/content'

import CreeperFace from './icons/CreeperFace'
import ZombieFace from './icons/ZombieFace'
import SkeletonFace from './icons/SkeletonFace'
import EndermanFace from './icons/EndermanFace'
import SpiderFace from './icons/SpiderFace'
import BeeFace from './icons/BeeFace'
import BreezeFace from './icons/BreezeFace'
import AllayFace from './icons/AllayFace'
import SnifferFace from './icons/SnifferFace'
import WardenFace from './icons/WardenFace'
import DefaultFace from './icons/DefaultFace'

import type { MobIconProps } from './icons/shared'

import styles from './MobBanner.module.css'


type MobBannerProps = {
  name: string
  category: MobCategory
  health: number
  banner: MobBanner
  editions: Edition[]
  variant?: 'page' | 'card'
}


const iconMap: Record<
  MobBanner,
  FC<MobIconProps>
> = {
  creeper: CreeperFace,
  zombie: ZombieFace,
  skeleton: SkeletonFace,
  spider: SpiderFace,
  enderman: EndermanFace,
  bee: BeeFace,
  breeze: BreezeFace,
  allay: AllayFace,
  sniffer: SnifferFace,
  warden: WardenFace,
  default: DefaultFace
}


const categoryColors: Record<
  MobCategory,
  string
> = {
  'Враждебный': '#b83d3d',
  'Нейтральный': '#d7a43b',
  'Дружелюбный': '#4da65d',
  'Босс': '#7d4db8',
  'Утилитарный': '#4c8bf5'
}


export default function MobBanner({
  name,
  category,
  health,
  banner,
  editions,
  variant = 'page'
}: MobBannerProps) {
  const Icon = iconMap[banner] ?? DefaultFace
  const color = categoryColors[category] ?? '#5b8cff'

  return (
    <div
      className={`${styles.mobBanner} ${variant === 'card' ? styles.card : ''}`}
      style={{
        '--accent': color
      } as React.CSSProperties}
    >
      <div className={styles.pixelGrid} />

      <div className={styles.glow} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>
          Minecraft Mob
        </span>

        <h1 className={styles.title}>
          {name.toUpperCase()}
        </h1>

        <div className={styles.meta}>
          <span
            className={styles.category}
            style={{ background: color }}
          >
            {category}
          </span>

          <span className={styles.editions}>
            {editions.join(' • ')}
          </span>

          <span className={styles.health}>
            ❤ {health} HP
          </span>
        </div>
      </div>

      <div className={styles.face}>
        <Icon size={variant === 'card' ? 140 : 220} />
      </div>
    </div>
  )
}
