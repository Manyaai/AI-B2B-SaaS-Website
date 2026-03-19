"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const metrics = [
  { 
    value: 500, 
    suffix: "+", 
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust NexusAI"
  },
  { 
    value: 10, 
    suffix: "M+", 
    label: "API Requests Daily",
    description: "Processed with 99.99% uptime"
  },
  { 
    value: 98, 
    suffix: "%", 
    label: "Customer Satisfaction",
    description: "Based on post-implementation surveys"
  },
  { 
    value: 30, 
    suffix: "+", 
    label: "Global Regions",
    description: "Data centers across the world"
  },
]

function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2 
}: { 
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const spring = useSpring(0, {
    bounce: 0,
    duration: duration * 1000,
  })
  
  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, value, spring, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
      
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:bg-card/50"
            >
              <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">
                {metric.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
