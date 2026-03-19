"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "Pricing", href: "#pricing" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "border-b border-border/50 bg-background/60 backdrop-blur-2xl backdrop-saturate-150" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-foreground transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-4 w-4 text-background" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              NexusAI
            </span>
          </Link>
          
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-secondary/60"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                Resources 
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 border-border/50 bg-card/95 backdrop-blur-xl">
                <DropdownMenuItem className="cursor-pointer">Documentation</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">API Reference</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Blog</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Case Studies</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Log in
          </Button>
          <Button 
            size="sm" 
            className="hidden h-9 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg hover:shadow-white/5 sm:inline-flex"
          >
            Get a demo
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-border/50 bg-background/95 backdrop-blur-2xl sm:w-[400px]">
              <div className="flex flex-col gap-8 pt-10">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-secondary/50"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 px-4">
                  <Button variant="outline" className="h-12 w-full rounded-xl">
                    Log in
                  </Button>
                  <Button className="h-12 w-full rounded-xl bg-foreground text-background">
                    Get a demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
