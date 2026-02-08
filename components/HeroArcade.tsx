'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

// Mario '98 style coin block animation component
function MarioLoadingAnimation() {
  const [marioY, setMarioY] = useState(0)
  const [coinVisible, setCoinVisible] = useState(false)
  const [coinY, setCoinY] = useState(0)
  const [blockHit, setBlockHit] = useState(false)
  const [coinCount, setCoinCount] = useState(0)
  const [showCoinText, setShowCoinText] = useState(false)

  useEffect(() => {
    // Mario jump animation - '98 style
    const jumpSequence = () => {
      // Jump up
      setMarioY(-45)
      setTimeout(() => {
        setBlockHit(true)
        setCoinVisible(true)
        setCoinY(-15)
        setShowCoinText(true)
        setCoinCount(prev => prev + 1)
      }, 180)
      setTimeout(() => {
        setCoinY(-50)
      }, 280)
      setTimeout(() => {
        setMarioY(0)
        setBlockHit(false)
      }, 380)
      setTimeout(() => {
        setCoinY(-85)
      }, 480)
      setTimeout(() => {
        setCoinVisible(false)
        setShowCoinText(false)
        setCoinY(0)
      }, 650)
    }

    jumpSequence()
    const interval = setInterval(jumpSequence, 1100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-40 w-64 mx-auto">
      {/* Pixel sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5c94fc] to-[#87ceeb] rounded" style={{ imageRendering: 'pixelated' }} />

      {/* Coin counter - '98 style */}
      <div className="absolute top-2 right-2 flex items-center gap-1 font-pixel text-[8px] text-white" style={{ textShadow: '1px 1px 0 #000' }}>
        <span className="text-yellow-400">$</span>
        <span>×{String(coinCount).padStart(2, '0')}</span>
      </div>

      {/* Question block */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 flex items-center justify-center transition-transform`}
        style={{
          background: blockHit ? '#a0522d' : 'linear-gradient(135deg, #ffa500 0%, #ff8c00 30%, #b8860b 100%)',
          border: '3px solid #000',
          boxShadow: 'inset -2px -2px 0 #8b4513, inset 2px 2px 0 #ffe135',
          transform: blockHit ? 'translateX(-50%) translateY(-3px)' : 'translateX(-50%)',
          transitionDuration: '40ms',
          transitionTimingFunction: 'steps(2)'
        }}
      >
        <span className="font-pixel text-pixel-black text-base" style={{ textShadow: 'none' }}>
          {blockHit ? '' : '?'}
        </span>
      </div>

      {/* Coin popping out - gold dollar style */}
      {coinVisible && (
        <div
          className="absolute left-1/2 -translate-x-1/2 font-pixel text-xl"
          style={{
            top: `${32 + coinY}px`,
            transition: 'top 0.12s steps(4)',
            textShadow: '0 0 4px #ffd700'
          }}
        >
          <span className="text-yellow-400 animate-coin-spin">$</span>
        </div>
      )}

      {/* +100 text popup */}
      {showCoinText && (
        <div
          className="absolute left-1/2 translate-x-2 font-pixel text-[8px] text-white"
          style={{
            top: `${25 + coinY * 0.5}px`,
            textShadow: '1px 1px 0 #000',
            transition: 'top 0.12s steps(3)'
          }}
        >
          +100
        </div>
      )}

      {/* Mario (pixel art style) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 w-8 h-10"
        style={{
          transform: `translateX(-50%) translateY(${marioY}px)`,
          transition: 'transform 0.12s steps(4)'
        }}
      >
        <div className="relative w-full h-full" style={{ imageRendering: 'pixelated' }}>
          {/* Hat */}
          <div className="absolute top-0 left-1 w-6 h-2" style={{ background: '#ff0000' }} />
          {/* Face */}
          <div className="absolute top-2 left-0 w-8 h-3" style={{ background: '#ffcc99' }} />
          {/* Mustache */}
          <div className="absolute top-4 left-1 w-4 h-1" style={{ background: '#8b4513' }} />
          {/* Body */}
          <div className="absolute top-5 left-0 w-8 h-2" style={{ background: '#ff0000' }} />
          {/* Overalls */}
          <div className="absolute top-7 left-1 w-6 h-3" style={{ background: '#0000cc' }} />
        </div>
      </div>

      {/* Ground blocks - brick style */}
      <div className="absolute bottom-0 left-0 right-0 h-6 flex">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full"
            style={{
              background: '#8b4513',
              border: '1px solid #654321',
              boxShadow: 'inset 1px 1px 0 #a0522d'
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface HeroArcadeProps {
  onContentReady?: () => void
}

export default function HeroArcade({ onContentReady }: HeroArcadeProps) {
  const [showContent, setShowContent] = useState(false)
  const [pressedStart, setPressedStart] = useState(false)
  const [blinkStart, setBlinkStart] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => {
      setBlinkStart(prev => !prev)
    }, 500)
    return () => clearInterval(blink)
  }, [])

  const handleStart = () => {
    setPressedStart(true)
    setTimeout(() => {
      setShowContent(true)
      onContentReady?.()
    }, 2000) // Extended for Mario animation
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Pixel grid background - money green */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,210,106,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,106,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating money pixels decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pixel-money/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatBook ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="retro-container relative z-10 text-center">
        {!pressedStart ? (
          /* Start screen */
          <div className="animate-pixel-fade">
            {/* Title art - Mario style pixelated */}
            <div className="mb-8">
              <div className="inline-block p-4 md:p-6 relative">
                {/* Pixel block background effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-pixel-money/20 to-transparent"
                  style={{
                    boxShadow: 'inset 0 -4px 0 rgba(0,0,0,0.3), inset 0 4px 0 rgba(255,255,255,0.1)',
                    border: '4px solid transparent',
                    borderImage: 'repeating-linear-gradient(90deg, #00d26a 0px, #00d26a 8px, transparent 8px, transparent 16px) 4'
                  }}
                />
                <h1 className="font-pixel text-xl sm:text-2xl md:text-4xl text-pixel-money relative"
                  style={{
                    textShadow: `
                      4px 4px 0 #0f0f23,
                      -2px -2px 0 #0f0f23,
                      2px -2px 0 #0f0f23,
                      -2px 2px 0 #0f0f23,
                      0 0 20px #00d26a,
                      0 0 40px #00d26a,
                      0 0 60px rgba(0,210,106,0.5)
                    `,
                    letterSpacing: '4px'
                  }}>
                  RAYRACKS DEV ROOM
                </h1>
                {/* Decorative coin icons */}
                <div className="absolute -top-2 -left-2 text-lg animate-bounce-pixel">💰</div>
                <div className="absolute -top-2 -right-2 text-lg animate-bounce-pixel" style={{ animationDelay: '0.2s' }}>💰</div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-pixel text-[8px] sm:text-[10px] md:text-xs text-pixel-gold mb-12 max-w-lg mx-auto leading-relaxed">
              //SHARING MY CURRENT BUILDS, MARKET STRATEGIES & DAILY THOUGHTS//
            </p>

            {/* Press Start */}
            <button
              onClick={handleStart}
              className={`font-pixel text-sm sm:text-base md:text-lg text-pixel-cream transition-opacity ${blinkStart ? 'opacity-100' : 'opacity-30'}`}
            >
              &gt;&gt; PRESS START &lt;&lt;
            </button>

            {/* Credits */}
            <div className="mt-16 font-pixel text-[8px] md:text-[10px] text-pixel-cream/40">
              <p>Ray Ndaula's Dev. Room</p>
            </div>
          </div>
        ) : !showContent ? (
          /* Loading transition - Mario style */
          <div className="animate-pixel-fade">
            <MarioLoadingAnimation />
            <p className="font-pixel text-pixel-money text-sm md:text-base mt-6">LOADING<span className="loading-dots"></span></p>
            <div className="mt-4 w-48 mx-auto health-bar">
              <div className="health-bar-fill animate-pulse" style={{ width: '60%' }} />
            </div>
          </div>
        ) : (
          /* Main content */
          <div className="animate-pixel-fade">
            {/* Character intro - Emblem */}
            <div className="mb-8">
              <div className="inline-block p-2 md:p-4 bg-pixel-dark border-4 border-pixel-purple mb-6 relative overflow-hidden" style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <Image
                    src="/emblem.jpg"
                    alt="Ray Racks Emblem"
                    fill
                    className="object-contain"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </div>
            </div>

            {/* Typewriter intro */}
            <div className="dialog-box max-w-2xl mx-auto mb-8">
              <TypeAnimation
                sequence={[
                  "Hello and welcome to my dev room! Thanks for stopping by.",
                  2000,
                  "For more information feel free to join my Discord server or Skool community group. We'd be happy to see you there!",
                  2000,
                  "If there's any questions you have for me, you can always hit me up on my socials.",
                ]}
                wrapper="p"
                speed={50}
                className="font-retro text-xl sm:text-2xl md:text-3xl text-pixel-cream text-left"
                repeat={0}
              />
              <span className="inline-block w-3 h-5 bg-pixel-money animate-blink ml-1" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div className="bg-pixel-dark p-3 md:p-4 border-2 border-pixel-purple">
                <div className="font-pixel text-[8px] md:text-[10px] text-pixel-magenta mb-1">PROJECTS</div>
                <div className="font-pixel text-lg md:text-xl text-pixel-money">10+</div>
              </div>
              <div className="bg-pixel-dark p-3 md:p-4 border-2 border-pixel-purple">
                <div className="font-pixel text-[8px] md:text-[10px] text-pixel-magenta mb-1">RACKS</div>
                <div className="font-pixel text-lg md:text-xl text-pixel-gold">$$$</div>
              </div>
              <div className="bg-pixel-dark p-3 md:p-4 border-2 border-pixel-purple">
                <div className="font-pixel text-[8px] md:text-[10px] text-pixel-magenta mb-1">BUGS</div>
                <div className="font-pixel text-lg md:text-xl text-pixel-green">0*</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#library" className="pixel-btn pixel-btn-money">
                📚 BROWSE LIBRARY
              </a>
              <a href="#socials" className="pixel-btn pixel-btn-magenta">
                🔗 CONNECT
              </a>
            </div>

            {/* Scroll hint */}
            <div className="mt-12 font-pixel text-[8px] md:text-[10px] text-pixel-cream/50 animate-bounce-pixel">
              ▼ SCROLL FOR MORE ▼
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
