'use client'

import { useEffect, useState } from 'react'
import PixelNav from '@/components/PixelNav'
import HeroArcade from '@/components/HeroArcade'
import AboutQuest from '@/components/AboutQuest'
import Library from '@/components/Library'
import SocialsFooter from '@/components/SocialsFooter'
import EmailPopup, { useEmailPopup } from '@/components/EmailPopup'

export default function Home() {
  const { isOpen, closePopup, showPopup, hasShown } = useEmailPopup()
  const [showSections, setShowSections] = useState(false)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle library access - show popup if not subscribed
  const handleLibraryAccess = () => {
    if (!hasShown) {
      showPopup()
    }
  }

  // Called when HeroArcade content is ready (after loading)
  const handleContentReady = () => {
    setShowSections(true)
  }

  return (
    <main className={`min-h-screen bg-pixel-dark ${!showSections ? 'overflow-hidden h-screen' : ''}`}>
      <PixelNav />
      <HeroArcade onContentReady={handleContentReady} />

      {/* Other sections only visible after pressing start */}
      {showSections && (
        <>
          {/* Pixel divider */}
          <div className="retro-container">
            <div className="pixel-divider" />
          </div>

          <AboutQuest />

          {/* Pixel divider */}
          <div className="retro-container">
            <div className="pixel-divider" />
          </div>

          <Library onAccess={handleLibraryAccess} />

          {/* Pixel divider */}
          <div className="retro-container">
            <div className="pixel-divider" />
          </div>

          <SocialsFooter />
        </>
      )}

      {/* Email popup */}
      <EmailPopup isOpen={isOpen} onClose={closePopup} />

      {/* Easter egg: Konami code listener could go here */}
    </main>
  )
}
