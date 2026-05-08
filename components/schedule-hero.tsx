export default function ScheduleHero() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <p className="text-sm font-medium text-accent">Free Consultation - No Obligation</p>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Start Your Fund Recovery Today
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Begin with a free consultation and case assessment. Our specialists will evaluate your situation and provide a clear recovery strategy with realistic timelines and fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div>
            <p className="text-3xl font-bold text-primary mb-2">Free</p>
            <p className="text-muted-foreground">Consultation & Assessment</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">24-48 hrs</p>
            <p className="text-muted-foreground">Initial Response Time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">89%</p>
            <p className="text-muted-foreground">Average Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
