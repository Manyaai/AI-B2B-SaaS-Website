"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started with AI",
    price: "$499",
    period: "/month",
    features: [
      "Up to 10 team members",
      "100,000 API requests/month",
      "5 custom models",
      "Standard integrations",
      "Email support",
      "99.9% uptime SLA",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing companies scaling AI operations",
    price: "$1,999",
    period: "/month",
    features: [
      "Up to 50 team members",
      "1M API requests/month",
      "25 custom models",
      "Premium integrations",
      "Priority support",
      "SSO authentication",
      "Advanced analytics",
      "Custom workflows",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced security needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited team members",
      "Unlimited API requests",
      "Unlimited custom models",
      "All integrations",
      "24/7 dedicated support",
      "SSO & SCIM",
      "Data residency options",
      "99.99% uptime SLA",
      "Custom contracts",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative flex h-full flex-col p-8 ${
                  plan.popular
                    ? "border-foreground/50 bg-secondary/30"
                    : "bg-background"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
