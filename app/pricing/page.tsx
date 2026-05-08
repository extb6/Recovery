import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingHero from '@/components/pricing-hero'
import PricingPlans from '@/components/pricing-plans'
import PricingFAQ from '@/components/pricing-faq'

export const metadata = {
  title: 'Pricing & Fees - Cursory Fund Recovery',
  description: 'Transparent pricing for fund recovery services. Performance-based fees that only apply when funds are recovered.',
}

export default function PricingPage() {
  return (
    <main className="bg-background">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </main>
  )
}
