"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does NexusAI ensure data security and privacy?",
    answer: "NexusAI is SOC 2 Type II certified and implements end-to-end encryption for all data. Your data is never used to train our models, and we offer data residency options across 30+ regions. We're fully compliant with GDPR, CCPA, and HIPAA regulations."
  },
  {
    question: "What's the typical implementation timeline?",
    answer: "Most enterprise implementations take 2-4 weeks from kickoff to production. Our dedicated onboarding team works with you to integrate NexusAI with your existing systems, train your team, and ensure a smooth transition. We offer comprehensive documentation and 24/7 support throughout the process."
  },
  {
    question: "Can NexusAI integrate with our existing tools?",
    answer: "Yes, NexusAI offers 200+ native integrations with popular enterprise tools including Salesforce, Microsoft 365, SAP, Oracle, Slack, and more. We also provide robust APIs and webhooks for custom integrations with your proprietary systems."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer tiered support based on your plan. All customers receive access to our comprehensive documentation and community forums. Business plans include priority email support with 4-hour response times. Enterprise customers get 24/7 dedicated support with a named success manager."
  },
  {
    question: "How does pricing scale as we grow?",
    answer: "Our pricing is designed to grow with your organization. We offer volume discounts for larger API usage, and enterprise plans can be customized based on your specific needs. Contact our sales team for a custom quote tailored to your usage patterns."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all plans with no credit card required. This gives you full access to the platform features so you can evaluate NexusAI with your actual use cases. Our team is available to help you get the most out of your trial."
  },
]

function FAQItem({ 
  faq, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-border/30 last:border-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-foreground"
      >
        <span className={`text-base font-medium transition-colors ${isOpen ? "text-foreground" : "text-foreground/80"}`}>
          {faq.question}
        </span>
        <span className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
          isOpen 
            ? "border-foreground bg-foreground text-background" 
            : "border-border bg-secondary/50 text-muted-foreground"
        }`}>
          {isOpen ? (
            <Minus className="h-3 w-3" />
          ) : (
            <Plus className="h-3 w-3" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              FAQ
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Everything you need to know about NexusAI.
          </motion.p>
        </div>

        <div className="mt-12 rounded-2xl border border-border/30 bg-card/30 px-6 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Still have questions?{" "}
          <a href="#" className="text-foreground underline underline-offset-4 hover:no-underline">
            Contact our team
          </a>
        </motion.p>
      </div>
    </section>
  )
}
