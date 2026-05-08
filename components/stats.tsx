export default function Stats() {
  const stats = [
    {
      number: '$2.3M+',
      label: 'Total Funds Recovered',
      description: 'Successfully reclaimed from fraudulent platforms'
    },
    {
      number: '1,247',
      label: 'Happy Clients',
      description: 'Who got their money back'
    },
    {
      number: '89%',
      label: 'Success Rate',
      description: 'Industry-leading recovery rate'
    },
    {
      number: '24/7',
      label: 'Support Team',
      description: 'Available around the clock'
    }
  ]

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition"
            >
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="font-semibold text-lg text-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
