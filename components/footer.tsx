import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/cursory-logo.png"
                  alt="Cursory"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-foreground">Cursory</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional fund recovery solutions for investment fraud victims.
            </p>
          </div>
          
        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Cursory. All rights reserved. | Professional Fund Recovery Services
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}
