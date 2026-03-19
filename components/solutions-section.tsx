"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Building2, Heart, Factory, ShoppingCart } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    name: "Financial Services",
    description: "Automate compliance, detect fraud in real-time, and enhance customer experiences with AI-powered analytics and risk assessment.",
    benefits: [
      "Real-time fraud detection with 99.7% accuracy",
      "Automated regulatory compliance reporting",
      "AI-driven portfolio optimization",
      "Natural language document analysis",
    ],
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    stats: { primary: "99.7%", label: "Fraud detection rate" },
  },
  {
    icon: Heart,
    name: "Healthcare & Life Sciences",
    description: "Accelerate research, improve patient outcomes, and streamline clinical operations while maintaining strict HIPAA compliance.",
    benefits: [
      "HIPAA-compliant data processing",
      "Clinical trial optimization",
      "Medical document extraction",
      "Drug interaction analysis",
    ],
    color: "from-rose-500/20 via-rose-500/5 to-transparent",
    stats: { primary: "40%", label: "Faster clinical trials" },
  },
  {
    icon: Factory,
    name: "Manufacturing & Supply Chain",
    description: "Optimize operations, predict maintenance needs, and improve quality control with intelligent automation across your facilities.",
    benefits: [
      "Predictive maintenance analytics",
      "Supply chain optimization",
      "Quality defect detection",
      "Demand forecasting models",
    ],
    color: "from-amber-500/20 via-amber-500/5 to-transparent",
    stats: { primary: "35%", label: "Reduction in downtime" },
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Personalize customer experiences, optimize inventory levels, and drive revenue growth with AI-powered recommendations.",
    benefits: [
      "AI-powered recommendations",
      "Dynamic pricing optimization",
      "Customer sentiment analysis",
      "Inventory demand prediction",
    ],
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    stats: { primary: "28%", label: "Revenue increase" },
  },
]

function SolutionCard({ 
  solution, 
  index, 
  isActive, 
  onClick 
}: { 
  solution: typeof solutions[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
        isActive 
          ? "border-border bg-card/80 shadow-2xl shadow-black/20" 
          : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50"
      }`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "group-hover:opacity-50"}`} />
      
      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${
            isActive ? "border-border bg-secondary" : "border-border/30 bg-secondary/50"
          }`}>
            <solution.icon className="h-6 w-6 text-foreground" />
          </div>
          <div className={`text-right transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
            <div className="text-3xl font-bold text-foreground">{solution.stats.primary}</div>
            <div className="text-xs text-muted-foreground">{solution.stats.label}</div>
          </div>
        </div>
        
        <h3 className="mt-6 text-xl font-semibold text-foreground">
          {solution.name}
        </h3>
        
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {solution.description}
        </p>
        
        <motion.div
          initial={false}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <ul className="mt-6 space-y-2">
            {solution.benefits.map((benefit, i) => (
              <motion.li 
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <Button 
            variant="outline" 
            className="mt-6 rounded-xl border-border/50 bg-secondary/50"
          >
            Explore solution
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />
      
      <div ref={containerRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Industry Solutions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Built for your industry
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Purpose-built AI solutions designed to address unique challenges 
            and opportunities in your sector.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.name}
              solution={solution}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
