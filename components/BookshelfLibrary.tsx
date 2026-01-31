'use client'

import { useState } from 'react'

const books = [
  {
    id: 1,
    title: 'LANDING PAGE GEN',
    subtitle: 'AI-POWERED',
    description: 'Generate complete landing pages from a simple prompt. Built for speed.',
    color: 'bg-pixel-magenta',
    spine: 'bg-gradient-to-b from-pixel-magenta to-pink-700',
    tech: ['Claude AI', 'Next.js', 'Tailwind'],
    status: 'COMPLETE',
    year: '2024',
  },
  {
    id: 2,
    title: 'THUMBJUICE',
    subtitle: 'YT THUMBNAILS',
    description: 'A/B test your YouTube thumbnails before publishing. Data-driven decisions.',
    color: 'bg-pixel-money',
    spine: 'bg-gradient-to-b from-pixel-cyan to-teal-600',
    tech: ['React', 'Python', 'Analytics'],
    status: 'BETA',
    year: '2024',
  },
  {
    id: 3,
    title: 'FLEXHALLA',
    subtitle: 'FITNESS APP',
    description: 'AI-generated personalized workout routines. Get stronger, pixel by pixel.',
    color: 'bg-pixel-green',
    spine: 'bg-gradient-to-b from-pixel-green to-green-700',
    tech: ['React Native', 'AI', 'Firebase'],
    status: 'IN DEV',
    year: '2024',
  },
  {
    id: 4,
    title: 'PRODUCTIONLENS',
    subtitle: 'MFG ANALYTICS',
    description: 'Real-time manufacturing insights. From the factory floor to the dashboard.',
    color: 'bg-pixel-orange',
    spine: 'bg-gradient-to-b from-pixel-orange to-orange-700',
    tech: ['Python', 'SQL', 'Dashboard'],
    status: 'SHIPPED',
    year: '2023',
  },
  {
    id: 5,
    title: 'REPURPOX',
    subtitle: 'CONTENT AUTO',
    description: 'Transform long-form content into multiple formats. Work smarter.',
    color: 'bg-pixel-purple',
    spine: 'bg-gradient-to-b from-pixel-purple to-purple-800',
    tech: ['n8n', 'AI', 'Automation'],
    status: 'ACTIVE',
    year: '2024',
  },
]

export default function BookshelfLibrary() {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null)
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <section id="projects" className="py-fluid-2xl relative">
      {/* Section header */}
      <div className="retro-container mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">📚</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-pixel-money pixel-text-glow">
            THE LIBRARY
          </h2>
        </div>
        <div className="pixel-divider w-48" />
        <p className="font-retro text-xl text-pixel-cream/70 mt-4">
          &gt; Select a book to read its contents...
        </p>
      </div>

      {/* Bookshelf */}
      <div className="retro-container">
        <div
          className="relative p-8 sm:p-12"
          style={{
            background: 'linear-gradient(180deg, #2d1810 0%, #1a0f0a 100%)',
            boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.5), inset 0 4px 0 #4a3020',
            borderRadius: '4px'
          }}
        >
          {/* Shelf wood grain effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 20px)',
            }}
          />

          {/* Books row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {books.map((book, index) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book)}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                className={`relative group transition-transform duration-200 ${
                  hoveredBook === book.id ? '-translate-y-4' : ''
                }`}
                style={{ transitionTimingFunction: 'steps(4)' }}
              >
                {/* Book spine */}
                <div
                  className={`${book.spine} w-12 sm:w-16 h-40 sm:h-52 flex flex-col items-center justify-between py-3 border-2 border-pixel-black relative`}
                  style={{
                    boxShadow: '2px 0 0 rgba(0,0,0,0.3), inset -3px 0 5px rgba(0,0,0,0.2)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                  }}
                >
                  {/* Top decoration */}
                  <div className="w-full h-2 bg-pixel-black/30" style={{ writingMode: 'horizontal-tb' }} />

                  {/* Title */}
                  <span className="font-pixel text-[6px] sm:text-[8px] text-pixel-cream px-1 text-center transform rotate-180">
                    {book.title}
                  </span>

                  {/* Year */}
                  <span className="font-pixel text-[6px] text-pixel-black/50 transform rotate-180">
                    {book.year}
                  </span>

                  {/* Bottom decoration */}
                  <div className="w-full h-2 bg-pixel-black/30" style={{ writingMode: 'horizontal-tb' }} />

                  {/* Hover glow effect */}
                  {hoveredBook === book.id && (
                    <div className="absolute inset-0 bg-pixel-money/20 animate-pulse" />
                  )}
                </div>

                {/* Book edge */}
                <div
                  className="absolute right-0 top-0 w-1 h-full bg-pixel-cream/20"
                  style={{ transform: 'translateX(100%)' }}
                />
              </button>
            ))}
          </div>

          {/* Shelf edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-4"
            style={{
              background: 'linear-gradient(180deg, #3d2818 0%, #2d1810 100%)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
            }}
          />
        </div>

        {/* Book detail panel */}
        {selectedBook && (
          <div className="mt-8 animate-slide-up">
            <div
              className="bg-pixel-navy p-6 border-4 border-pixel-cream relative"
              style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-pixel-magenta border-2 border-pixel-black font-pixel text-[10px] hover:bg-pixel-orange"
              >
                X
              </button>

              <div className="grid md:grid-cols-[200px,1fr] gap-6">
                {/* Book cover */}
                <div
                  className={`${selectedBook.color} aspect-[3/4] p-4 border-4 border-pixel-black flex flex-col justify-between`}
                  style={{ boxShadow: '4px 4px 0 0 #0f0f23' }}
                >
                  <div>
                    <div className="font-pixel text-[8px] text-pixel-black/70 mb-2">{selectedBook.subtitle}</div>
                    <div className="font-pixel text-sm text-pixel-cream pixel-text">{selectedBook.title}</div>
                  </div>
                  <div className="font-pixel text-[6px] text-pixel-black/50">RAYRACKS PRESS</div>
                </div>

                {/* Book info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 font-pixel text-[8px] ${
                      selectedBook.status === 'COMPLETE' || selectedBook.status === 'SHIPPED' ? 'bg-pixel-green' :
                      selectedBook.status === 'ACTIVE' ? 'bg-pixel-money' :
                      selectedBook.status === 'BETA' ? 'bg-pixel-yellow text-pixel-black' :
                      'bg-pixel-orange'
                    } text-pixel-cream`}>
                      {selectedBook.status}
                    </span>
                    <span className="font-pixel text-[10px] text-pixel-cream/50">{selectedBook.year}</span>
                  </div>

                  <p className="font-retro text-2xl text-pixel-cream mb-6">
                    {selectedBook.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-pixel text-[8px] text-pixel-magenta block mb-2">TECH STACK:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedBook.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-pixel-dark border-2 border-pixel-purple font-pixel text-[8px] text-pixel-money">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="pixel-btn pixel-btn-cyan">
                    📖 READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
