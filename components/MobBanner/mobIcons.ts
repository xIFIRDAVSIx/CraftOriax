import type { FC } from 'react'

import type { MobBanner } from '@/lib/content'

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
import CaveSpiderFace from './icons/CaveSpiderFace'


export const mobIconMap: Record<
  MobBanner,
  FC<MobIconProps>
> = {
  creeper: CreeperFace,
  zombie: ZombieFace,
  skeleton: SkeletonFace,
  spider: SpiderFace,
  cave_spider: CaveSpiderFace,
  enderman: EndermanFace,
  bee: BeeFace,
  breeze: BreezeFace,
  allay: AllayFace,
  sniffer: SnifferFace,
  warden: WardenFace,
  default: DefaultFace
}


export function getMobIcon(
  banner: MobBanner
): FC<MobIconProps> {
  return mobIconMap[banner] ?? DefaultFace
}
