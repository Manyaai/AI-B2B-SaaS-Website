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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <SolutionsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <EnterpriseSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
