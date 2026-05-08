import { CheckCircle, Search, FileText, DollarSign } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'Submit your case details through our secure form. We\'ll review your situation within 24-48 hours and provide an initial assessment.',
    icon: CheckCircle,
    timeline: '1-2 days'
  },
  {
    step: 2,
    title: 'Case Investigation',
    description: 'Our team traces the funds using advanced data mining techniques, blockchain analysis, and international regulatory databases.',
    icon: Search,
    timeline: '2-6 weeks'
  },
  {
    step: 3,
    title: 'Recovery Strategy',
    description: 'We develop a comprehensive recovery plan and document everything for potential legal action. You\'ll receive a detailed timeline and fee quote.',
    icon: FileText,
    timeline: '1-2 weeks'
  },
  {
    step: 4,
    title: 'Fund Repatriation',
    description: 'Once funds are located and secured, we handle the transfer to your account. You pay our fee only when recovery is complete.',
    icon: DollarSign,
    timeline: '1-4 weeks'
  }
]

export default function RecoveryProcess() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Cursory Recovery Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent, step-by-step approach to recovering your funds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="relative">
                {/* Connection Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[60%] w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}

                {/* Card */}
                <div className="relative bg-card border border-border rounded-xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      Step {item.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="text-xs font-semibold text-primary">
                    Timeline: {item.timeline}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Duration */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Average Recovery Timeline</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground mb-1">Initial Consultation: 1-2 days</h4>
                <p className="text-muted-foreground text-sm">Submit your case and receive preliminary assessment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground mb-1">Investigation Phase: 2-6 weeks</h4>
                <p className="text-muted-foreground text-sm">Detailed fund tracing and evidence gathering</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground mb-1">Recovery Execution: 1-4 months</h4>
                <p className="text-muted-foreground text-sm">Fund location and repatriation process</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground mb-1">Funds to Your Account: 1-2 weeks</h4>
                <p className="text-muted-foreground text-sm">Final bank transfer and documentation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-accent/30">
            <p className="text-muted-foreground text-sm">
              <strong>Total Average Timeline:</strong> 4-8 months for Standard cases, 3-6 months for Premium cases, accelerated for Elite cases
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
