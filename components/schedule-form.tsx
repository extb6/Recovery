'use client'

import { useState } from 'react'
import { Phone, Mail, Shield } from 'lucide-react'
import PaymentModal from './payment-modal'

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    lossAmount: '',
    platform: '',
    lossDate: '',
    jurisdiction: '',
    description: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Show payment modal instead of success message
    setShowPaymentModal(true)
  }

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={handlePaymentModalClose}
        formData={formData}
      />
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Schedule Your Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete this form and our team will contact you within 24-48 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Form Submitted Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting Cursory. Our team will review your case and contact you within 24-48 hours with an initial assessment.
                </p>
                <a href="/" className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
                  Return to Home
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Loss Details */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-6">Loss Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Amount Lost (USD) *
                      </label>
                      <input
                        type="number"
                        name="lossAmount"
                        value={formData.lossAmount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="50000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Fraudulent Platform *
                      </label>
                      <input
                        type="text"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="e.g., FXGain Trading"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        When Did You Lose Funds? *
                      </label>
                      <input
                        type="date"
                        name="lossDate"
                        value={formData.lossDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Your Location/Jurisdiction *
                      </label>
                      <input
                        type="text"
                        name="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="e.g., California, USA"
                      />
                    </div>
                  </div>
                </div>

                {/* Case Description */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tell Us About Your Case *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                    placeholder="Describe how you lost the funds, what communications you had, and any other relevant details..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-sm text-muted-foreground flex gap-3">
                  <Shield size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p>
                    Your information is 100% confidential and encrypted. We comply with all data protection regulations. Your case details are only shared with our recovery specialists.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  Submit Case for Review
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-6">Other Ways to Contact Us</h3>
              
              <div className="space-y-4">
                <a href="tel:+18005551234" className="flex items-center gap-3 p-4 hover:bg-muted rounded-lg transition">
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">(800) 555-1234</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                </a>

                <a href="mailto:help@cursory.io" className="flex items-center gap-3 p-4 hover:bg-muted rounded-lg transition">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">help@cursory.io</p>
                    <p className="text-muted-foreground text-xs">Email support</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Why Choose Cursory */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-6">Why Choose Cursory?</h3>
              
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">No upfront fees - Pay only on recovery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">89% average success rate</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Expert data mining specialists</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">International fund tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Transparent process & timeline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">24-48 hour response time</span>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">
                &quot;Cursory recovered my funds when I thought they were lost forever. The team was professional, transparent, and delivered results.&quot;
              </p>
              <p className="font-semibold text-foreground text-sm">- Michael Chen, Verified Client</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
