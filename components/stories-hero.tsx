export default function StoriesHero() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <p className="text-sm font-medium text-accent">Real Results from Real People</p>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Success Stories from Cursory Clients
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn how real people just like you successfully recovered their funds from fraudulent investment platforms. These are verified case studies showing the power of Cursory&apos;s advanced recovery methods.
        </p>

        <div className="grid grid-cols-3 gap-8 pt-12 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">$2.3M+</p>
            <p className="text-muted-foreground mt-2">Total Recovered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">1,247</p>
            <p className="text-muted-foreground mt-2">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">89%</p>
            <p className="text-muted-foreground mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
