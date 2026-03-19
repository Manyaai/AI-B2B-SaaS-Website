"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "NexusAI transformed our document processing workflow. What used to take our team days now happens in minutes with incredible accuracy. The ROI was immediate.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Global Finance Corp",
    initials: "SC",
  },
  {
    quote: "The enterprise security features gave us the confidence to deploy AI across our organization. SOC 2 compliance was a game-changer for our procurement process.",
    author: "Michael Rodriguez",
    role: "Chief Information Security Officer",
    company: "SecureHealth Systems",
    initials: "MR",
  },
  {
    quote: "We saw a 40% increase in sales productivity within the first quarter. The AI insights are remarkably actionable and our team adopted it instantly.",
    author: "Emily Watson",
    role: "Director of Sales",
    company: "TechScale Solutions",
    initials: "EW",
  },
  {
    quote: "Integration with our existing tech stack was seamless. The team had us up and running in less than a week with zero disruption to our operations.",
    author: "David Park",
    role: "CTO",
    company: "InnovateCo",
    initials: "DP",
  },
  {
    quote: "The customer support AI reduced our response times by 60%. Our customers are happier than ever and our team can focus on complex issues.",
    author: "Lisa Thompson",
    role: "Head of Customer Success",
    company: "RetailMax",
    initials: "LT",
  },
  {
    quote: "Finally, an AI platform that understands enterprise needs. The customization options are exactly what we needed for our unique workflows.",
    author: "James Mitchell",
    role: "Chief Digital Officer",
    company: "Manufacturing Plus",
    initials: "JM",
  },
]

// Split testimonials into two rows
const row1 = testimonials.slice(0, 3)
const row2 = testimonials.slice(3)

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="mx-3 w-[350px] shrink-0 rounded-2xl border border-border/30 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-border/60 hover:bg-card/80 sm:w-[400px]">
      <Quote className="h-8 w-8 text-muted-foreground/20" />
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-border/50">
          <AvatarFallback className="bg-secondary text-sm font-medium text-foreground">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function InfiniteMarquee({ 
  children, 
  direction = "left", 
  speed = 20 
}: { 
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const xRef = useRef(0)

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || contentWidth === 0) return
    
    const pixelsPerFrame = (speed * delta) / 1000
    
    if (direction === "left") {
      xRef.current -= pixelsPerFrame
      if (xRef.current <= -contentWidth) {
        xRef.current = 0
      }
    } else {
      xRef.current += pixelsPerFrame
      if (xRef.current >= 0) {
        xRef.current = -contentWidth
      }
    }
    
    containerRef.current.style.transform = `translateX(${xRef.current}px)`
  })

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="flex will-change-transform">
        {children}
        {children}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Customer Stories
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Trusted by industry leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            See how organizations across industries achieve measurable results.
          </motion.p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mt-16 space-y-6">
        <InfiniteMarquee direction="left" speed={25}>
          {row1.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </InfiniteMarquee>
        
        <InfiniteMarquee direction="right" speed={20}>
          {row2.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </InfiniteMarquee>
      </div>
      
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}
