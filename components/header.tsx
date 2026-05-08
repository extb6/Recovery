'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">+</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:block">Plus Cloud</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition">
            How It Works
          </Link>
          <Link href="#success-stories" className="text-foreground hover:text-primary transition">
            Success Stories
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
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
              <Link href="#how-it-works" className="text-foreground hover:text-primary">
                How It Works
              </Link>
              <Link href="#success-stories" className="text-foreground hover:text-primary">
                Success Stories
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary">
                Contact
              </Link>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
