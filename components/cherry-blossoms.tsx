"use client"

import { useEffect, useState } from "react"

interface Lightning {
  id: number
  left: number
  delay: number
  duration: number
  path: string
  branches: Array<{ path: string; opacity: number }>
}

const generateLightningPath = () => {
  let path = "M 50 0"
  let x = 50
  let y = 0
  const branches: Array<{ path: string; opacity: number }> = []
  
  // Main lightning bolt with more dramatic zigzags
  for (let i = 0; i < 12; i++) {
    y += 60 + Math.random() * 80
    const offset = (Math.random() - 0.5) * 40
    x += offset
    
    // Keep x within bounds
    x = Math.max(20, Math.min(80, x))
    
    path += ` L ${x} ${y}`
    
    // Add branches randomly (30% chance)
    if (Math.random() > 0.7 && i > 2 && i < 10) {
      const branchX = x + (Math.random() - 0.5) * 60
      const branchY = y + 40 + Math.random() * 60
      const branchPath = `M ${x} ${y} L ${branchX} ${branchY}`
      branches.push({
        path: branchPath,
        opacity: 0.6 + Math.random() * 0.3
      })
      
      // Sometimes add sub-branches
      if (Math.random() > 0.6) {
        const subBranchX = branchX + (Math.random() - 0.5) * 40
        const subBranchY = branchY + 30 + Math.random() * 40
        const subBranchPath = `M ${branchX} ${branchY} L ${subBranchX} ${subBranchY}`
        branches.push({
          path: subBranchPath,
          opacity: 0.4 + Math.random() * 0.3
        })
      }
    }
  }
  
  path += ` L ${x} 1000`
  
  return { path, branches }
}

export function CherryBlossoms() {
  const [lightnings, setLightnings] = useState<Lightning[]>([])

  useEffect(() => {
    let id = 0
    
    const createLightning = () => {
      const { path, branches } = generateLightningPath()
      const newLightning: Lightning = {
        id: id++,
        left: 10 + Math.random() * 80, // Keep away from edges
        delay: 0,
        duration: 0.4 + Math.random() * 0.3,
        path,
        branches
      }
      
      setLightnings(prev => [...prev, newLightning])
      
      // Remove lightning after animation
      setTimeout(() => {
        setLightnings(prev => prev.filter(l => l.id !== newLightning.id))
      }, (newLightning.duration + 0.5) * 1000)
    }
    
    // Create lightning at random intervals (every 4-10 seconds)
    const scheduleNext = () => {
      const delay = 4000 + Math.random() * 6000
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
            width="200"
            height="100%"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              left: '-98px',
              filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.9)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 30px rgba(239, 68, 68, 0.3))',
            }}
          >
            {/* Outer glow */}
            <path
              d={lightning.path}
              stroke="#ef4444"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
            
            {/* Main bolt */}
            <path
              d={lightning.path}
              stroke="#ef4444"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
            
            {/* Inner bright core */}
            <path
              d={lightning.path}
              stroke="#fecaca"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="1"
            />
            
            {/* Ultra bright center */}
            <path
              d={lightning.path}
              stroke="#ffffff"
              strokeWidth="0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
            
            {/* Branches */}
            {lightning.branches && lightning.branches.map((branch, idx) => (
              <g key={idx}>
                {/* Branch glow */}
                <path
                  d={branch.path}
                  stroke="#ef4444"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={branch.opacity * 0.5}
                />
                {/* Branch main */}
                <path
                  d={branch.path}
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={branch.opacity}
                />
                {/* Branch core */}
                <path
                  d={branch.path}
                  stroke="#fecaca"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={branch.opacity * 0.9}
                />
              </g>
            ))}
          </svg>
          
          {/* Flash effect at top */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full animate-flash"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.6) 0%, rgba(239, 68, 68, 0.3) 40%, transparent 70%)',
              animationDuration: `${lightning.duration}s`,
            }}
          />
          
          {/* Additional glow pulses */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full animate-flash"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 60%)',
              animationDuration: `${lightning.duration}s`,
              animationDelay: '0.05s',
            }}
          />
        </div>
      ))}
    </div>
  )
}
