'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import RetroAnimation to avoid SSR issues with Remotion
const RetroAnimation = dynamic(() => import('./RetroAnimation'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto aspect-video bg-pixel-dark border-4 border-pixel-purple flex items-center justify-center">
      <span className="font-pixel text-xs text-pixel-money animate-pulse">LOADING...</span>
    </div>
  ),
})

const questLog = [
  { year: '????', title: 'COMING SOON', desc: 'New adventures await...', icon: '🔮', complete: false },
  { year: '????', title: 'COMING SOON', desc: 'New adventures await...', icon: '🔮', complete: false },
  { year: '????', title: 'COMING SOON', desc: 'New adventures await...', icon: '🔮', complete: false },
  { year: '2024', title: 'GROWTH OPERATION', desc: 'Expanding reach and building systems', icon: '📈', complete: true },
  { year: '2023', title: 'RACKS SEASON', desc: 'YouTube Reaction era begins', icon: '💰', complete: true },
]

export default function AboutQuest() {
  const [expandedQuest, setExpandedQuest] = useState<number | null>(null)

  return (
    <section className="py-fluid-2xl relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pixel-dark via-pixel-navy to-pixel-dark" />

      <div className="retro-container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">📜</span>
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-pixel-money pixel-text-glow">
            QUEST LOG
          </h2>
        </div>
        <div className="pixel-divider w-48 mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Character card */}
          <div>
            {/* Remotion Animation */}
            <div className="mb-8">
              <RetroAnimation />
            </div>

            {/* Character stats card */}
            <div
              className="bg-pixel-dark border-4 border-pixel-purple p-6 md:p-8"
              style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}
            >
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                {/* Profile Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-pixel-purple border-3 border-pixel-cream overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/ray-profile.jpg"
                    alt="Ray"
                    fill
                    className="object-cover"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
                <div>
                  <h3 className="font-pixel text-sm md:text-base text-pixel-money mb-1">RAY</h3>
                  <p className="font-pixel text-[8px] md:text-[10px] text-pixel-gold mb-2">AI AUTOMATION BUILDER</p>
                  <p className="font-pixel text-[6px] md:text-[8px] text-pixel-cream/50">CLASS: FULL-STACK MONEY MAKER</p>
                </div>
              </div>

              <div className="dialog-box">
                <p className="font-retro text-lg md:text-xl lg:text-2xl text-pixel-cream leading-relaxed">
                  &gt; Former manufacturing guy turned AI builder. I went from optimizing
                  factory floors to optimizing code. Now I help businesses automate
                  the boring stuff so they can stack more racks.
                </p>
                <span className="inline-block w-2 h-4 bg-pixel-money animate-blink ml-1" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="font-pixel text-lg md:text-xl text-pixel-money">∞</div>
                  <div className="font-pixel text-[6px] md:text-[8px] text-pixel-cream/50">HUSTLE</div>
                </div>
                <div className="text-center">
                  <div className="font-pixel text-lg md:text-xl text-pixel-gold">99</div>
                  <div className="font-pixel text-[6px] md:text-[8px] text-pixel-cream/50">SHIP SPEED</div>
                </div>
                <div className="text-center">
                  <div className="font-pixel text-lg md:text-xl text-pixel-magenta">MAX</div>
                  <div className="font-pixel text-[6px] md:text-[8px] text-pixel-cream/50">AMBITION</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quest timeline */}
          <div>
            <p className="font-pixel text-[10px] md:text-xs text-pixel-cream/70 mb-6">COMPLETED QUESTS:</p>

            <div className="space-y-4">
              {questLog.map((quest, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedQuest(expandedQuest === i ? null : i)}
                  className="w-full text-left group"
                >
                  <div
                    className={`relative p-4 md:p-5 border-3 transition-all ${
                      quest.complete
                        ? 'bg-pixel-dark border-pixel-money hover:border-pixel-gold'
                        : 'bg-pixel-black/50 border-pixel-purple/50'
                    }`}
                    style={{
                      boxShadow: expandedQuest === i ? '4px 4px 0 0 #0f0f23' : '2px 2px 0 0 #0f0f23',
                      transform: expandedQuest === i ? 'translate(-2px, -2px)' : 'none',
                    }}
                  >
                    {/* Quest header */}
                    <div className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl">{quest.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-pixel text-[8px] md:text-[10px] text-pixel-gold">{quest.year}</span>
                          {quest.complete && (
                            <span className="font-pixel text-[6px] md:text-[8px] text-pixel-money">✓ COMPLETE</span>
                          )}
                        </div>
                        <h4 className="font-pixel text-xs md:text-sm text-pixel-cream group-hover:text-pixel-money transition-colors">
                          {quest.title}
                        </h4>
                      </div>
                      <span className={`font-pixel text-xs transition-transform ${expandedQuest === i ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>

                    {/* Expanded content */}
                    {expandedQuest === i && (
                      <div className="mt-4 pt-4 border-t-2 border-pixel-purple/30">
                        <p className="font-retro text-lg md:text-xl text-pixel-cream/80">
                          {quest.desc}
                        </p>
                        {quest.complete && (
                          <div className="mt-3 flex items-center gap-2">
                            <span className="font-pixel text-[8px] md:text-[10px] text-pixel-magenta">REWARD:</span>
                            <span className="text-pixel-gold">+$100 XP</span>
                            <span className="text-pixel-gold animate-coin-spin">💰</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Inactive quest status */}
            <div className="mt-8 p-4 md:p-5 bg-pixel-purple/20 border-3 border-pixel-purple/50 border-dashed opacity-60">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-pixel-cream/40 rounded-full" />
                <span className="font-pixel text-[8px] md:text-[10px] text-pixel-cream/50">STATUS</span>
              </div>
              <p className="font-retro text-lg md:text-xl text-pixel-cream/60">
                Inactive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
