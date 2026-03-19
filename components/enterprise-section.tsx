"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Server, 
  Users, 
  Lock, 
  Clock,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Annual audits ensure your data is protected by industry-leading security practices.",
    highlight: "Certified",
  },
  {
    icon: Server,
    title: "Dedicated Infrastructure",
    description: "Isolated compute environments with dedicated resources for maximum performance.",
    highlight: "Private Cloud",
  },
  {
    icon: Users,
    title: "SSO & SCIM",
    description: "Enterprise identity management with support for Okta, Azure AD, and more.",
    highlight: "Zero Trust",
  },
  {
    icon: Lock,
    title: "Data Residency",
    description: "Choose where your data lives. Deploy in US, EU, APAC, or your private cloud.",
    highlight: "30+ Regions",
  },
  {
    icon: Clock,
    title: "99.99% SLA",
    description: "Enterprise-grade uptime guarantee with financial credits for any downtime.",
    highlight: "Guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated success manager and priority access to our engineering team.",
    highlight: "Premium",
  },
]

const securityBadges = [
  { name: "SOC 2 Type II", verified: true },
  { name: "GDPR", verified: true },
  { name: "CCPA", verified: true },
  { name: "HIPAA", verified: true },
  { name: "ISO 27001", verified: true },
]

export function EnterpriseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="enterprise" className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,rgba(120,119,198,0.08),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Enterprise
            </span>
            
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Built for enterprise
              <span className="block text-gradient mt-1">scale & security</span>
            </h2>
            
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Security, compliance, and reliability are built into every layer of our platform. 
              Trusted by Fortune 500 companies worldwide to handle their most sensitive data.
            </p>
            
            {/* Security badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {securityBadges.map((badge) => (
                <Badge 
                  key={badge.name}
                  variant="outline" 
                  className="gap-1.5 rounded-full border-border/50 bg-secondary/30 px-3 py-1.5"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  {badge.name}
                </Badge>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button 
                size="lg" 
                className="group h-12 rounded-xl bg-foreground px-8 text-background hover:bg-foreground/90"
              >
                Contact Enterprise Sales
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 rounded-xl border-border/50 bg-secondary/30 px-8"
              >
                Security Whitepaper
              </Button>
            </div>
          </motion.div>
          
          {/* Right column - Features grid */}
          <div ref={ref} className="grid gap-3 sm:grid-cols-2">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:bg-card/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-secondary/50 transition-colors group-hover:border-border group-hover:bg-secondary">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-500">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
