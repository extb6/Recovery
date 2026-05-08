'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much does recovery cost?',
    answer: 'Recovery costs are performance-based. You only pay a percentage of what we recover: 28% for Standard (up to $150K), 23% for Premium ($150K-$500K), or 18-22% for Elite (over $500K). Consultations and case assessments are completely free.'
  },
  {
    question: 'Do you charge upfront fees?',
    answer: 'No. We charge zero upfront fees. Our entire model is built on performance - if we don\'t recover your funds, you don\'t pay anything. This aligns our success with yours.'
  },
  {
    question: 'What if my case is unsuccessful?',
    answer: 'If we cannot recover your funds, you pay nothing. We take on the risk because we\'re confident in our data mining and recovery techniques. You only pay our fee when funds are successfully returned to you.'
  },
  {
    question: 'Can I get an advance on recovered funds?',
    answer: 'Yes. If you\'re experiencing financial hardship, we can advance up to 10% of the estimated recovery amount. This helps cover immediate expenses while we work on your case. The advance is repaid from your recovered funds.'
  },
  {
    question: 'How long does recovery typically take?',
    answer: 'Recovery timelines vary by case complexity. Standard cases typically take 4-8 months, Premium cases 3-6 months, and Elite cases can be expedited further. We provide monthly (or weekly for Premium/Elite) progress updates.'
  },
  {
    question: 'Are there additional hidden fees?',
    answer: 'No hidden fees. The only potential additional costs are: optional Fast-Track processing ($2,000-5,000 to expedite), bank transfer fees (minimal, pass-through), and optional hardship fund advance repayment from recovered funds.'
  },
  {
    question: 'What if the platform is in a different country?',
    answer: 'International cases are our specialty. We handle global fund tracing and work with international regulatory bodies. International cases are still eligible for all pricing tiers and fee structures.'
  },
  {
    question: 'Do you accept partial recovery payments?',
    answer: 'Yes. Our fee applies to whatever amount we recover. If we recover $50,000 from a $100,000 loss, you pay our percentage on the $50,000 recovered. There\'s no minimum recovery threshold.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We collect our fee from the recovered funds directly, so you don\'t need to pay us separately. The recovered amount arrives in your account after our fee is deducted.'
  },
  {
    question: 'Can I negotiate the recovery fee?',
    answer: 'For Elite cases (over $500K), fees are negotiable between 18-22%. Standard and Premium fees are fixed. If you have a unique situation, contact us for a custom quote.'
  }
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pricing FAQs
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our transparent fee structure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={`flex-shrink-0 text-primary transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 border-t border-border bg-muted/30 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions about pricing?
          </h3>
          <p className="text-muted-foreground mb-8">
            Our specialists are ready to discuss your specific situation and provide a custom quote
          </p>
          <a href="/schedule" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
