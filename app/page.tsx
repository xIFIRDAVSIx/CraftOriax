import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Box, Compass, Sparkles } from 'lucide-react'
import { MobCard } from '@/components/cards'
import { EditionHomeArticles, EditionVersionShowcase } from '@/components/edition-content'
import {articles, mobs, versions, bedrockVersions } from '@/lib/content'

export default function HomePage() {
  return <main>
    <section className="hero"><Image src="/images/minecraft-hero.png" alt="Кубический мир с горами, лесом и освещённым домом" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-grid" aria-hidden="true" /><div className="hero-content"><span className="eyebrow light">Независимая энциклопедия Minecraft</span><h1>ИССЛЕДУЙ<br />КАЖДЫЙ <em>БЛОК</em><br />СВОЕГО МИРА</h1><p>Версии, существа, механики и гайды — точная информация для Java и Bedrock Edition в одном месте.</p><div className="hero-actions"><Link className="button primary" href="/guides/first-night">Начать путешествие <ArrowRight /></Link><Link className="button glass" href="/versions">Смотреть версии</Link></div></div><div className="hero-stats"><div><strong>120+</strong><span>тем в базе</span></div><div><strong>2</strong><span>издания игры</span></div><div><strong>24/7</strong><span>доступ без рекламы</span></div></div><div className="scroll-cue">Прокрутите, чтобы исследовать <span /></div></section>
    <section className="section intro-section"><div className="section-heading"><span className="eyebrow">Актуальное обновление</span><h2>TRICKY <em>TRIALS</em></h2><p>Спускайтесь в процедурные испытательные камеры, сражайтесь с Бризом и собирайте материалы для самого необычного оружия последних лет.</p></div><div className="feature-split"><div className="feature-image"><Image src="/images/trial-chambers.png" alt="Подземная испытательная камера" fill sizes="(max-width: 800px) 100vw, 60vw" /><span className="image-index">UPDATE 1.21</span></div><div className="feature-list"><div><Compass /><span><b>Новая структура</b>Испытательные камеры полны ловушек и уникальной добычи.</span></div><div><Sparkles /><span><b>Новые противники</b>Бриз меняет привычный ритм боя.</span></div><div><Box /><span><b>Автоматизация</b>Крафтер открывает настоящие фабрики.</span></div><Link href="/versions/java-1-21">Полный разбор обновления <ArrowRight /></Link></div></div></section>
    <section className="section dark-section"><div className="section-title-row"><div><span className="eyebrow">Хронология</span><h2>ВАЖНЫЕ ВЕРСИИ</h2></div><Link href="/versions">Все обновления <ArrowRight /></Link></div><EditionVersionShowcase versions={[ ...versions, ...bedrockVersions ]}/></section>
    <section className="section"><div className="section-title-row"><div><span className="eyebrow">Бестиарий</span><h2>ОБИТАТЕЛИ МИРА</h2></div><Link href="/mobs">Каталог мобов <ArrowRight /></Link></div><div className="card-grid">{mobs.slice(0, 3).map((mob) => <MobCard key={mob.slug} mob={mob} />)}</div></section>
    <section className="section article-section"><div className="section-title-row"><div><span className="eyebrow">База знаний</span><h2>УЧИСЬ. СТРОЙ. ВЫЖИВАЙ.</h2></div><Link href="/guides">Все гайды <ArrowRight /></Link></div><EditionHomeArticles articles={articles}/></section>

  </main>
}

