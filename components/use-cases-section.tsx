"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, HeadphonesIcon, TrendingUp, Code, Building2 } from "lucide-react"

const useCases = [
  {
    icon: FileText,
    category: "Document Intelligence",
    title: "Automated Document Processing",
    description: "Extract, classify, and analyze documents at scale. Process contracts, invoices, and reports with 99% accuracy.",
    metrics: ["85% reduction in manual processing", "10x faster document review", "99.2% extraction accuracy"],
    industries: ["Legal", "Finance", "Healthcare"],
  },
  {
    icon: Users,
    category: "Sales Enablement",
    title: "Intelligent Sales Assistant",
    description: "AI-powered insights for your sales team. Generate proposals, analyze deals, and predict close rates.",
    metrics: ["40% increase in win rates", "3x faster proposal creation", "2.1x pipeline growth"],
    industries: ["SaaS", "Manufacturing", "Retail"],
  },
  {
    icon: HeadphonesIcon,
    category: "Customer Experience",
    title: "AI-Powered Support",
    description: "Resolve tickets faster with intelligent routing, auto-responses, and sentiment analysis.",
    metrics: ["60% reduction in response time", "45% fewer escalations", "92% customer satisfaction"],
    industries: ["E-commerce", "Telecom", "Banking"],
  },
  {
    icon: TrendingUp,
    category: "Business Intelligence",
    title: "Predictive Analytics",
    description: "Transform raw data into actionable insights. Forecast trends, identify risks, and optimize operations.",
    metrics: ["25% improvement in forecasts", "Real-time anomaly detection", "Custom ML models"],
    industries: ["Supply Chain", "Finance", "Marketing"],
  },
  {
    icon: Code,
    category: "Developer Tools",
    title: "Code Generation & Review",
    description: "Accelerate development with AI pair programming. Generate, review, and document code automatically.",
    metrics: ["50% faster development", "30% fewer bugs", "Automated documentation"],
    industries: ["Technology", "Fintech", "Enterprise"],
  },
  {
    icon: Building2,
    category: "Operations",
    title: "Workflow Automation",
    description: "Automate repetitive tasks across your organization. Connect systems and streamline processes.",
    metrics: ["70% automation rate", "500+ integration options", "Custom workflow builder"],
    industries: ["Operations", "HR", "IT"],
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Use Cases
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real-world applications
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Discover how enterprises across industries are leveraging AI to transform their operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:border-muted-foreground/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <useCase.icon className="h-6 w-6 text-foreground" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {useCase.category}
                </Badge>
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {useCase.title}
              </h3>
              
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              
              <ul className="mt-4 space-y-1.5">
                {useCase.metrics.map((metric) => (
                  <li key={metric} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-1 w-1 rounded-full bg-emerald-500" />
                    {metric}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {useCase.industries.map((industry) => (
                  <Badge key={industry} variant="outline" className="text-xs">
                    {industry}
                  </Badge>
                ))}
              </div>
              
              <Button variant="ghost" className="mt-4 -ml-4 text-foreground">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
