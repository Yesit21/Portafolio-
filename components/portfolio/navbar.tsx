"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { label: "nav.home", href: "#inicio" },
  { label: "nav.about", href: "#sobre-mi" },
  { label: "nav.projects", href: "#proyectos" },
  { label: "nav.skills", href: "#habilidades" },
  { label: "nav.technologies", href: "#tecnologias" },
  { label: "nav.education", href: "#educacion" },
  { label: "nav.contact", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, "#inicio")}
            className="text-lg font-semibold tracking-tight text-foreground cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Marlon Andrade
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-sm text-red-600 hover:text-red-700 transition-colors cursor-pointer font-medium"
              >
                {item.label.split('.').reduce((obj: any, key) => obj[key], t)}
              </a>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="gap-2 text-red-600 hover:text-red-700"
              title={language === "en" ? "Cambiar a Español" : "Switch to English"}
            >
              <Languages className="h-4 w-4" />
              <span className="text-xs font-medium">{language === "en" ? "ES" : "EN"}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 px-0 text-red-600 hover:text-red-700"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button size="sm" variant="outline" className="gap-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
              <a href="/cv.pdf" download="Marlon_Andrade_CV.pdf">
                <Download className="w-4 h-4" />
                CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 bg-background/98 backdrop-blur-md ${
            isOpen ? "max-h-[500px] opacity-100 border-b border-border" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 max-h-[450px] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-sm text-red-600 hover:text-red-700 hover:bg-muted/50 transition-colors py-3 px-4 cursor-pointer font-medium rounded"
                >
                  {item.label.split('.').reduce((obj: any, key) => obj[key], t)}
                </a>
              ))}
              <div className="flex flex-wrap gap-2 mt-4 px-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="gap-2 text-red-600 hover:text-red-700 flex-1"
                  title={language === "en" ? "Cambiar a Español" : "Switch to English"}
                >
                  <Languages className="h-4 w-4" />
                  <span className="text-xs font-medium">{language === "en" ? "ES" : "EN"}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="gap-2 text-red-600 hover:text-red-700 flex-1"
                >
                  {mounted && (
                    <>
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4" />
                          <span className="text-xs font-medium">Light</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          <span className="text-xs font-medium">Dark</span>
                        </>
                      )}
                    </>
                  )}
                  <span className="sr-only">Cambiar tema</span>
                </Button>
              </div>
              <div className="px-4 mt-2">
                <Button size="sm" variant="outline" className="gap-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full" asChild>
                  <a href="/cv.pdf" download="Marlon_Andrade_CV.pdf">
                    <Download className="w-4 h-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
