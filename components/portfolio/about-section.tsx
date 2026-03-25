"use client"

import { Code2, Brain, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description: "Creación de aplicaciones web modernas con tecnologías actuales como React y Next.js, aplicando buenas prácticas de código y diseño centrado en el usuario.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Exploración de soluciones con IA para automatización y análisis de datos, utilizando Python y herramientas modernas para resolver desafíos reales.",
  },
  {
    icon: Lightbulb,
    title: "Creatividad Digital",
    description: "Fusión de tecnología con expresión artística, desarrollando proyectos que combinan código limpio con diseño innovador y experiencias interactivas.",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="sobre-mi" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            Perfil
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sobre mí
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Soy Marlon Andrade, desarrollador enfocado en crear soluciones tecnológicas 
            funcionales y bien estructuradas. Me dedico al desarrollo de software, inteligencia artificial 
            y diseño de sistemas. Las carreras de motos y la composición musical 
            aportan perspectivas diferentes a mi enfoque técnico.
          </p>
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
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-foreground" />
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
