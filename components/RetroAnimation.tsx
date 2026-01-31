'use client'

import { Player } from '@remotion/player'
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion'

// Pixel art sprite component
const PixelSprite = ({ emoji, x, y, delay = 0 }: { emoji: string; x: number; y: number; delay?: number }) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const bounce = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 100 },
  })

  const opacity = interpolate(frame - delay, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        fontSize: 40,
        transform: `scale(${bounce}) translateY(${Math.sin(frame / 10) * 5}px)`,
        opacity,
      }}
    >
      {emoji}
    </div>
  )
}

// Main composition
const IntroComposition = () => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  // Title animation
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 200 },
  })

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  })

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
  })

  // Scanline position
  const scanlineY = interpolate(frame, [0, durationInFrames], [-100, 110])

  // Glitch effect (every 60 frames)
  const glitchOffset = frame % 60 < 3 ? Math.random() * 4 - 2 : 0

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a2e',
        fontFamily: "'Press Start 2P', monospace",
        overflow: 'hidden',
      }}
    >
      {/* Grid background - money green */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,210,106,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,106,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.3,
        }}
      />

      {/* Floating money emojis */}
      <PixelSprite emoji="💰" x={10} y={20} delay={0} />
      <PixelSprite emoji="💸" x={80} y={15} delay={10} />
      <PixelSprite emoji="🚀" x={15} y={70} delay={20} />
      <PixelSprite emoji="📚" x={85} y={75} delay={30} />
      <PixelSprite emoji="💵" x={50} y={10} delay={40} />
      <PixelSprite emoji="⭐" x={45} y={80} delay={50} />

      {/* Main title */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${titleSpring}) translateX(${glitchOffset}px)`,
          opacity: titleOpacity,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: '#00d26a',
            textShadow: `
              2px 2px 0 #0f0f23,
              -1px -1px 0 #0f0f23,
              0 0 20px #00d26a
            `,
            marginBottom: 20,
          }}
        >
          RAYRACKS.DEV
        </div>

        <div
          style={{
            fontSize: 12,
            color: '#ffd700',
            opacity: subtitleOpacity,
          }}
        >
          // STACKING RACKS //
        </div>
      </div>

      {/* Scanline effect - money green */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: `${scanlineY}%`,
          height: 4,
          background: 'linear-gradient(90deg, transparent, rgba(0,210,106,0.3), transparent)',
        }}
      />

      {/* CRT overlay lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
          )`,
          pointerEvents: 'none',
        }}
      />

      {/* Corner decorations - gold */}
      <div style={{ position: 'absolute', top: 20, left: 20, width: 30, height: 30, borderTop: '4px solid #ffd700', borderLeft: '4px solid #ffd700' }} />
      <div style={{ position: 'absolute', top: 20, right: 20, width: 30, height: 30, borderTop: '4px solid #ffd700', borderRight: '4px solid #ffd700' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 20, width: 30, height: 30, borderBottom: '4px solid #ffd700', borderLeft: '4px solid #ffd700' }} />
      <div style={{ position: 'absolute', bottom: 20, right: 20, width: 30, height: 30, borderBottom: '4px solid #ffd700', borderRight: '4px solid #ffd700' }} />

      {/* Bottom text */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 10,
          color: '#f8f0e3',
          opacity: interpolate(frame, [60, 80], [0, 0.7], { extrapolateRight: 'clamp' }),
        }}
      >
        GET THIS BREAD 💰
      </div>
    </AbsoluteFill>
  )
}

// Exported player component
export default function RetroAnimation() {
  return (
    <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden border-4 border-pixel-purple" style={{ boxShadow: '8px 8px 0 0 #0f0f23' }}>
      <Player
        component={IntroComposition}
        durationInFrames={150}
        compositionWidth={640}
        compositionHeight={360}
        fps={30}
        autoPlay
        loop
        style={{ width: '100%', height: '100%' }}
        controls={false}
      />
    </div>
  )
}
