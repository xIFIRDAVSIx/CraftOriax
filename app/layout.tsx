import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Russo_One, Manrope } from 'next/font/google'
import { EditionProvider } from '@/components/edition-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'
import BackButton from '@/components/buttons/buttonBack'
import InfoButton from '@/components/buttons/info-button'

const display = Russo_One({ weight: '400', subsets: ['cyrillic', 'latin'], variable: '--font-display' })
const body = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://craftoriax.vercel.app'),
  title: { default: 'CraftOriax — энциклопедия Minecraft', template: '%s | CraftOriax' },
  description: 'Большая русскоязычная энциклопедия Minecraft Java и Bedrock: версии, мобы, блоки, предметы и гайды.',
  openGraph: { title: 'CraftOriax', description: 'Исследуй каждый блок своего мира.', siteName: 'CraftOriax', locale: 'ru_RU', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b100d' }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} bg-background`}
    >
      <body>
        <EditionProvider>
          <SiteHeader />

          <BackButton />

          {children}

          <SiteFooter />

          <InfoButton />
        </EditionProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}