import { Check, Info } from 'lucide-react'

const plans = [
  {
    name: 'Standard Recovery',
    description: 'For amounts up to $150,000',
    fee: '28%',
    feeDescription: 'of recovered amount',
    includes: [
      'Free consultation and case assessment',
      'Dedicated recovery specialist',
      'Multi-source fund tracing',
      'Document preparation assistance',
      'Monthly progress updates',
      '4-8 month average recovery timeline',
      'Success guarantee (no recovery = no fee)',
      'International fund tracking'
    ]
  },
  {
    name: 'Premium Recovery',
    description: 'For amounts $150,000 - $500,000',
    fee: '23%',
    feeDescription: 'of recovered amount',
    includes: [
      'Everything in Standard, plus:',
      'Priority case handling',
      'Senior investigator assignment',
      'Advanced blockchain analysis',
      'Legal coordination support',
      'Weekly progress updates',
      '3-6 month average recovery timeline',
      'Full documentation package for legal action'
    ],
    featured: true
  },
  {
    name: 'Elite Recovery',
    description: 'For amounts over $500,000',
    fee: 'Custom',
    feeDescription: '18-22% negotiable',
    includes: [
      'Everything in Premium, plus:',
      'Dedicated team of specialists',
      'Executive case manager',
      'International law enforcement liaison',
      'Real-time status dashboard',
      'Daily updates on complex cases',
      'Expedited recovery process',
      'Comprehensive legal support package'
    ]
  }
]

const additionalFees = [
  { item: 'Consultation', fee: 'Free', details: 'Completely free case review' },
  { item: 'Case Assessment', fee: 'Free', details: 'No obligation analysis' },
  { item: 'Fast-Track Processing', fee: '+$2,000-5,000 (optional)', details: 'Expedite your case' },
  { item: 'Hardship Fund Advance', fee: 'Available', details: 'Up to 10% of expected recovery' }
]

export default function PricingPlans() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recovery Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the plan that matches your recovery amount
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`glass-card p-8 transition-all ${
                plan.featured 
                  ? 'ring-2 ring-cyan-400/40 scale-105 lg:scale-100' 
                  : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-cyan-500/20">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{plan.fee}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.feeDescription}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/schedule" className={`w-full py-3 rounded-full font-semibold transition text-center block ${
                plan.featured
                  ? 'btn-premium'
                  : 'border border-cyan-500/30 text-foreground hover:border-cyan-500/60 hover:bg-cyan-500/5'
              }`}>
                Start Recovery
              </a>
            </div>
          ))}
        </div>

        {/* Additional Fees Section */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Additional Options</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFees.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Info size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.item}</h4>
                  <p className="text-primary font-bold mb-1">{item.fee}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-16 bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Payment Structure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Phase 1: Case Assessment</h4>
              <p className="text-muted-foreground mb-4">
                Complete case review and recovery strategy development.
              </p>
              <p className="text-primary font-bold">$0 - Free</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Phase 2: Investigation & Recovery</h4>
              <p className="text-muted-foreground mb-4">
                Active fund tracing and recovery execution.
              </p>
              <p className="text-primary font-bold">28%, 23%, or 18-22% (only if successful)</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Phase 3: Fund Repatriation</h4>
              <p className="text-muted-foreground mb-4">
                Transfer of recovered funds to your account.
              </p>
              <p className="text-primary font-bold">Minimal bank transfer fees (pass-through)</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Phase 4: Legal Support</h4>
              <p className="text-muted-foreground mb-4">
                Documentation for potential legal proceedings (optional).
              </p>
              <p className="text-primary font-bold">Included in recovery fee</p>
            </div>
          </div>
        </div>

        {/* Hardship Program */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Hardship Fund Advance</h3>
          <p className="text-muted-foreground mb-6">
            If you&apos;re experiencing financial hardship, we may be able to advance up to 10% of the estimated recovery amount to help cover immediate expenses while we work on your case. This is repaid from recovered funds.
          </p>
          <a href="/schedule" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
            Discuss Hardship Options
          </a>
        </div>
      </div>
    </section>
  )
}
