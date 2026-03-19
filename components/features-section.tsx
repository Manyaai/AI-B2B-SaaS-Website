"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Shield, 
  Zap, 
  Layers,
  Lock,
  RefreshCw,
  BarChart3,
  Globe
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access state-of-the-art language models fine-tuned for enterprise workflows with 99.9% uptime SLA.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, SSO, and role-based access control.",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Sub-100ms response times with global edge deployment and intelligent caching.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 200+ enterprise tools including Salesforce, SAP, and Microsoft 365.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your data never trains our models. GDPR, CCPA, and HIPAA compliant by design.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Models improve with usage while keeping your proprietary data completely private.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into AI usage, cost optimization, and team productivity metrics.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across 30+ regions with automatic failover and load balancing.",
  },
]

export function FeaturesSection() {
  return (
    <section id="platform" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Platform Overview
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Enterprise-grade AI infrastructure
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Built for scale, security, and seamless integration. Everything your organization needs to deploy AI responsibly.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-background p-6 transition-colors hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
