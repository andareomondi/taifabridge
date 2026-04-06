'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-red-950 border-b border-yellow-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-2xl font-black bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Taifa
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-100 hover:text-yellow-400 transition font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-100 hover:text-yellow-400 transition font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-100 hover:text-yellow-400 transition font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-yellow-600 border-opacity-50">
            <Link href="/" className="block px-4 py-2 text-gray-100 hover:text-yellow-400 hover:bg-red-900 rounded transition">
              Home
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-100 hover:text-yellow-400 hover:bg-red-900 rounded transition">
              Services
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-100 hover:text-yellow-400 hover:bg-red-900 rounded transition">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
