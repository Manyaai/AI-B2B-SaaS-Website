"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"

const integrations = [
  { name: "Salesforce", icon: "SF", category: "CRM", color: "from-blue-500/20 to-cyan-500/10" },
  { name: "HubSpot", icon: "HS", category: "Marketing", color: "from-orange-500/20 to-amber-500/10" },
  { name: "Slack", icon: "SL", category: "Communication", color: "from-purple-500/20 to-pink-500/10" },
  { name: "Microsoft 365", icon: "MS", category: "Productivity", color: "from-blue-500/20 to-indigo-500/10" },
  { name: "Google Workspace", icon: "GW", category: "Productivity", color: "from-red-500/20 to-yellow-500/10" },
  { name: "SAP", icon: "SP", category: "ERP", color: "from-sky-500/20 to-blue-500/10" },
  { name: "Oracle", icon: "OR", category: "Database", color: "from-red-500/20 to-orange-500/10" },
  { name: "Snowflake", icon: "SF", category: "Data", color: "from-cyan-500/20 to-blue-500/10" },
  { name: "AWS", icon: "AW", category: "Cloud", color: "from-amber-500/20 to-orange-500/10" },
  { name: "Azure", icon: "AZ", category: "Cloud", color: "from-blue-500/20 to-cyan-500/10" },
  { name: "Zendesk", icon: "ZD", category: "Support", color: "from-emerald-500/20 to-green-500/10" },
  { name: "Jira", icon: "JR", category: "Project", color: "from-blue-500/20 to-indigo-500/10" },
]

export function IntegrationsSection() {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(255,255,255,0.02),transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Integrations
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Works with your stack
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-pretty text-lg text-muted-foreground"
          >
            Native integrations, APIs, and webhooks for 200+ enterprise tools.
          </motion.p>
        </div>

        <div 
          ref={gridRef}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:bg-card/60"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-secondary/50 transition-all duration-300 group-hover:border-border group-hover:bg-secondary group-hover:scale-110">
                <span className="text-sm font-bold text-foreground">
                  {integration.icon}
                </span>
              </div>
              <span className="relative mt-3 text-sm font-medium text-foreground">
                {integration.name}
              </span>
              <span className="relative mt-0.5 text-xs text-muted-foreground">
                {integration.category}
              </span>
            </motion.div>
          ))}
          
          {/* "More" card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.4, 
              delay: integrations.length * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/50 bg-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-border/50 transition-colors group-hover:border-border">
              <Plus className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
            <span className="mt-3 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              188+ more
            </span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button 
            variant="outline" 
            className="rounded-xl border-border/50 bg-secondary/30"
          >
            View all integrations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
