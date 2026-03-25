"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const technologies = [
  "Java",
  "Python",
  "Next.js",
  "React",
  "Tailwind CSS",
  "SQL",
  "HTML/CSS",
  "Inteligencia Artificial",
  "Web Scraping",
  "Git",
  "APIs RESTful",
]

export function TechnologiesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            Stack
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tecnologías
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Herramientas y tecnologías que utilizo en mi trabajo diario.
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-3 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className={`px-4 py-2 bg-card border border-border text-sm text-foreground transition-all duration-500 hover:border-foreground/30 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50 + 300}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
