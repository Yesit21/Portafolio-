"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.items.portfolio.title,
      description: t.projects.items.portfolio.description,
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      title: t.projects.items.academic.title,
      description: t.projects.items.academic.description,
      tags: ["Java", "SQL", "Databases", "CRUD"],
    },
    {
      title: t.projects.items.api.title,
      description: t.projects.items.api.description,
      tags: ["Java", "REST API", "Backend", "Architecture"],
    },
  ]

  return (
    <section id="proyectos" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.projects.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-card border-2 border-red-600 transition-all duration-700 hover:border-red-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Project Preview */}
              <div className="aspect-video bg-muted border-b-2 border-red-600 flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Preview</span>
              </div>
              
              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto hover:bg-transparent text-red-600 hover:text-red-700 group/btn">
                  {t.projects.viewProject}
                  <ArrowUpRight className="w-4 h-4 text-red-600 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
