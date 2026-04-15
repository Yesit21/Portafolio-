"use client"

import { Code2, Brain, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.software.title,
      description: t.about.highlights.software.description,
    },
    {
      icon: Brain,
      title: t.about.highlights.ai.title,
      description: t.about.highlights.ai.description,
    },
    {
      icon: Lightbulb,
      title: t.about.highlights.creativity.title,
      description: t.about.highlights.creativity.description,
    },
  ]

  return (
    <section id="sobre-mi" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.about.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.about.title}
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <p className="text-base text-foreground leading-relaxed font-medium">
              {t.about.intro}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.about.specialization}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.about.music}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.about.racing}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.about.current}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className={`bg-card p-8 transition-all duration-700 hover:bg-muted/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 border border-red-600 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 
                className="text-lg font-semibold text-foreground mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}