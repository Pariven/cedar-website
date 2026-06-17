import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Cedar Tech Training | Growing people through open, innovative learning',
  description:
    'Cedar Tech Training builds and elevates human capital development, aligning industry needs with future trends. Explore our programmes in Change Management, ChangeabilityPro, ELSA, DTVET, and Leadership.',
  keywords: 'Cedar Tech Training, change management, ELSA, DTVET, ChangeabilityPro, leadership training, Malaysia',
  generator: 'v0.app',
  icons: {
    icon: '/CEDAR LOGO favicon.png',
    shortcut: '/CEDAR LOGO favicon.png',
    apple: '/CEDAR LOGO favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
