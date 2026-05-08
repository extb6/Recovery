'use client'

import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function SupportHero() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            We&apos;re Here to Help
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our support team. We&apos;re available 24/7 to assist with payment issues, case inquiries, or any questions about the recovery process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Live Chat */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Chat with our support specialists in real-time
            </p>
            <button className="text-primary font-semibold hover:text-primary/80 transition">
              Start Live Chat →
            </button>
          </div>

          {/* Email Support */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">
              Detailed support via email
            </p>
            <a href="mailto:support@cursory.io" className="text-primary font-semibold hover:text-primary/80 transition">
              support@cursory.io →
            </a>
          </div>

          {/* Phone Support */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Phone Support</h3>
            <p className="text-muted-foreground mb-4">
              Speak directly with a specialist
            </p>
            <a href="tel:+18005551234" className="text-primary font-semibold hover:text-primary/80 transition">
              (800) 555-1234 →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Support Hours</h3>
            <p className="text-muted-foreground mb-2">
              Available 24 hours a day
            </p>
            <p className="text-sm text-muted-foreground">
              7 days a week, including holidays
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-foreground mb-2">My payment was declined, what should I do?</h3>
              <p className="text-muted-foreground text-sm">
                If your card was declined, you can try another card or switch to cryptocurrency payment. Our team can also help troubleshoot the issue.
              </p>
            </div>
            
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-foreground mb-2">How long does the recovery process take?</h3>
              <p className="text-muted-foreground text-sm">
                Initial assessment takes 24-48 hours. The full recovery process typically takes 4-8 months depending on the complexity of your case.
              </p>
            </div>
            
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-foreground mb-2">Can I cancel my payment?</h3>
              <p className="text-muted-foreground text-sm">
                For card payments, contact us immediately. For crypto payments, we can discuss your situation before the funds are moved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept Visa, Mastercard, American Express, Bitcoin, Ethereum, USDC, Tether, Ripple, and Binance Coin.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Have more questions? Our support team is ready to help.
          </p>
          <Link
            href="/schedule"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Return to Form
          </Link>
        </div>
      </div>
    </section>
  )
}
