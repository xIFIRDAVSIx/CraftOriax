import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Russo_One, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const display = Russo_One({ weight: '400', subsets: ['cyrillic', 'latin'], variable: '--font-display' })
const body = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://craftoriax.vercel.app'),
  title: { default: 'CraftOriax — энциклопедия Minecraft', template: '%s | CraftOriax' },
  description: 'Большая русскоязычная энциклопедия Minecraft Java и Bedrock: версии, мобы, блоки, предметы и гайды.',
  openGraph: { title: 'CraftOriax', description: 'Исследуй каждый блок своего мира.', siteName: 'CraftOriax', locale: 'ru_RU', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0b100d' }, { media: '(prefers-color-scheme: light)', color: '#f3f1e8' }] }

const themeScript = `(function(){try{var t=localStorage.getItem('mc-theme');document.documentElement.dataset.theme=t||((matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark')}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${display.variable} ${body.variable} bg-background`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><SiteHeader />{children}<SiteFooter />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
