"use client"

import { useEffect, useState } from "react"

interface Lightning {
  id: number
  left: number
  delay: number
  duration: number
}

export function CherryBlossoms() {
  const [lightnings, setLightnings] = useState<Lightning[]>([])

  useEffect(() => {
    let id = 0
    
    const createLightning = () => {
      const newLightning: Lightning = {
        id: id++,
        left: Math.random() * 100,
        delay: 0,
        duration: 0.5 + Math.random() * 0.5,
      }
      
      setLightnings(prev => [...prev, newLightning])
      
      // Remove lightning after animation
      setTimeout(() => {
        setLightnings(prev => prev.filter(l => l.id !== newLightning.id))
      }, (newLightning.duration + 0.5) * 1000)
    }
    
    // Create lightning at random intervals (every 3-8 seconds)
    const scheduleNext = () => {
      const delay = 3000 + Math.random() * 5000
      setTimeout(() => {
        createLightning()
        scheduleNext()
      }, delay)
    }
    
    scheduleNext()
    
    return () => {
      setLightnings([])
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {lightnings.map((lightning) => (
        <div
          key={lightning.id}
          className="absolute top-0 animate-lightning-strike"
          style={{
            left: `${lightning.left}%`,
            animationDuration: `${lightning.duration}s`,
            width: '3px',
            height: '100vh',
          }}
        >
          {/* Main lightning bolt */}
          <svg
            width="100"
            height="100%"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              left: '-48px',
              filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 15px rgba(239, 68, 68, 0.5))',
            }}
          >
            {/* Lightning path with zigzag */}
            <path
              d={`
                M 50 0
                L 45 ${100 + Math.random() * 50}
                L 55 ${200 + Math.random() * 50}
                L 40 ${300 + Math.random() * 50}
                L 60 ${400 + Math.random() * 50}
                L 45 ${500 + Math.random() * 50}
                L 55 ${600 + Math.random() * 50}
                L 48 ${700 + Math.random() * 50}
                L 52 ${800 + Math.random() * 50}
                L 50 1000
              `}
              stroke="#ef4444"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Inner glow */}
            <path
              d={`
                M 50 0
                L 45 ${100 + Math.random() * 50}
                L 55 ${200 + Math.random() * 50}
                L 40 ${300 + Math.random() * 50}
                L 60 ${400 + Math.random() * 50}
                L 45 ${500 + Math.random() * 50}
                L 55 ${600 + Math.random() * 50}
                L 48 ${700 + Math.random() * 50}
                L 52 ${800 + Math.random() * 50}
                L 50 1000
              `}
              stroke="#fecaca"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
          
          {/* Flash effect at top */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full animate-flash"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
              animationDuration: `${lightning.duration}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
