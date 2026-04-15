"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: ["Next.js", "React", "HTML/CSS", "Tailwind CSS", "UI/UX"],
    },
    {
      title: t.skills.backend,
      skills: ["Java", "Python", "RESTful APIs", "Software Architecture"],
    },
    {
      title: t.skills.databases,
      skills: ["SQL", "E-R Modeling", "Database Design", "Data Integrity"],
    },
  ]

  return (
    <section id="habilidades" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.skills.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-card border border-border p-8 transition-all duration-700 hover:border-foreground/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 
                className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-foreground/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
