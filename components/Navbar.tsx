'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Change Management Soft Skills', href: '/change-management' },
  { label: 'ChangeabilityPro', href: '/changeabilitypro' },
  {
    label: 'Digital Skills',
    href: '/dtvet',
    children: [
      { label: 'CERTIPORT', href: '/dtvet/certiport' },
      { label: 'EXIN', href: '/dtvet/exin' },
      { label: 'PEARSON', href: '/dtvet/pearson' },
    ],
  },
  { label: 'ELSA', href: '/elsa' },
  { label: 'Leadership & Soft Skills', href: '/leadership' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Use the liquid-nav class for a water-like blurred header effect
  // Add `force-fixed` to ensure it stays fixed to the viewport
  const navBg = 'liquid-nav force-fixed'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBg}`}
      style={{ backgroundColor: 'rgba(34,34,34,0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center h-16 lg:h-20 relative" style={{paddingLeft: 0}}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" style={{marginLeft: '-24px'}}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEDAR%20LOGO%20landscape-tYuS44ZfwiIQod6G73tO4SPsLrsKQT.png"
              alt="Cedar Tech Training"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)
              const base = 'px-3 py-2 rounded-md text-base lg:text-sm font-semibold transition-all duration-200 whitespace-nowrap border-b-2 border-transparent pb-1 inline-flex items-center gap-1'
              const activeCls = 'nav-pill text-white font-semibold'
              const inactiveCls = 'text-white/95 hover:text-white hover:bg-white/4 hover:border-[#3DC2B8]'

              if (link.children) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`${base} ${isActive ? activeCls : inactiveCls}`}
                      aria-haspopup="true"
                    >
                      <span className="flex items-center gap-0.5">
                        {link.label}
                        <ChevronDown size={14} className="text-white/80" />
                      </span>
                    </Link>
                    <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-white/15 bg-[#10343A]/95 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.35)] p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all z-50">
                      <div className="absolute -top-2 left-6 h-3 w-3 rotate-45 bg-[#10343A]/95 border-l border-t border-white/15" />
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${isChildActive ? 'text-[#3DC2B8] bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${base} ${isActive ? activeCls : inactiveCls}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1E3A3F]/98 backdrop-blur-md border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)
              const mobileBase = 'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200'
              const mobileActive = 'nav-pill mobile text-white font-semibold'
              const mobileInactive = 'text-white/90 hover:text-white hover:bg-white/5'
              const childBase = 'px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200'

              if (link.children) {
                return (
                  <div key={link.href} className="flex flex-col gap-1">
                    <Link
                      href={link.href}
                      className={`${mobileBase} ${isActive ? mobileActive : mobileInactive}`}
                    >
                      {link.label}
                    </Link>
                    <div className="ml-3 flex flex-col gap-1">
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`${childBase} ${isChildActive ? mobileActive : mobileInactive}`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${mobileBase} ${isActive ? mobileActive : mobileInactive}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
