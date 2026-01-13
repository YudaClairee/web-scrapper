import { createFileRoute, Link } from '@tanstack/react-router'
import { buttonVariants } from '@/components/ui/button'

import {
  Brain,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Sparkles,
  Database,
  Search,
  ChevronRight,
  Star,
  Code2,
  Layers,
} from 'lucide-react'
import Navbar from '@/components/web/navbar'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="size-4" />
            <span>AI-Powered Knowledge Extraction</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms]">
            Transform Any Website Into
            <span className="block mt-2 bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Actionable Knowledge
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:200ms]">
            Scrape, analyze, and organize web content with AI. Build your
            personal knowledge base that actually understands your data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link
              to="/register"
              className={buttonVariants({
                size: 'lg',
                className: 'h-12 px-8 text-base gap-2',
              })}
            >
              Start Free Trial
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="#how-it-works"
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className: 'h-12 px-8 text-base',
              })}
            >
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                10K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Pages Scraped
              </div>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Active Users
              </div>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Uptime</div>
            </div>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-20 relative animate-fade-in-up [animation-delay:500ms]">
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground font-mono">
                    ulikterus.app/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard preview placeholder */}
              <div className="aspect-video bg-linear-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 mb-4">
                    <Brain className="size-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Your AI Knowledge Dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: 'Smart Web Scraping',
      description:
        'Extract content from any website with intelligent parsing that understands page structure and context.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description:
        'Our AI processes and categorizes your scraped content, making it searchable and actionable.',
      gradient: 'from-primary to-orange-500',
    },
    {
      icon: Database,
      title: 'Knowledge Organization',
      description:
        'Automatically organize content into collections, tags, and categories for easy retrieval.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Search,
      title: 'Semantic Search',
      description:
        'Find exactly what you need with natural language search that understands meaning, not just keywords.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description:
        'Watch as your content is processed in real-time with live updates and progress tracking.',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description:
        'Your data stays yours. We use end-to-end encryption and never share your knowledge base.',
      gradient: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-linear-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Build Your Knowledge Base
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you capture, organize, and
            leverage web content effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-border transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center size-12 rounded-xl bg-linear-to-br ${feature.gradient} mb-4`}
              >
                <feature.icon className="size-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Paste Your URL',
      description:
        'Simply paste any website URL you want to extract knowledge from.',
      icon: Globe,
    },
    {
      step: '02',
      title: 'AI Processes Content',
      description:
        'Our AI analyzes the page structure and extracts meaningful content.',
      icon: Brain,
    },
    {
      step: '03',
      title: 'Organize & Search',
      description:
        'Access your knowledge base with powerful search and organization tools.',
      icon: Layers,
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our simple three-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-linear-to-r from-border to-transparent" />
              )}

              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="size-32 rounded-3xl bg-linear-to-br from-primary/10 to-orange-500/10 flex items-center justify-center">
                    <item.icon className="size-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'UlikTerus has completely changed how I do research. I can now build a knowledge base from dozens of sources in minutes.',
      author: 'Sarah Chen',
      role: 'Product Researcher',
      avatar: 'SC',
    },
    {
      quote:
        "The AI-powered search is incredible. It actually understands what I'm looking for, not just matching keywords.",
      author: 'Marcus Johnson',
      role: 'Content Strategist',
      avatar: 'MJ',
    },
    {
      quote:
        'Finally, a tool that makes web scraping accessible to non-developers. The interface is beautiful and intuitive.',
      author: 'Emily Rodriguez',
      role: 'Marketing Manager',
      avatar: 'ER',
    },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by Knowledge Workers
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our users have to say about UlikTerus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center text-white text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-orange-500/5 to-amber-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 text-sm font-medium mb-8">
          <Code2 className="size-4 text-primary" />
          <span>No credit card required</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Build Your
          <span className="block bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Knowledge Empire?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of researchers, marketers, and knowledge workers who
          are already using UlikTerus to supercharge their workflow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className={buttonVariants({
              size: 'lg',
              className: 'h-14 px-10 text-lg gap-2',
            })}
          >
            Start Free Today
            <ChevronRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/ulikteruslogo.png"
              alt="UlikTerus Logo"
              className="size-8"
            />
            <span className="font-semibold">UlikTerus</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 UlikTerus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
