'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Moon, Sun, ArrowRight, Send } from 'lucide-react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    essence: false,
    practice: false,
    invitation: false,
    connect: false
  })

  useEffect(() => {
    setMounted(true)
    // Trigger animations on load
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100)
    setTimeout(() => setIsVisible(prev => ({ ...prev, essence: true })), 400)
    setTimeout(() => setIsVisible(prev => ({ ...prev, practice: true })), 700)
    setTimeout(() => setIsVisible(prev => ({ ...prev, invitation: true })), 1000)
    setTimeout(() => setIsVisible(prev => ({ ...prev, connect: true })), 1300)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Your message has been sent. We will respond in due time.', {
      duration: 4000,
      position: 'bottom-center'
    })

    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-foreground font-semibold text-lg sm:text-xl tracking-tight animate-fade-in">
            Conscious Consults & Construction
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full hover:bg-accent/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
          isVisible.hero ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-75"
            style={{
              backgroundImage: `url('/images/hero-bg.png')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground animate-fade-in-up">
              Where Consciousness
              <br />
              <span className="font-normal">Meets Structure</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in-up delay-200">
              Building spaces that breathe with intention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up delay-300">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base sm:text-lg group"
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Initiate Connection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* The Essence Section */}
      <section
        id="essence"
        className="py-20 sm:py-28 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />
        <div className="absolute inset-0 opacity-15">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/pattern-1.png')`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight ${isVisible.essence ? 'animate-fade-in-up' : 'opacity-0'}`}>
                The Essence
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card className={`border border-border/50 bg-card/80 backdrop-blur-sm ${isVisible.essence ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <p className="text-lg sm:text-xl text-foreground/90 font-light leading-relaxed">
                    In the quiet spaces between thought and creation, there exists a profound harmony. We traverse this liminal landscape with reverence, guided by ancient wisdom and contemporary precision.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    Every structure begins not with materials, but with consciousness—a deliberate awareness of purpose, of flow, of the unseen energies that shape our built environment.
                  </p>
                </CardContent>
              </Card>

              <Card className={`border border-border/50 bg-card/80 backdrop-blur-sm ${isVisible.essence ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <p className="text-lg sm:text-xl text-foreground/90 font-light leading-relaxed">
                    Brutalist honesty softened by natural warmth. Mathematical precision dancing with organic forms. This is our dialectic, our practice, our offering.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Practice Section */}
      <section
        id="practice"
        className="py-20 sm:py-28 md:py-32 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight ${isVisible.practice ? 'animate-fade-in-up' : 'opacity-0'}`}>
                The Practice
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Contemplation",
                  description: "Deep listening. Understanding the unspoken. Finding the essence within the brief."
                },
                {
                  title: "Conception",
                  description: "Ideas crystallize into form. The gathered stone refined to a smooth and scalable brick."
                },
                {
                  title: "Creation",
                  description: "Structure emerges from what was once void. The vision has manifested itself through careful study, intuitive knowing, and refinement."
                }
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className={`border border-border/50 bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:shadow-lg ${
                    isVisible.practice ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${200 + index * 150}ms`
                  }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-light text-foreground">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-accent" />
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Form Section */}
      <section className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-muted/40">
        <div className="absolute inset-0 opacity-35">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/arch-form.png')`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className={`space-y-4 ${isVisible.invitation ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                An Invitation
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
            </div>

            <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed ${isVisible.invitation ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              To those who seek meaning in mortar, poetry in proportion, and consciousness in construction—
              <br /><br />
              We extend an invitation to collaborate. To build not merely structures, but sanctuaries for human experience.
            </p>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="connect"
        className="py-20 sm:py-28 md:py-32 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight ${isVisible.connect ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Connect
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
              <p className={`text-muted-foreground font-light ${isVisible.connect ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                Share your vision. Begin the conversation.
              </p>
            </div>

            <Card className={`border border-border/50 bg-card/70 backdrop-blur-sm ${isVisible.connect ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="How shall we address you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/70 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Where shall we respond?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/70 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Thoughts
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Speak from the heart..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base sm:text-lg group"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-8 sm:py-12 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-light text-center sm:text-left">
              © {new Date().getFullYear()} Conscious Consults & Construction LLC
            </p>
            <p className="text-sm text-muted-foreground font-light">
              Building with Intention
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
