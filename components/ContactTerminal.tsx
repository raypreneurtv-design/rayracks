'use client'

import { useState, useEffect } from 'react'

const socialLinks = [
  { name: 'YOUTUBE', icon: '📺', url: 'https://youtube.com/@raydev', command: 'open --youtube' },
  { name: 'TWITTER', icon: '🐦', url: 'https://twitter.com/raydev', command: 'open --twitter' },
  { name: 'GITHUB', icon: '👾', url: 'https://github.com/raydev', command: 'open --github' },
  { name: 'EMAIL', icon: '📧', url: 'mailto:hello@rayracks.dev', command: 'send --email' },
]

export default function ContactTerminal() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor(prev => !prev), 500)
    return () => clearInterval(cursor)
  }, [])

  useEffect(() => {
    // Boot sequence
    const bootSequence = [
      '> INITIALIZING CONTACT TERMINAL...',
      '> LOADING COMMUNICATION PROTOCOLS...',
      '> ESTABLISHING SECURE CONNECTION...',
      '> READY.',
      '',
      '  ╔════════════════════════════════════╗',
      '  ║   CONTACT RAY - TERMINAL v1.0     ║',
      '  ╚════════════════════════════════════╝',
      '',
      '> Type HELP for available commands',
      '',
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setTerminalLines(prev => [...prev, bootSequence[i]])
        i++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    let response: string[] = []

    switch (command) {
      case 'help':
        response = [
          '',
          '  AVAILABLE COMMANDS:',
          '  ─────────────────────',
          '  YOUTUBE   - Open YouTube channel',
          '  TWITTER   - Open Twitter profile',
          '  GITHUB    - Open GitHub profile',
          '  EMAIL     - Send an email',
          '  ABOUT     - Learn about Ray',
          '  CLEAR     - Clear terminal',
          '',
        ]
        break
      case 'about':
        response = [
          '',
          '  ┌─────────────────────────────────┐',
          '  │  RAY // AI AUTOMATION BUILDER   │',
          '  └─────────────────────────────────┘',
          '',
          '  From manufacturing floors to AI code.',
          '  I build automations that actually work.',
          '  Shipping fast since 2023.',
          '',
          '  "Make it work, make it right,',
          '   make it fast." - me, probably',
          '',
        ]
        break
      case 'youtube':
        response = ['', '> Opening YouTube...', '']
        window.open('https://youtube.com/@raydev', '_blank')
        break
      case 'twitter':
        response = ['', '> Opening Twitter...', '']
        window.open('https://twitter.com/raydev', '_blank')
        break
      case 'github':
        response = ['', '> Opening GitHub...', '']
        window.open('https://github.com/raydev', '_blank')
        break
      case 'email':
        response = ['', '> Opening email client...', '']
        window.location.href = 'mailto:hello@rayracks.dev'
        break
      case 'clear':
        setTerminalLines([])
        return
      case '':
        break
      default:
        response = ['', `> ERROR: Command "${cmd}" not found. Type HELP for commands.`, '']
    }

    setTerminalLines(prev => [...prev, `> ${cmd}`, ...response])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput)
      setCurrentInput('')
    }
  }

  return (
    <section id="contact" className="py-fluid-2xl relative">
      <div className="retro-container">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">📮</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-pixel-money pixel-text-glow">
            CONTACT TERMINAL
          </h2>
        </div>
        <div className="pixel-divider w-48 mb-8" />

        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          {/* Terminal */}
          <div
            className="bg-pixel-black border-4 border-pixel-green rounded-lg overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)' }}
          >
            {/* Terminal header */}
            <div className="bg-pixel-dark border-b-2 border-pixel-green/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pixel-magenta" />
                <span className="w-3 h-3 rounded-full bg-pixel-yellow" />
                <span className="w-3 h-3 rounded-full bg-pixel-green" />
              </div>
              <span className="font-pixel text-[8px] text-pixel-green">RAY@RACKS:~</span>
            </div>

            {/* Terminal body */}
            <div className="p-4 h-80 overflow-y-auto font-mono text-sm text-pixel-green">
              {terminalLines.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {line}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center">
                <span className="text-pixel-money mr-2">&gt;</span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value.toUpperCase())}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-pixel-green font-mono"
                  autoFocus
                />
                <span className={`w-2 h-4 bg-pixel-green ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <p className="font-pixel text-[10px] text-pixel-cream/70">QUICK ACCESS:</p>

            {socialLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="bg-pixel-dark border-3 border-pixel-purple p-4 hover:border-pixel-cyan transition-all"
                  style={{
                    boxShadow: '4px 4px 0 0 #0f0f23',
                    transition: 'transform 0.1s steps(2), box-shadow 0.1s steps(2)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:animate-bounce-pixel">{link.icon}</span>
                    <div>
                      <span className="font-pixel text-xs text-pixel-cream group-hover:text-pixel-money transition-colors">
                        {link.name}
                      </span>
                      <p className="font-mono text-[10px] text-pixel-green/70">{link.command}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* CTA Dialog */}
            <div className="dialog-box mt-8">
              <p className="font-retro text-lg text-pixel-cream">
                &gt; Want to build something together? Let&apos;s make it happen.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-pixel-purple/30 text-center">
          <div className="font-pixel text-[8px] text-pixel-cream/40 space-y-2">
            <p>CRAFTED WITH 💰 BY RAYRACKS // {new Date().getFullYear()}</p>
            <p>BUILT WITH PIXELS & PASSION</p>
            <p className="text-pixel-money/50">v1.0.0 // THE LIBRARY</p>
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
