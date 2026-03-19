"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, HeadphonesIcon, TrendingUp, Code, Building2, Check } from "lucide-react"

const useCases = [
  {
    icon: FileText,
    category: "Document Intelligence",
    title: "Automated Document Processing",
    description: "Extract, classify, and analyze documents at scale with industry-leading accuracy. From contracts to invoices, our AI handles it all.",
    metrics: [
      { value: "85%", label: "reduction in manual processing" },
      { value: "10x", label: "faster document review" },
      { value: "99.2%", label: "extraction accuracy" },
    ],
    industries: ["Legal", "Finance", "Healthcare"],
    features: ["OCR & data extraction", "Classification & routing", "Compliance checks", "Audit trails"],
  },
  {
    icon: Users,
    category: "Sales Enablement",
    title: "Intelligent Sales Assistant",
    description: "AI-powered insights for your sales team. Generate proposals, analyze deals, and predict close rates with precision.",
    metrics: [
      { value: "40%", label: "increase in win rates" },
      { value: "3x", label: "faster proposal creation" },
      { value: "2.1x", label: "pipeline growth" },
    ],
    industries: ["SaaS", "Manufacturing", "Retail"],
    features: ["Deal scoring", "Proposal generation", "Competitive analysis", "Forecasting"],
  },
  {
    icon: HeadphonesIcon,
    category: "Customer Experience",
    title: "AI-Powered Support",
    description: "Resolve tickets faster with intelligent routing, auto-responses, and sentiment analysis that keeps customers happy.",
    metrics: [
      { value: "60%", label: "reduction in response time" },
      { value: "45%", label: "fewer escalations" },
      { value: "92%", label: "customer satisfaction" },
    ],
    industries: ["E-commerce", "Telecom", "Banking"],
    features: ["Smart routing", "Auto-resolution", "Sentiment analysis", "Multi-language"],
  },
  {
    icon: TrendingUp,
    category: "Business Intelligence",
    title: "Predictive Analytics",
    description: "Transform raw data into actionable insights. Forecast trends, identify risks, and optimize operations in real-time.",
    metrics: [
      { value: "25%", label: "improvement in forecasts" },
      { value: "Real-time", label: "anomaly detection" },
      { value: "Custom", label: "ML models" },
    ],
    industries: ["Supply Chain", "Finance", "Marketing"],
    features: ["Trend forecasting", "Risk detection", "Custom dashboards", "Automated reports"],
  },
  {
    icon: Code,
    category: "Developer Tools",
    title: "Code Generation & Review",
    description: "Accelerate development with AI pair programming. Generate, review, and document code with context-aware assistance.",
    metrics: [
      { value: "50%", label: "faster development" },
      { value: "30%", label: "fewer bugs" },
      { value: "Auto", label: "documentation" },
    ],
    industries: ["Technology", "Fintech", "Enterprise"],
    features: ["Code generation", "PR reviews", "Refactoring", "Test generation"],
  },
  {
    icon: Building2,
    category: "Operations",
    title: "Workflow Automation",
    description: "Automate repetitive tasks across your organization. Connect systems, streamline processes, and free up your team.",
    metrics: [
      { value: "70%", label: "automation rate" },
      { value: "500+", label: "integration options" },
      { value: "No-code", label: "workflow builder" },
    ],
    industries: ["Operations", "HR", "IT"],
    features: ["Process automation", "System integration", "Approval workflows", "Notifications"],
  },
]

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = useCases[activeIndex]

  return (
    <section id="use-cases" className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(120,119,198,0.08),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Use Cases
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Real-world applications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Discover how enterprises across industries transform their operations with AI.
          </motion.p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-4">
            <nav className="flex flex-wrap justify-center gap-2 lg:flex-col lg:justify-start lg:gap-1">
              {useCases.map((useCase, index) => (
                <motion.button
                  key={useCase.title}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                    activeIndex === index
                      ? "bg-secondary/80 text-foreground"
                      : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                  }`}
                >
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl border border-border/50 bg-secondary/80"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <useCase.icon className="h-5 w-5 shrink-0" />
                  <div className="hidden lg:block">
                    <span className="text-xs text-muted-foreground">{useCase.category}</span>
                    <p className="font-medium">{useCase.title}</p>
                  </div>
                  <span className="lg:hidden text-sm font-medium">{useCase.category}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Content Panel */}
          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full bg-secondary/60 text-xs">
                      {activeCase.category}
                    </Badge>
                    {activeCase.industries.map((industry) => (
                      <Badge key={industry} variant="outline" className="rounded-full text-xs">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                    {activeCase.title}
                  </h3>
                  
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {activeCase.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border border-border/30 bg-secondary/20 p-4">
                    {activeCase.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-foreground sm:text-3xl">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {activeCase.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="group rounded-xl bg-foreground text-background hover:bg-foreground/90">
                      Explore {activeCase.category}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
