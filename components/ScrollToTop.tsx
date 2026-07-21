'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#1BA098] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#15857e] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1BA098] focus:ring-offset-2 ${
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
      </button>
    </div>
  )
}
