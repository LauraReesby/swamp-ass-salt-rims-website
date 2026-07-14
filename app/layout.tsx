import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Swamp Ass & Salt Rims',
  description: 'Margarita machine recipes, directions, and reviews',
  openGraph: {
    title: 'Swamp Ass & Salt Rims',
    description: 'Margarita machine recipes, directions, and reviews',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swamp Ass & Salt Rims',
    description: 'Margarita machine recipes, directions, and reviews',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
