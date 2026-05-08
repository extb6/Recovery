import { ArrowRight, Lock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <p className="text-sm font-medium text-accent">Recover what&apos;s rightfully yours</p>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Recover Your Funds with Cursory
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Cursory uses advanced data mining and recovery solutions to help you reclaim funds lost to fraudulent investment platforms. We&apos;ve successfully recovered millions for our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/schedule" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
                Start Your Recovery
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/stories" className="px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:bg-muted transition">
                View Success Stories
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Lock size={18} className="text-primary" />
                <span className="text-muted-foreground">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                <span className="text-muted-foreground">Success Rate: 89%</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6">
              <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white text-4xl">
                💰
              </div>
              <p className="text-center text-muted-foreground max-w-xs">
                Millions recovered for victims of investment fraud
              </p>
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { value: '$2.3M', label: 'Recovered' },
                  { value: '1,247', label: 'Clients' },
                  { value: '89%', label: 'Success' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="font-bold text-lg text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
