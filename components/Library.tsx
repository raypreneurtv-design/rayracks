'use client'

import { useState } from 'react'

interface LibraryProps {
  onAccess?: () => void
}

// Placeholder video data - these would be dynamically fetched from YouTube API
const latestVideos = [
  {
    id: 'video1',
    title: 'Building AI Automations That Actually Work',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    url: 'https://www.youtube.com/@RayRacks03',
    duration: '12:34',
  },
  {
    id: 'video2',
    title: 'From Zero to Automation: Complete Guide',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    url: 'https://www.youtube.com/@RayRacks03',
    duration: '18:45',
  },
  {
    id: 'video3',
    title: 'n8n vs Make vs Zapier - Which One Wins?',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    url: 'https://www.youtube.com/@RayRacks03',
    duration: '22:10',
  },
  {
    id: 'video4',
    title: 'Claude AI: The Ultimate Developer Companion',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    url: 'https://www.youtube.com/@RayRacks03',
    duration: '15:22',
  },
]

const communityLinks = [
  {
    name: 'DISCORD',
    icon: '🎮',
    description: 'Join the community chat',
    url: '#', // Replace with actual Discord invite link
    color: 'bg-indigo-600 hover:bg-indigo-500',
  },
  {
    name: 'SKOOL',
    icon: '🎓',
    description: 'Access premium courses',
    url: '#', // Replace with actual Skool link
    color: 'bg-amber-600 hover:bg-amber-500',
  },
]

export default function Library({ onAccess }: LibraryProps) {
  const [hasAccessed, setHasAccessed] = useState(false)

  const handleVideoClick = (url: string) => {
    if (!hasAccessed && onAccess) {
      onAccess()
      setHasAccessed(true)
    }
    window.open(url, '_blank')
  }

  return (
    <section id="library" className="py-fluid-2xl relative">
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
          &gt; Latest content and community hangouts
        </p>
      </div>

      <div className="retro-container">
        <div className="grid lg:grid-cols-[320px,1fr] gap-8">
          {/* Left sidebar - Substack & Community (Top on mobile) */}
          <div className="order-first lg:order-first space-y-6">
            {/* Substack embed box */}
            <div
              className="bg-pixel-navy border-4 border-pixel-cream p-4"
              style={{ boxShadow: '6px 6px 0 0 #0f0f23' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✍️</span>
                <h3 className="font-pixel text-xs text-pixel-money">LATEST WRITINGS</h3>
              </div>

              {/* Substack embed iframe */}
              <div className="bg-pixel-black border-2 border-pixel-purple p-2 mb-4">
                <iframe
                  src="https://rayracks.substack.com/embed"
                  width="100%"
                  height="200"
                  style={{ border: 'none', background: 'transparent' }}
                  frameBorder="0"
                  scrolling="no"
                  title="Substack posts"
                />
              </div>

              {/* Fallback link in case iframe doesn't load */}
              <a
                href="https://rayracks.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-pixel text-[10px] text-pixel-cyan hover:text-pixel-money transition-colors"
              >
                &gt; READ ON SUBSTACK
              </a>
            </div>

            {/* Community buttons */}
            <div
              className="bg-pixel-dark border-4 border-pixel-purple p-4"
              style={{ boxShadow: '6px 6px 0 0 #0f0f23' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">👥</span>
                <h3 className="font-pixel text-xs text-pixel-money">JOIN THE COMMUNITY</h3>
              </div>

              <div className="space-y-3">
                {communityLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full p-3 ${link.color} border-2 border-pixel-black transition-all hover:-translate-y-1`}
                    style={{
                      boxShadow: '3px 3px 0 0 #0f0f23',
                      transition: 'transform 0.1s steps(2)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{link.icon}</span>
                      <div>
                        <span className="font-pixel text-xs text-pixel-cream block">
                          {link.name}
                        </span>
                        <span className="font-mono text-[9px] text-pixel-cream/70">
                          {link.description}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Latest videos */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">📺</span>
              <h3 className="font-pixel text-xs text-pixel-money">LATEST VIDEOS</h3>
              <a
                href="https://www.youtube.com/@RayRacks03"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto font-pixel text-[10px] text-pixel-cyan hover:text-pixel-money transition-colors"
              >
                VIEW ALL &gt;
              </a>
            </div>

            {/* Video grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {latestVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoClick(video.url)}
                  className="group text-left bg-pixel-dark border-3 border-pixel-purple hover:border-pixel-cyan transition-all"
                  style={{
                    boxShadow: '4px 4px 0 0 #0f0f23',
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-pixel-black overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Duration badge */}
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-pixel-black/90 font-pixel text-[8px] text-pixel-cream">
                      {video.duration}
                    </span>
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-pixel-black/40">
                      <span className="text-4xl">▶️</span>
                    </div>
                  </div>

                  {/* Video info */}
                  <div className="p-3">
                    <p className="font-retro text-lg text-pixel-cream group-hover:text-pixel-money transition-colors line-clamp-2">
                      {video.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Subscribe CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/@RayRacks03?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pixel-btn pixel-btn-magenta"
              >
                🔔 SUBSCRIBE FOR MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
