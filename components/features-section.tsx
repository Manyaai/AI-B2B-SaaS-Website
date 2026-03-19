"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Brain, 
  Shield, 
  Zap, 
  Layers,
  Lock,
  RefreshCw,
  BarChart3,
  Globe,
  ArrowUpRight
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access state-of-the-art language models fine-tuned for enterprise workflows.",
    metric: "99.9%",
    metricLabel: "uptime SLA",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and RBAC.",
    metric: "256-bit",
    metricLabel: "encryption",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Sub-100ms response times with global edge deployment.",
    metric: "<100ms",
    metricLabel: "latency",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 200+ enterprise tools out of the box.",
    metric: "200+",
    metricLabel: "integrations",
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your data never trains our models. GDPR and HIPAA compliant.",
    metric: "Zero",
    metricLabel: "data sharing",
    gradient: "from-rose-500/20 to-pink-500/10",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Models improve while keeping your data completely private.",
    metric: "Daily",
    metricLabel: "updates",
    gradient: "from-teal-500/20 to-cyan-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into AI usage and team productivity.",
    metric: "50+",
    metricLabel: "metrics",
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across 30+ regions with automatic failover.",
    metric: "30+",
    metricLabel: "regions",
    gradient: "from-sky-500/20 to-blue-500/10",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="platform" className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Platform Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Enterprise-grade AI
            <br />
            <span className="text-gradient">built for scale</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Everything your organization needs to deploy AI responsibly 
            with security, compliance, and performance at every layer.
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 transition-colors group-hover:border-border group-hover:bg-secondary">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/0 transition-all duration-300 group-hover:text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                
                <div className="mt-4 flex items-baseline gap-2 border-t border-border/30 pt-4">
                  <span className="text-xl font-bold text-foreground">
                    {feature.metric}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {feature.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
