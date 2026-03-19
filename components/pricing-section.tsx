"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Minus, ArrowRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started with AI",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      { name: "Team members", value: "Up to 10" },
      { name: "API requests/month", value: "100K" },
      { name: "Custom models", value: "5" },
      { name: "Integrations", value: "Standard" },
      { name: "Support", value: "Email" },
      { name: "Uptime SLA", value: "99.9%" },
      { name: "SSO", value: false },
      { name: "Dedicated infrastructure", value: false },
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing companies scaling AI",
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    features: [
      { name: "Team members", value: "Up to 50" },
      { name: "API requests/month", value: "1M" },
      { name: "Custom models", value: "25" },
      { name: "Integrations", value: "Premium" },
      { name: "Support", value: "Priority" },
      { name: "Uptime SLA", value: "99.95%" },
      { name: "SSO", value: true },
      { name: "Dedicated infrastructure", value: false },
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { name: "Team members", value: "Unlimited" },
      { name: "API requests/month", value: "Unlimited" },
      { name: "Custom models", value: "Unlimited" },
      { name: "Integrations", value: "All" },
      { name: "Support", value: "24/7 Dedicated" },
      { name: "Uptime SLA", value: "99.99%" },
      { name: "SSO", value: true },
      { name: "Dedicated infrastructure", value: true },
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Pricing
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Simple, transparent pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </motion.p>
          
          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-foreground"
            />
            <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2 rounded-full bg-emerald-500/10 text-emerald-500">
              Save 20%
            </Badge>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-foreground/20 bg-card/80 shadow-2xl shadow-black/20"
                  : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-0 translate-x-0">
                  <div className="flex h-20 w-20 items-start justify-end overflow-hidden">
                    <div className="flex h-6 w-32 -rotate-45 translate-x-6 translate-y-4 items-center justify-center bg-foreground text-[10px] font-semibold uppercase tracking-wider text-background">
                      Popular
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                
                <div className="mt-6 flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold tracking-tight text-foreground"
                    >
                      {plan.monthlyPrice 
                        ? `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}` 
                        : "Custom"
                      }
                    </motion.span>
                  </AnimatePresence>
                  {plan.monthlyPrice && (
                    <span className="ml-1.5 text-muted-foreground">/month</span>
                  )}
                </div>
                
                {plan.monthlyPrice && isYearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed annually (${(plan.yearlyPrice || 0) * 12}/year)
                  </p>
                )}
              </div>
              
              <div className="flex flex-1 flex-col border-t border-border/30 p-6 sm:p-8">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.value === false ? (
                        <Minus className="h-4 w-4 text-muted-foreground/40" />
                      ) : (
                        <Check className="h-4 w-4 text-emerald-500" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {feature.name}:
                      </span>
                      <span className={`ml-auto text-sm font-medium ${
                        feature.value === false 
                          ? "text-muted-foreground/40" 
                          : feature.value === true 
                            ? "text-emerald-500" 
                            : "text-foreground"
                      }`}>
                        {feature.value === true ? "Yes" : feature.value === false ? "No" : feature.value}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`group mt-8 h-12 w-full rounded-xl text-sm font-medium ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          All plans include API access, documentation, and community support.
          <br />
          Need a custom solution?{" "}
          <a href="#" className="text-foreground underline underline-offset-4 hover:no-underline">
            Contact our sales team
          </a>
        </motion.p>
      </div>
    </section>
  )
}
