import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "Changelog", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Financial Services", href: "#" },
      { name: "Healthcare", href: "#" },
      { name: "Manufacturing", href: "#" },
      { name: "Retail", href: "#" },
      { name: "Technology", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Webinars", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Security", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-lg font-semibold text-foreground">NexusAI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Enterprise AI platform for modern businesses.
            </p>
          </div>
          
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NexusAI, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
