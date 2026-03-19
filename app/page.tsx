import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { SolutionsSection } from "@/components/solutions-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EnterpriseSection } from "@/components/enterprise-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MetricsSection } from "@/components/metrics-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle noise texture overlay for depth */}
      <div className="noise" aria-hidden="true" />
      
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <FeaturesSection />
        <UseCasesSection />
        <SolutionsSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <EnterpriseSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
