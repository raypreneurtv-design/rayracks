import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAYRACKS.DEV // THE DEV ROOM',
  description: "Ray Racks' Dev Room - Building automations for business and personal life. Check out the latest projects and content.",
  keywords: ['AI', 'Automation', 'Developer', '8-bit', 'Retro', 'n8n', 'Claude'],
  authors: [{ name: 'Ray Racks' }],
  openGraph: {
    title: 'RAYRACKS.DEV // THE DEV ROOM',
    description: 'Building automations for business and personal life. Check out the latest projects and content.',
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
