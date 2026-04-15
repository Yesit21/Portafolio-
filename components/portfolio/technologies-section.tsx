"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { 
  SiJavascript, 
  SiPython, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiMysql,
  SiHtml5,
  SiGit,
  SiCplusplus,
} from "react-icons/si"
import { Code2, Brain, Globe, Cpu } from "lucide-react"

const technologies = [
  { name: "Java", Icon: Code2, color: "#ef4444" },
  { name: "Python", Icon: SiPython, color: "#ef4444" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ef4444" },
  { name: "React", Icon: SiReact, color: "#ef4444" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#ef4444" },
  { name: "SQL", Icon: SiMysql, color: "#ef4444" },
  { name: "HTML/CSS", Icon: SiHtml5, color: "#ef4444" },
  { name: "Artificial Intelligence", Icon: Brain, color: "#ef4444" },
  { name: "Web Scraping", Icon: Globe, color: "#ef4444" },
  { name: "Git", Icon: SiGit, color: "#ef4444" },
  { name: "RESTful APIs", Icon: Cpu, color: "#ef4444" },
]

export function TechnologiesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  return (
    <section id="tecnologias" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.technologies.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.technologies.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-3 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.Icon
            return (
              <div
                key={tech.name}
                className={`px-4 py-2 bg-card border border-border text-sm text-foreground transition-all duration-500 hover:border-red-600 hover:scale-105 flex items-center gap-2 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50 + 300}ms` }}
              >
                <IconComponent className="text-lg" style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}