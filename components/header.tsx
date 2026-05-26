'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-glow sticky top-0 z-50 bg-background/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
            <Image
              src="/cursory-logo.png"
              alt="Cursory"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:block">Cursory</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-cyan-400 transition duration-300">
            Home
          </Link>
          <Link href="/stories" className="text-foreground hover:text-cyan-400 transition duration-300">
            Success Stories
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-cyan-400 transition duration-300">
            Pricing
          </Link>
          <Link href="/schedule" className="text-foreground hover:text-cyan-400 transition duration-300">
            Schedule Recovery
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="btn-premium">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-6 gap-4">
              <Link href="/" className="text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/stories" className="text-foreground hover:text-primary">
                Success Stories
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="/schedule" className="text-foreground hover:text-primary">
                Schedule Recovery
              </Link>
              <Link href="/schedule" className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition block text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
