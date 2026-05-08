'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Investment Victim, Denver, CO',
      amount: '$85,000',
      text: 'I lost $85,000 to a fraudulent forex platform. I thought my money was gone forever. Plus Cloud recovered my entire investment in just 6 months. Their team was professional, transparent, and kept me informed throughout the process.',
      recovered: true,
      date: 'Recovered in 6 months'
    },
    {
      name: 'Michael Chen',
      role: 'Crypto Investment Fraud Victim, San Francisco, CA',
      amount: '$145,000',
      text: 'After losing over $145,000 in a crypto scam, I was devastated. Plus Cloud\'s experts traced the funds through multiple wallets and recovered 92% of my investment. Their expertise in crypto fraud is unmatched.',
      recovered: true,
      date: 'Recovered in 8 months'
    },
    {
      name: 'Emma Williams',
      role: 'Binary Options Victim, London, UK',
      amount: '$52,000',
      text: 'I was a victim of binary options fraud and lost my life savings. Plus Cloud helped me navigate the complex international recovery process. I got my money back and can finally move forward. Thank you!',
      recovered: true,
      date: 'Recovered in 4 months'
    },
    {
      name: 'James Morrison',
      role: 'Stock Trading Scam Victim, Toronto, Canada',
      amount: '$127,500',
      text: 'When I discovered my trading account was fake and my money stolen, I felt helpless. Plus Cloud identified the responsible parties and recovered $127,500. Their persistence and expertise made all the difference.',
      recovered: true,
      date: 'Recovered in 7 months'
    },
    {
      name: 'Lisa Anderson',
      role: 'Ponzi Scheme Victim, Austin, TX',
      amount: '$98,000',
      text: 'I invested in what I thought was a legitimate venture. It turned out to be a Ponzi scheme. Plus Cloud worked diligently to recover my $98,000. I recommend them to anyone in a similar situation.',
      recovered: true,
      date: 'Recovered in 5 months'
    },
    {
      name: 'David Martinez',
      role: 'Trading Platform Fraud Victim, Miami, FL',
      amount: '$110,000',
      text: 'Lost $110,000 in a fake trading platform. Plus Cloud\'s investigation was thorough and their team never gave up. They recovered the full amount. I can\'t thank them enough for getting my money back.',
      recovered: true,
      date: 'Recovered in 6 months'
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const displayedTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length]
  ]

  return (
    <section id="success-stories" className="py-16 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people who recovered their funds with Plus Cloud&apos;s help
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {displayedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <Quote size={20} className="text-primary/50" />
              </div>

              <p className="text-foreground leading-relaxed flex-grow mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {testimonial.role}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-primary">
                    {testimonial.amount} Recovered
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="p-8 bg-card border border-border rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <Quote size={20} className="text-primary/50" />
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              &quot;{testimonials[activeIndex].text}&quot;
            </p>

            <div className="border-t border-border pt-6">
              <p className="font-semibold text-foreground mb-1">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {testimonials[activeIndex].role}
              </p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg font-bold text-primary">
                  {testimonials[activeIndex].amount} Recovered
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonials[activeIndex].date}
                </p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="flex-1 p-3 border border-border rounded-lg hover:bg-muted transition flex items-center justify-center"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="flex-1 p-3 border border-border rounded-lg hover:bg-muted transition flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === activeIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex justify-center gap-4 mt-12">
          <button 
            onClick={prevSlide}
            className="p-3 border border-border rounded-full hover:bg-muted transition hover:border-primary/50"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 border border-border rounded-full hover:bg-muted transition hover:border-primary/50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
