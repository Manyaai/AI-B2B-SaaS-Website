"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const integrations = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Slack", category: "Communication" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "SAP", category: "ERP" },
  { name: "Oracle", category: "Database" },
  { name: "Snowflake", category: "Data" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Zendesk", category: "Support" },
  { name: "Jira", category: "Project" },
]

export function IntegrationsSection() {
  return (
    <section className="relative bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Integrations
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Works with your stack
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Connect NexusAI with 200+ enterprise tools. Native integrations, APIs, and webhooks for any workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 transition-all hover:border-muted-foreground/30 hover:bg-secondary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <span className="text-lg font-semibold text-foreground">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="mt-3 text-sm font-medium text-foreground">
                {integration.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {integration.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline">
            View all integrations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
