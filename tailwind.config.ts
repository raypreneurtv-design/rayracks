import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Utopia fluid type scale
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'fluid-4xl': 'clamp(3rem, 2.4rem + 3vw, 5rem)',
      },
      // Utopia fluid space scale
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem)',
        'fluid-md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)',
        'fluid-xl': 'clamp(2rem, 1.6rem + 2vw, 3.5rem)',
        'fluid-2xl': 'clamp(3rem, 2.4rem + 3vw, 5rem)',
      },
      colors: {
        // 8-bit money inspired palette
        pixel: {
          black: '#0f0f23',
          dark: '#1a1a2e',
          navy: '#16213e',
          purple: '#533483',
          magenta: '#e94560',
          money: '#00d26a',        // Primary money green (replaces cyan)
          green: '#39ff14',        // Neon green accent
          gold: '#ffd700',         // Gold for premium feel
          yellow: '#ffd93d',
          orange: '#ff6b35',
          cream: '#f8f0e3',
          brown: '#8b4513',
          wood: '#deb887',
          cash: '#85bb65',         // Dollar bill green
          cyan: '#00bcd4',         // Cyan accent
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'bounce-pixel': 'bouncePixel 0.5s steps(4) infinite',
        'slide-up': 'slideUp 0.3s steps(6) forwards',
        'glitch': 'glitch 0.3s steps(2) infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'float-book': 'floatBook 3s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(20) forwards',
        'pixel-fade': 'pixelFade 0.5s steps(8) forwards',
        'shake': 'shake 0.5s steps(4) infinite',
        'coin-spin': 'coinSpin 0.6s steps(6) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        bouncePixel: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        floatBook: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        pixelFade: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        coinSpin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 #0f0f23',
        'pixel-sm': '2px 2px 0 0 #0f0f23',
        'pixel-lg': '8px 8px 0 0 #0f0f23',
        'pixel-money': '4px 4px 0 0 #00d26a',
        'pixel-magenta': '4px 4px 0 0 #e94560',
        'retro-glow': '0 0 20px #00d26a, 0 0 40px #00d26a',
        'money-glow': '0 0 15px #00d26a, 0 0 30px #85bb65',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

export default config
