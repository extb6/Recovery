import { FileText, Search, DollarSign, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Initial Consultation',
      description: 'Schedule a free, confidential consultation with our recovery experts to assess your case.'
    },
    {
      icon: Search,
      title: 'Investigation & Mining',
      description: 'We use advanced data mining techniques to trace your funds and identify the responsible parties.'
    },
    {
      icon: DollarSign,
      title: 'Recovery Process',
      description: 'Our team negotiates and manages the recovery process with authorities and platforms.'
    },
    {
      icon: CheckCircle,
      title: 'Funds Returned',
      description: 'Once successful, we ensure your funds are returned to your account quickly and securely.'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Recovery Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, four-step process to recover your funds efficiently and securely
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/20"></div>
                )}

                <div className="p-8 bg-card border border-border rounded-2xl h-full hover:border-primary/50 transition">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-3">Step {idx + 1}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
