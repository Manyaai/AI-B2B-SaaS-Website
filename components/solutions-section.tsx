"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    name: "Financial Services",
    description: "Automate compliance, detect fraud, and enhance customer experiences with AI-powered analytics.",
    benefits: [
      "Real-time fraud detection with 99.7% accuracy",
      "Automated regulatory compliance reporting",
      "AI-driven portfolio optimization",
      "Natural language document analysis",
    ],
    image: "finance",
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Accelerate research, improve patient outcomes, and streamline clinical operations.",
    benefits: [
      "HIPAA-compliant data processing",
      "Clinical trial optimization",
      "Medical document extraction",
      "Drug interaction analysis",
    ],
    image: "healthcare",
  },
  {
    name: "Manufacturing & Supply Chain",
    description: "Optimize operations, predict maintenance needs, and improve quality control.",
    benefits: [
      "Predictive maintenance analytics",
      "Supply chain optimization",
      "Quality defect detection",
      "Demand forecasting models",
    ],
    image: "manufacturing",
  },
  {
    name: "Retail & E-commerce",
    description: "Personalize experiences, optimize inventory, and drive revenue growth.",
    benefits: [
      "AI-powered recommendations",
      "Dynamic pricing optimization",
      "Customer sentiment analysis",
      "Inventory demand prediction",
    ],
    image: "retail",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Industry Solutions
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built for your industry
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Purpose-built AI solutions designed to address the unique challenges and opportunities in your sector.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-secondary/20 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground">
                  {solution.name}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="outline">
                    View solution <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center bg-secondary/40 p-8 lg:p-12">
                <div className="flex h-48 w-full items-center justify-center rounded-xl border border-border bg-background/50 lg:h-64">
                  <span className="text-sm text-muted-foreground">{solution.name} Dashboard Preview</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
