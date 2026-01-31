'use client'

import { useEffect } from 'react'
import PixelNav from '@/components/PixelNav'
import HeroArcade from '@/components/HeroArcade'
import AboutQuest from '@/components/AboutQuest'
import BookshelfLibrary from '@/components/BookshelfLibrary'
import SkillsInventory from '@/components/SkillsInventory'
import ContactTerminal from '@/components/ContactTerminal'
import EmailPopup, { useEmailPopup } from '@/components/EmailPopup'

export default function Home() {
  const { isOpen, closePopup, handleInteraction } = useEmailPopup()

  // Track scroll for email popup trigger
  useEffect(() => {
    let scrollCount = 0
    const handleScroll = () => {
      scrollCount++
      if (scrollCount > 3) {
        handleInteraction()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleInteraction])

  // Track click attempts on protected content
  const handleProtectedClick = () => {
    handleInteraction()
  }

  return (
    <main className="min-h-screen bg-pixel-dark">
      <PixelNav />
      <HeroArcade />

      {/* Pixel divider */}
      <div className="retro-container">
        <div className="pixel-divider" />
      </div>

      <AboutQuest />

      {/* Pixel divider */}
      <div className="retro-container">
        <div className="pixel-divider" />
      </div>

      <div onClick={handleProtectedClick}>
        <BookshelfLibrary />
      </div>

      {/* Pixel divider */}
      <div className="retro-container">
        <div className="pixel-divider" />
      </div>

      <SkillsInventory />

      {/* Pixel divider */}
      <div className="retro-container">
        <div className="pixel-divider" />
      </div>

      <ContactTerminal />

      {/* Email popup */}
      <EmailPopup isOpen={isOpen} onClose={closePopup} />

      {/* Easter egg: Konami code listener could go here */}
    </main>
  )
}
