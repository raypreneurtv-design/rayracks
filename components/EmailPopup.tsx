'use client'

import { useState, useEffect, useCallback } from 'react'

interface EmailPopupProps {
  onClose: () => void
  isOpen: boolean
}

export default function EmailPopup({ onClose, isOpen }: EmailPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you'd normally send to your email service
      console.log('Email submitted:', email)
      setTimeout(() => {
        onClose()
      }, 2000)
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-pixel-black/90"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-pixel-navy border-4 border-pixel-cream p-6 max-w-md w-full ${isShaking ? 'animate-shake' : ''}`}
        style={{
          boxShadow: '8px 8px 0 0 #0f0f23, inset 0 0 0 4px #16213e'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-pixel-magenta border-3 border-pixel-black flex items-center justify-center font-pixel text-xs hover:bg-pixel-orange transition-colors"
          style={{ boxShadow: '2px 2px 0 0 #0f0f23' }}
        >
          X
        </button>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-pixel-cyan" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-pixel-cyan" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-pixel-cyan" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-pixel-cyan" />

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center gap-2 mb-4">
                <span className="text-2xl">📚</span>
                <span className="text-2xl animate-bounce-pixel">✨</span>
                <span className="text-2xl">📚</span>
              </div>
              <h2 className="font-pixel text-pixel-money text-sm mb-2 pixel-text-glow">
                LIBRARY CARD
              </h2>
              <p className="font-pixel text-[10px] text-pixel-cream leading-relaxed">
                JOIN THE ARCHIVE
              </p>
            </div>

            {/* Dialog box style message */}
            <div className="dialog-box mb-6">
              <p className="font-retro text-xl text-pixel-cream leading-relaxed">
                &gt; Greetings, traveler! Want exclusive access to my builds,
                automation secrets, and dev experiments?
              </p>
              <span className="inline-block w-2 h-4 bg-pixel-money animate-blink ml-1" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-pixel text-[8px] text-pixel-yellow mb-2 uppercase">
                  Enter Email Address:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="player1@email.com"
                  className="w-full bg-pixel-black border-3 border-pixel-purple p-3 font-retro text-xl text-pixel-green placeholder:text-pixel-purple/50 focus:border-pixel-cyan focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="pixel-btn pixel-btn-cyan w-full"
              >
                [ SUBSCRIBE ]
              </button>
            </form>

            {/* Skip option */}
            <button
              onClick={onClose}
              className="w-full mt-4 font-pixel text-[8px] text-pixel-cream/50 hover:text-pixel-magenta transition-colors"
            >
              &gt; SKIP FOR NOW
            </button>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-8">
            <div className="text-4xl mb-4 animate-bounce-pixel">🎮</div>
            <h3 className="font-pixel text-pixel-green text-sm mb-2">
              +1 SUBSCRIBER!
            </h3>
            <p className="font-retro text-xl text-pixel-cream">
              Achievement unlocked: Library Member
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-pixel-yellow animate-coin-spin" style={{ animationDelay: `${i * 0.1}s` }}>
                  ⭐
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Hook to manage popup state
export function useEmailPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsOpen(true)
      setHasShown(true)
    }
  }, [hasShown])

  const closePopup = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Show after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      showPopup()
    }, 60000) // 60 seconds

    return () => clearTimeout(timer)
  }, [showPopup])

  // Track interaction - show on scroll or click attempts
  const handleInteraction = useCallback(() => {
    if (!hasInteracted && !hasShown) {
      setHasInteracted(true)
      showPopup()
    }
  }, [hasInteracted, hasShown, showPopup])

  return { isOpen, showPopup, closePopup, handleInteraction }
}
