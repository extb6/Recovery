export default function PricingHero() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <p className="text-sm font-medium text-accent">Transparent & Performance-Based</p>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Simple, Honest Pricing
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          You only pay when funds are recovered. No hidden fees, no upfront charges for consultations. Our success is your success.
        </p>
      </div>
    </section>
  )
}
