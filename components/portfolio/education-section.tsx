"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  const timeline = [
    {
      period: t.education.university.period,
      title: t.education.university.degree,
      description: t.education.university.description,
      items: t.education.university.items,
    },
    {
      period: t.education.sena.period,
      title: t.education.sena.degree,
      description: t.education.sena.description,
      items: t.education.sena.items,
    },
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.education.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.education.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`relative pl-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-red-600 rounded-full" />
              
              {/* Content */}
              <div className="bg-card border border-border p-6 transition-all duration-300 hover:border-red-600/30">
                <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                  {item.period}
                </p>
                <h3 
                  className="text-lg font-semibold text-foreground mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
