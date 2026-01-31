'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'

// Mario-style coin block animation component
function MarioLoadingAnimation() {
  const [marioY, setMarioY] = useState(0)
  const [coinVisible, setCoinVisible] = useState(false)
  const [coinY, setCoinY] = useState(0)
  const [blockHit, setBlockHit] = useState(false)

  useEffect(() => {
    // Mario jump animation
    const jumpSequence = () => {
      // Jump up
      setMarioY(-40)
      setTimeout(() => {
        setBlockHit(true)
        setCoinVisible(true)
        setCoinY(-20)
      }, 200)
      setTimeout(() => {
        setCoinY(-60)
      }, 300)
      setTimeout(() => {
        setMarioY(0)
        setBlockHit(false)
      }, 400)
      setTimeout(() => {
        setCoinY(-80)
      }, 500)
      setTimeout(() => {
        setCoinVisible(false)
        setCoinY(0)
      }, 700)
    }

    jumpSequence()
    const interval = setInterval(jumpSequence, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-32 w-48 mx-auto">
      {/* Question block */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-4 w-12 h-12 border-4 border-pixel-black flex items-center justify-center transition-transform ${blockHit ? 'translate-y-[-4px]' : ''}`}
        style={{
          background: 'linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #b8860b 100%)',
          boxShadow: 'inset -2px -2px 0 #8b4513, inset 2px 2px 0 #ffe135',
          transitionDuration: '50ms',
          transitionTimingFunction: 'steps(2)'
        }}
      >
        <span className="font-pixel text-pixel-black text-lg">?</span>
      </div>

      {/* Coin */}
      {coinVisible && (
        <div
          className="absolute left-1/2 -translate-x-1/2 text-2xl animate-coin-spin"
          style={{
            top: `${20 + coinY}px`,
            transition: 'top 0.15s steps(4)'
          }}
        >
          💰
        </div>
      )}

      {/* Mario (simplified pixel version) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-10 h-12"
        style={{
          transform: `translateX(-50%) translateY(${marioY}px)`,
          transition: 'transform 0.15s steps(4)'
        }}
      >
        {/* Mario body - simplified pixel art */}
        <div className="relative w-full h-full">
          {/* Hat */}
          <div className="absolute top-0 left-1 w-8 h-3 bg-red-600 rounded-t" />
          {/* Face */}
          <div className="absolute top-3 left-1 w-8 h-4 bg-amber-200" />
          {/* Body */}
          <div className="absolute top-7 left-0 w-10 h-3 bg-red-600" />
          {/* Overalls */}
          <div className="absolute top-10 left-1 w-8 h-2 bg-blue-600" />
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-pixel-green" />
    </div>
  )
}

export default function HeroArcade() {
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
    setTimeout(() => setShowContent(true), 2000) // Extended for Mario animation
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
            {/* Title art */}
            <div className="mb-8">
              <pre className="font-mono text-pixel-money text-[6px] sm:text-[8px] md:text-[10px] leading-tight hidden sm:block">
{`
 ██████╗  █████╗ ██╗   ██╗██████╗  █████╗  ██████╗██╗  ██╗███████╗
 ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝
 ██████╔╝███████║ ╚████╔╝ ██████╔╝███████║██║     █████╔╝ ███████╗
 ██╔══██╗██╔══██║  ╚██╔╝  ██╔══██╗██╔══██║██║     ██╔═██╗ ╚════██║
 ██║  ██║██║  ██║   ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████║
 ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
`}
              </pre>
              <h1 className="sm:hidden font-pixel text-xl text-pixel-money pixel-text-glow">
                RAYRACKS.DEV
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-pixel text-[10px] sm:text-xs md:text-sm text-pixel-gold mb-12">
              // STACKING AUTOMATIONS & RACKS //
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
              <p>© 2024 RAYRACKS INDUSTRIES</p>
              <p className="mt-1">BUILT WITH PIXELS & PASSION 💰</p>
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
            {/* Character intro */}
            <div className="mb-8">
              <div className="inline-block p-4 md:p-6 bg-pixel-dark border-4 border-pixel-purple mb-6" style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}>
                <div className="text-6xl sm:text-7xl md:text-8xl mb-2">💸</div>
                <div className="font-pixel text-[8px] md:text-[10px] text-pixel-money">LVL 99 MONEY MAKER</div>
              </div>
            </div>

            {/* Typewriter intro */}
            <div className="dialog-box max-w-2xl mx-auto mb-8">
              <TypeAnimation
                sequence={[
                  "You've landed in Ray Racks' Dev Room.",
                  1500,
                  "I help people build automations for their business or personal life.",
                  1500,
                  "Check out what I've been working on, or hit me up on socials.",
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
