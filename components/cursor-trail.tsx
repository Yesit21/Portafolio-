"use client"

import { useEffect, useState } from "react"
import { Code2, Database, Globe, Cpu } from "lucide-react"
import { 
  SiJavascript, 
  SiPython, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiMysql,
  SiHtml5,
  SiGit,
} from "react-icons/si"

interface Particle {
  id: number
  x: number
  y: number
  icon: any
  opacity: number
}

const icons = [
  Code2,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiHtml5,
  SiGit,
  Database,
  Globe,
  Cpu,
  SiJavascript,
]

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [particleId, setParticleId] = useState(0)

  useEffect(() => {
    let lastTime = Date.now()
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      // Only create particle every 100ms to avoid too many
      if (now - lastTime < 100) return
      lastTime = now

      const randomIcon = icons[Math.floor(Math.random() * icons.length)]
      
      const newParticle: Particle = {
        id: particleId,
        x: e.clientX,
        y: e.clientY,
        icon: randomIcon,
        opacity: 1,
      }

      setParticleId(prev => prev + 1)
      setParticles(prev => [...prev, newParticle])

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [particleId])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {particles.map((particle) => {
        const IconComponent = particle.icon
        return (
          <div
            key={particle.id}
            className="absolute animate-cursor-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <IconComponent 
              className="w-4 h-4 text-red-600" 
              style={{
                filter: 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.5))',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
