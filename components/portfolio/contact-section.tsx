"use client"

import { Linkedin, Send } from "lucide-react"
import { FaWhatsapp, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/573135520191",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marlon-andrade-4a60313ba/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Yesit21",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:yesitandrade24@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
              {t.contact.label}
            </p>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t.contact.form.subjectPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.form.send}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div 
              className={`flex flex-col justify-center gap-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="text-center md:text-left mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t.contact.direct.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.contact.direct.subtitle}
                </p>
              </div>
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-card border border-red-600/20 rounded hover:border-red-600/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 border-2 border-red-600 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600">
                    <link.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="text-xs text-muted-foreground">{t.contact.direct.clickToContact}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
