"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "98%", label: "faster processing", company: "Fortune 500" },
  { value: "3.2x", label: "ROI increase", company: "Enterprise clients" },
  { value: "40%", label: "cost reduction", company: "Global brands" },
  { value: "10M+", label: "API requests daily", company: "Developers" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-muted-foreground">Now available for Enterprise</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI for teams building the future
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            Empower your entire organization to create at the speed of thought, while ensuring security and compliance remain at the forefront.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8 text-base">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col bg-background p-6 sm:p-8"
            >
              <span className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              <span className="mt-3 text-xs text-muted-foreground/60">{stat.company}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground">Trusted by industry leaders</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Accenture", "McKinsey", "Deloitte", "PwC", "EY"].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground/50">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
