"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const stats = [
  { value: "98%", label: "Faster processing", sublabel: "vs. manual workflows" },
  { value: "3.2x", label: "ROI increase", sublabel: "Within first year" },
  { value: "40%", label: "Cost reduction", sublabel: "Operational savings" },
  { value: "10M+", label: "API requests", sublabel: "Processed daily" },
]

const trustedBy = [
  "Accenture", "McKinsey", "Deloitte", "Microsoft", "Oracle"
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl"
        style={{ y }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <motion.div style={{ opacity }} className="relative">
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <a 
                href="#" 
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-secondary/60"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Announcing NexusAI 2.0 with GPT-5 support</span>
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">AI infrastructure for</span>
              <span className="relative mt-1 inline-block">
                <span className="text-gradient">enterprise teams</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                >
                  <motion.path
                    d="M2 10C50 4 150 4 298 10"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Deploy production-ready AI models with enterprise security, 
              compliance, and scalability built in. Trusted by Fortune 500 companies.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button 
                size="lg" 
                className="group h-12 rounded-xl bg-foreground px-8 text-base font-medium text-background shadow-lg shadow-white/10 transition-all hover:bg-foreground/90 hover:shadow-xl hover:shadow-white/20"
              >
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group h-12 rounded-xl border-border/60 bg-secondary/30 px-8 text-base backdrop-blur-sm transition-all hover:border-border hover:bg-secondary/50"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch demo
                <span className="ml-2 text-xs text-muted-foreground">2 min</span>
              </Button>
            </motion.div>
          </div>
          
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-20 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-xl lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`relative p-6 sm:p-8 ${
                    index !== stats.length - 1 ? "border-r border-border/30" : ""
                  } ${index < 2 ? "border-b border-border/30 lg:border-b-0" : ""}`}
                >
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-sm font-medium text-foreground/80">
                      {stat.label}
                    </span>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {stat.sublabel}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
              Trusted by industry leaders
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedBy.map((company, index) => (
                <motion.span 
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-lg font-medium text-muted-foreground/40 transition-colors hover:text-muted-foreground/60"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border/40 p-1.5"
        >
          <motion.div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
