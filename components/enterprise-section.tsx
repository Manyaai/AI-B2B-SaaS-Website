"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Server, 
  Users, 
  Lock, 
  Clock,
  Headphones,
  ArrowRight
} from "lucide-react"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II Certified",
    description: "Annual audits ensure your data is protected by industry-leading security practices.",
  },
  {
    icon: Server,
    title: "Dedicated Infrastructure",
    description: "Isolated compute environments with dedicated resources for maximum performance.",
  },
  {
    icon: Users,
    title: "SSO & SCIM",
    description: "Enterprise identity management with support for Okta, Azure AD, and more.",
  },
  {
    icon: Lock,
    title: "Data Residency",
    description: "Choose where your data lives. Deploy in US, EU, APAC, or your private cloud.",
  },
  {
    icon: Clock,
    title: "99.99% SLA",
    description: "Enterprise-grade uptime guarantee with financial credits for any downtime.",
  },
  {
    icon: Headphones,
    title: "24/7 Premium Support",
    description: "Dedicated success manager and priority access to our engineering team.",
  },
]

const securityBadges = [
  "SOC 2 Type II",
  "GDPR",
  "CCPA", 
  "HIPAA",
  "ISO 27001",
]

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Enterprise
            </h2>
            <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Built for enterprise scale
            </p>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Security, compliance, and reliability are built into every layer of our platform. Trusted by Fortune 500 companies worldwide.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {securityBadges.map((badge) => (
                <Badge key={badge} variant="outline" className="px-3 py-1">
                  {badge}
                </Badge>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8">
                Contact Enterprise Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Download Security Whitepaper
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-secondary/20 p-5 transition-colors hover:bg-secondary/30"
              >
                <feature.icon className="h-6 w-6 text-foreground" />
                <h3 className="mt-3 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
