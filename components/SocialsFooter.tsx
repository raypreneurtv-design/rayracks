'use client'

const socialLinks = [
  {
    name: 'YOUTUBE',
    icon: '📺',
    url: 'https://www.youtube.com/@RayRacks03',
    handle: '@RayRacks03'
  },
  {
    name: 'GITHUB',
    icon: '👾',
    url: 'https://github.com/raypreneurtv-design',
    handle: 'raypreneurtv-design'
  },
  {
    name: 'TWITTER/X',
    icon: '🐦',
    url: 'https://x.com/rayrackss',
    handle: '@rayrackss'
  },
  {
    name: 'EMAIL',
    icon: '📧',
    url: 'mailto:rayndaula@gmail.com',
    handle: 'rayndaula@gmail.com'
  },
]

export default function SocialsFooter() {
  return (
    <section id="socials" className="py-fluid-2xl relative">
      <div className="retro-container">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-3xl">🔗</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-pixel-money pixel-text-glow">
            CONNECT
          </h2>
        </div>
        <div className="pixel-divider w-48 mx-auto mb-8" />

        {/* Centered social links */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === 'EMAIL' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="block group w-full sm:w-auto"
            >
              <div
                className="bg-pixel-dark border-3 border-pixel-purple p-4 sm:p-6 hover:border-pixel-cyan transition-all text-center"
                style={{
                  boxShadow: '4px 4px 0 0 #0f0f23',
                  transition: 'transform 0.1s steps(2), box-shadow 0.1s steps(2)',
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl group-hover:animate-bounce-pixel">{link.icon}</span>
                  <span className="font-pixel text-xs text-pixel-cream group-hover:text-pixel-money transition-colors">
                    {link.name}
                  </span>
                  <p className="font-mono text-[10px] text-pixel-green/70">{link.handle}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-pixel-purple/30 text-center">
          <div className="font-pixel text-[8px] text-pixel-cream/40 space-y-2">
            <p>CRAFTED WITH 💰 BY RAYRACKS // {new Date().getFullYear()}</p>
            <p>BUILT WITH PIXELS & PASSION</p>
            <p className="text-pixel-money/50">v1.0.0 // THE DEV ROOM</p>
          </div>

          {/* Konami hint */}
          <p className="mt-4 font-pixel text-[6px] text-pixel-cream/20">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </div>
      </div>
    </section>
  )
}
