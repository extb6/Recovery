'use client'

import { Star } from 'lucide-react'

const stories = [
  {
    id: 1,
    name: 'James Mitchell',
    location: 'California, USA',
    amount: '$85,000',
    platform: 'FXGain Trading',
    timeline: '5 months',
    image: '👨‍💼',
    rating: 5,
    story: 'I lost $85,000 to FXGain Trading, a fraudulent forex platform. After 6 months of trying to withdraw, I contacted Cursory. Their team traced the funds through multiple offshore accounts and recovered 100% of my investment. Incredible service!'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Texas, USA',
    amount: '$145,000',
    platform: 'CryptoVault Elite',
    timeline: '7 months',
    image: '👩‍💼',
    rating: 5,
    story: 'CryptoVault Elite promised 200% monthly returns. When I tried to withdraw, they demanded I pay "taxes". Cursory helped me recover not just my principal but also some of the promised returns. Their expertise in crypto fraud is unmatched.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    location: 'New York, USA',
    amount: '$120,000',
    platform: 'GoldOptions Exchange',
    timeline: '6 months',
    image: '👨‍💼',
    rating: 5,
    story: 'I invested $120,000 in what seemed like a legitimate options trading platform. After 8 months of no returns and communication, I found Cursory. They recovered 95% of my funds in just 6 months. Remarkable results!'
  },
  {
    id: 4,
    name: 'Jessica Williams',
    location: 'Florida, USA',
    amount: '$95,000',
    platform: 'BitWealth Trading',
    timeline: '4 months',
    image: '👩‍💼',
    rating: 5,
    story: 'BitWealth Trading turned out to be a complete scam. Cursory&apos;s team worked tirelessly to trace my funds and recovered them faster than I expected. The process was transparent and professional from start to finish.'
  },
  {
    id: 5,
    name: 'David Rodriguez',
    location: 'Arizona, USA',
    amount: '$110,000',
    platform: 'ProfitMax System',
    timeline: '6 months',
    image: '👨‍💼',
    rating: 5,
    story: 'I was devastated after losing $110,000 to ProfitMax System. Cursory provided hope when I had none. Their investigators recovered my funds and provided documentation for legal action. Best decision I made!'
  },
  {
    id: 6,
    name: 'Amanda Lee',
    location: 'Washington, USA',
    amount: '$130,000',
    platform: 'Quantum Invest',
    timeline: '8 months',
    image: '👩‍💼',
    rating: 5,
    story: 'Quantum Invest disappeared with my entire investment of $130,000. I thought it was gone forever. Cursory&apos;s advanced data mining techniques located the funds and successfully recovered them. Phenomenal team!'
  }
]

export default function ClientStories() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Verified Client Successes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every story below represents a real client who recovered their funds through our data mining and recovery expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{story.image}</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {story.story}
              </p>

              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Amount Recovered:</span>
                  <span className="font-bold text-primary">{story.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Fraudulent Platform:</span>
                  <span className="text-sm font-medium text-foreground">{story.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Recovery Timeline:</span>
                  <span className="text-sm font-medium text-foreground">{story.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Recover Your Funds?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your case could be next. Cursory&apos;s team of specialists is ready to help you recover what you lost.
          </p>
          <a href="/schedule" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
            Start Your Recovery Today
          </a>
        </div>
      </div>
    </section>
  )
}
