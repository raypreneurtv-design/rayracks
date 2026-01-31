'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'HOME', href: '#home', icon: '🏠' },
  { label: 'LIBRARY', href: '#library', icon: '📚' },
  { label: 'SOCIALS', href: '#socials', icon: '🔗' },
]

export default function PixelNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [coins, setCoins] = useState(99)

  // Simulate coin collection animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prev => prev < 999 ? prev + 1 : 99)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-pixel-black/95 border-b-4 border-pixel-purple">
      <div className="retro-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Title */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-pixel-purple border-2 border-pixel-cream flex items-center justify-center">
              <span className="font-pixel text-xs md:text-sm text-pixel-money">$</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-pixel text-[10px] md:text-xs text-pixel-money pixel-text-glow">RAYRACKS.DEV</span>
              <div className="font-pixel text-[6px] md:text-[8px] text-pixel-cream/60">// STACKING AUTOMATIONS</div>
            </div>
          </a>

          {/* Stats bar (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Cash Bar */}
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-pixel-gold">$$$</span>
              <div className="w-24 h-3 bg-pixel-black border-2 border-pixel-cream">
                <div className="h-full bg-pixel-money" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1">
              <span className="text-pixel-gold animate-coin-spin">💰</span>
              <span className="font-pixel text-[10px] md:text-xs text-pixel-gold">{coins.toString().padStart(3, '0')}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`group px-4 py-2 font-pixel text-[9px] md:text-[10px] transition-all duration-100 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-pixel-purple text-pixel-money'
                    : 'text-pixel-cream hover:bg-pixel-dark hover:text-pixel-money'
                }`}
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-12 h-12 bg-pixel-purple border-2 border-pixel-cream flex flex-col items-center justify-center gap-1"
          >
            <span className={`w-6 h-0.5 bg-pixel-money transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-pixel-money transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-pixel-money transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-pixel-navy border-t-2 border-pixel-purple py-4 animate-slide-up">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 font-pixel text-[10px] text-pixel-cream hover:bg-pixel-purple hover:text-pixel-money transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            ))}

            {/* Mobile stats */}
            <div className="mt-4 px-4 pt-4 border-t-2 border-pixel-purple/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[8px] text-pixel-gold">$$$</span>
                  <div className="w-20 h-2 bg-pixel-black border border-pixel-cream">
                    <div className="h-full bg-pixel-money" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-pixel-gold">💰</span>
                  <span className="font-pixel text-[8px] text-pixel-gold">{coins}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
