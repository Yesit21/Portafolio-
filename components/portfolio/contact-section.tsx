"use client"

import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"

const socialLinks = [
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:yesitandrade24@gmail.com",
    value: "yesitandrade24@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marlon-andrade-4a60313ba/",
    value: "Marlon Andrade",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()

  return (
    <section id="contacto" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
            {t.contact.label}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
            {t.contact.subtitle}
          </p>

          <div 
            className={`flex justify-center gap-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {socialLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex flex-col items-center gap-3 group transition-all duration-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                  <link.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm text-foreground font-medium">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
