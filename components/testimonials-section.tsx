"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "NexusAI transformed our document processing workflow. What used to take our team days now happens in minutes with incredible accuracy.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Global Finance Corp",
    initials: "SC",
    rating: 5,
  },
  {
    quote: "The enterprise security features gave us the confidence to deploy AI across our organization. SOC 2 compliance was a game-changer.",
    author: "Michael Rodriguez",
    role: "Chief Information Security Officer",
    company: "SecureHealth Systems",
    initials: "MR",
    rating: 5,
  },
  {
    quote: "We saw a 40% increase in sales productivity within the first quarter. The AI insights are remarkably actionable.",
    author: "Emily Watson",
    role: "Director of Sales",
    company: "TechScale Solutions",
    initials: "EW",
    rating: 5,
  },
  {
    quote: "Integration with our existing tech stack was seamless. The team had us up and running in less than a week.",
    author: "David Park",
    role: "CTO",
    company: "InnovateCo",
    initials: "DP",
    rating: 5,
  },
  {
    quote: "The customer support AI reduced our response times by 60%. Our customers are happier than ever.",
    author: "Lisa Thompson",
    role: "Head of Customer Success",
    company: "RetailMax",
    initials: "LT",
    rating: 5,
  },
  {
    quote: "Finally, an AI platform that understands enterprise needs. The customization options are exactly what we needed.",
    author: "James Mitchell",
    role: "Chief Digital Officer",
    company: "Manufacturing Plus",
    initials: "JM",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Customer Stories
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Trusted by leading enterprises
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            See how organizations across industries are achieving measurable results with NexusAI.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col bg-background p-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-secondary text-foreground">
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
