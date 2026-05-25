"use client"

import Link from 'next/link'
import { Phone, MapPin, Mail, Linkedin, Facebook, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Change Management', href: '/change-management' },
  { label: 'ChangeabilityPro', href: '/changeabilitypro' },
  { label: 'DTVET', href: '/dtvet' },
  { label: 'ELSA', href: '/elsa' },
  { label: 'Leadership & Soft Skills', href: '/leadership' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E3A3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEDAR%20LOGO%20landscape-tYuS44ZfwiIQod6G73tO4SPsLrsKQT.png"
              alt="Cedar Tech Training"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Growing people through open, innovative learning. Building and elevating human capital development to align with future industry trends.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1BA098] transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1BA098] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1BA098] transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#3DC2B8] text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#3DC2B8] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#3DC2B8] text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone size={15} className="text-[#3DC2B8] mt-0.5 flex-shrink-0" />
                <div>
                  <p>+60 17-608 5587</p>
                  <p>+60 19-668 1981</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail size={15} className="text-[#3DC2B8] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cedartechtraining.com" className="hover:text-[#3DC2B8] transition-colors">
                  info@cedartechtraining.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="text-[#3DC2B8] mt-0.5 flex-shrink-0" />
                <p>
                  D-13-08, Menara Suezcap 1, KL Gateway,<br />
                  No 2, Jalan Kerinchi,<br />
                  Gerabang Kerinchi Lestari,<br />
                  59200 Kuala Lumpur
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-[#3DC2B8] text-sm uppercase tracking-widest mb-4">
              Stay Updated
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for the latest training insights and programme updates.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#3DC2B8] transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-[#1BA098] hover:bg-[#0B7A8F] text-white text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Cedar Tech Training. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
