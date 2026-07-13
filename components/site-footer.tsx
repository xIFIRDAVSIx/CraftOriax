import Link from 'next/link'

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid"><div><Link className="brand" href="/"><span className="brand-cube"><i /></span><span>CRAFT<span>ORIAX</span></span></Link><p>Независимая русскоязычная энциклопедия Minecraft Java и Bedrock Edition.</p></div><div><strong>Исследовать</strong><Link href="/versions">Версии</Link><Link href="/mobs">Мобы</Link><Link href="/blocks">Блоки</Link></div><div><strong>Учиться</strong><Link href="/guides">Гайды</Link><Link href="/news">Новости</Link><Link href="/search">Поиск</Link></div></div><div className="footer-bottom"><span>© 2026 CRAFTORIAX</span><span>Не является официальным продуктом Mojang Studios.</span></div></footer>
}
