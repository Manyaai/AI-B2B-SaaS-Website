"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-background sm:text-4xl lg:text-5xl">
            Ready to transform your business with AI?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-background/70">
            Join thousands of enterprises already using NexusAI to automate workflows, gain insights, and scale their operations.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-background px-8 text-base text-foreground hover:bg-background/90"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 border-background/30 bg-transparent px-8 text-base text-background hover:bg-background/10"
            >
              Talk to an Expert
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-background/50">
            No credit card required. Get started in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
