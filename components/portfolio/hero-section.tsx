"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar/Image */}
          <div 
            className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border bg-card flex items-center justify-center">
                  <Image
                    src="/face.webp"
                    alt="Marlon Yesid Andrade"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div 
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                {t.hero.title}
              </p>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t.hero.greeting}
              </h1>
              <p 
                className={`text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {t.hero.subtitle}
              </p>
            </div>

            <p 
              className={`text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {t.hero.description}
            </p>

            <div 
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700 text-white">
                <Link href="#proyectos">
                  {t.hero.viewProjects}
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <Link href="#contacto">
                  <Mail className="w-4 h-4" />
                  {t.hero.contact}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}