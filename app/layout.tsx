import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crabbae | Bold Seafood, Big Energy',
  description: 'Crabbae brings bold seafood, unforgettable plates, late-night energy, and a full New Jersey vibe. Visit us in Kenilworth or Maplewood for the best crab dishes.',
  keywords: ['seafood', 'crab', 'crabbae', 'New Jersey', 'Kenilworth', 'Maplewood', 'lobster', 'shrimp', 'cajun', 'seafood boil'],
  openGraph: {
    title: 'Crabbae | Bold Seafood, Big Energy',
    description: 'Crabbae brings bold seafood, unforgettable plates, late-night energy, and a full New Jersey vibe.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
