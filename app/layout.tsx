import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAYRACKS.DEV // STACKING AUTOMATIONS',
  description: 'Welcome to the rack room. I build AI automations that print money. Press START to get this bread.',
  keywords: ['AI', 'Automation', 'Developer', '8-bit', 'Retro', 'Money', 'Racks'],
  authors: [{ name: 'Ray' }],
  openGraph: {
    title: 'RAYRACKS.DEV // STACKING AUTOMATIONS',
    description: 'I build AI automations that print money. Ship fast. Stack racks.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="crt-overlay">
        {children}
      </body>
    </html>
  )
}
