import Link from 'next/link'
import { Mail, Phone, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="p-8 lg:p-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
              Ready to Recover Your Funds?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Get started with a free, confidential consultation. Our experts will assess your case and create a personalized recovery plan.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Side - Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Get in Touch
                </h3>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">help@cursory.io</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">(800) 555-1234</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Availability</p>
                    <p className="text-muted-foreground">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Quick Form */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Quick Inquiry
                </h3>

                <input 
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <input 
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <input 
                  type="text"
                  placeholder="Approximate Amount Lost"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <Link href="/schedule" className="inline-block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                  Schedule Free Consultation
                </Link>

                <p className="text-xs text-muted-foreground text-center">
                  100% confidential. We never share your information.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground text-center mb-6">
                Trusted by victims worldwide • Licensed & Certified Recovery Specialists
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</div>
                  ISO 27001 Certified
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</div>
                  Fraud Recovery Licensed
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</div>
                  BBB Accredited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
