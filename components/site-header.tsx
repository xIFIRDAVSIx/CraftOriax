'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'

const links = [
  ['Версии', '/versions'], ['Мобы', '/mobs'], ['Блоки', '/blocks'], ['Предметы', '/items'], ['Гайды', '/guides'], ['Новости', '/news'],
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const isLight = document.documentElement.dataset.theme === 'light'
    setDark(!isLight)
  }, [])

  function toggleTheme() {
    const nextDark = !dark
    setDark(nextDark)
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light'
    localStorage.setItem('mc-theme', nextDark ? 'dark' : 'light')
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const query = String(data.get('q') ?? '').trim()
    router.push(`/search${query ? `?q=${encodeURIComponent(query)}` : ''}`)
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="CraftOriax — главная">
          <span className="brand-cube" aria-hidden="true"><i /></span>
          <span>CRAFT<span>ORIAX</span></span>
        </Link>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Главная навигация">
          {links.map(([label, href]) => <Link key={href} className={pathname.startsWith(href) ? 'active' : ''} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <form className="header-search" onSubmit={submitSearch} role="search">
            <Search size={16} aria-hidden="true" />
            <input name="q" aria-label="Поиск по энциклопедии" placeholder="Найти..." />
          </form>
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Включить светлую тему' : 'Включить тёмную тему'}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Открыть меню">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  )
}
