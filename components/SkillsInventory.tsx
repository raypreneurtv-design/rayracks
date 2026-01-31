'use client'

import { useState } from 'react'

const skillCategories = [
  {
    name: 'AI & LLMs',
    icon: '🤖',
    color: 'pixel-magenta',
    skills: [
      { name: 'Claude', level: 95, rarity: 'LEGENDARY' },
      { name: 'GPT-4', level: 90, rarity: 'EPIC' },
      { name: 'Retell AI', level: 85, rarity: 'RARE' },
      { name: 'LangChain', level: 80, rarity: 'RARE' },
      { name: 'Prompts', level: 99, rarity: 'LEGENDARY' },
    ]
  },
  {
    name: 'Automation',
    icon: '⚡',
    color: 'pixel-yellow',
    skills: [
      { name: 'n8n', level: 95, rarity: 'LEGENDARY' },
      { name: 'Zapier', level: 85, rarity: 'EPIC' },
      { name: 'Make', level: 80, rarity: 'RARE' },
      { name: 'APIs', level: 90, rarity: 'EPIC' },
      { name: 'Webhooks', level: 88, rarity: 'EPIC' },
    ]
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'pixel-money',
    skills: [
      { name: 'React', level: 90, rarity: 'EPIC' },
      { name: 'Next.js', level: 92, rarity: 'LEGENDARY' },
      { name: 'TypeScript', level: 85, rarity: 'EPIC' },
      { name: 'Tailwind', level: 95, rarity: 'LEGENDARY' },
      { name: 'Framer', level: 75, rarity: 'RARE' },
    ]
  },
  {
    name: 'Backend',
    icon: '🔧',
    color: 'pixel-green',
    skills: [
      { name: 'Python', level: 90, rarity: 'EPIC' },
      { name: 'Node.js', level: 85, rarity: 'EPIC' },
      { name: 'FastAPI', level: 80, rarity: 'RARE' },
      { name: 'PostgreSQL', level: 75, rarity: 'RARE' },
      { name: 'Supabase', level: 85, rarity: 'EPIC' },
    ]
  },
]

const rarityColors: Record<string, string> = {
  LEGENDARY: 'text-pixel-yellow',
  EPIC: 'text-pixel-magenta',
  RARE: 'text-pixel-money',
  COMMON: 'text-pixel-cream',
}

export default function SkillsInventory() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-fluid-2xl relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300fff5\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="retro-container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">⚔️</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-pixel-money pixel-text-glow">
            SKILL INVENTORY
          </h2>
        </div>
        <div className="pixel-divider w-48 mb-8" />

        {/* RPG-style interface */}
        <div className="grid lg:grid-cols-[280px,1fr] gap-6">
          {/* Category tabs (vertical on desktop) */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {skillCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 px-4 py-3 border-2 font-pixel text-[10px] transition-all whitespace-nowrap ${
                  activeCategory.name === cat.name
                    ? `bg-${cat.color} border-pixel-cream text-pixel-cream`
                    : 'bg-pixel-dark border-pixel-purple text-pixel-cream/70 hover:border-pixel-money'
                }`}
                style={{
                  boxShadow: activeCategory.name === cat.name ? '4px 4px 0 0 #0f0f23' : 'none',
                  transform: activeCategory.name === cat.name ? 'translate(-2px, -2px)' : 'none',
                }}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.name.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div
            className="bg-pixel-dark border-4 border-pixel-purple p-4 sm:p-6"
            style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}
          >
            {/* Category title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{activeCategory.icon}</span>
              <div>
                <h3 className="font-pixel text-sm text-pixel-cream">
                  {activeCategory.name.toUpperCase()}
                </h3>
                <p className="font-pixel text-[8px] text-pixel-cream/50">
                  {activeCategory.skills.length} SKILLS ACQUIRED
                </p>
              </div>
            </div>

            {/* Skills list */}
            <div className="space-y-4">
              {activeCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-retro text-xl text-pixel-cream group-hover:text-pixel-money transition-colors">
                        {skill.name}
                      </span>
                      <span className={`font-pixel text-[6px] ${rarityColors[skill.rarity]}`}>
                        [{skill.rarity}]
                      </span>
                    </div>
                    <span className="font-pixel text-[10px] text-pixel-yellow">
                      LV.{skill.level}
                    </span>
                  </div>

                  {/* XP Bar */}
                  <div className="relative h-4 bg-pixel-black border-2 border-pixel-cream/30">
                    <div
                      className={`h-full transition-all duration-500`}
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, var(--${activeCategory.color}) 0%, var(--pixel-cyan) 100%)`,
                        transitionTimingFunction: 'steps(10)',
                      }}
                    />
                    {/* XP segments */}
                    <div className="absolute inset-0 flex">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex-1 border-r border-pixel-black/30 last:border-r-0" />
                      ))}
                    </div>

                    {/* Glow effect on hover */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute inset-0 bg-pixel-cyan/20 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total power level */}
            <div className="mt-8 pt-6 border-t-2 border-pixel-purple/50">
              <div className="flex items-center justify-between">
                <span className="font-pixel text-[10px] text-pixel-magenta">TOTAL POWER:</span>
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-xl text-pixel-yellow animate-pulse">
                    {activeCategory.skills.reduce((acc, s) => acc + s.level, 0)}
                  </span>
                  <span className="text-pixel-yellow animate-coin-spin">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment slots (decorative) */}
        <div className="mt-12">
          <p className="font-pixel text-[10px] text-pixel-cream/50 mb-4">EQUIPPED ITEMS:</p>
          <div className="flex flex-wrap gap-3">
            {['☕ ENDLESS COFFEE', '💻 MACBOOK PRO', '🎧 FOCUS MODE', '📚 KNOWLEDGE BASE'].map((item, i) => (
              <div
                key={item}
                className="inventory-slot w-auto h-auto px-4 py-2"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <span className="font-pixel text-[8px] text-pixel-money">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
