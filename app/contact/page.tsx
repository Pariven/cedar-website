'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const programmes = [
  'Change Management Soft Skills',
  'ChangeabilityPro',
  'ELSA (English Learning Speaking Assistant)',
  'Digital TVET',
  'Leadership & Soft Skills',
  'General Enquiry',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <PageHero
        tag="Get In Touch"
        title="Let's start the conversation"
        highlight=""
        description="Reach out to our team to discuss your training needs, request a programme brochure, or schedule a consultation. We'd love to hear from you."
        breadcrumb={[{ label: 'Contact Us', href: '/contact' }]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1BA09820] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#1BA098]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">+60 17-608 5587</p>
                      <p className="text-muted-foreground text-sm">+60 19-668 1981</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1BA09820] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#1BA098]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                      <a href="mailto:info@cedartechtraining.com" className="text-[#1BA098] hover:text-[#0B7A8F] text-sm transition-colors">
                        info@cedartechtraining.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1BA09820] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#1BA098]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Address</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        D-13-08, Menara Suezcap 1, KL Gateway,<br />
                        No 2, Jalan Kerinchi,<br />
                        Gerabang Kerinchi Lestari,<br />
                        59200 Kuala Lumpur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#0B7A8F] to-[#3DC2B8] p-6 text-white">
                  <h3 className="font-display font-bold text-lg mb-2">HRDC Claimable</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    All our programmes are 100% HRDC claimable. We assist eligible Malaysian employers through the entire HRDC claims process.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <CheckCircle2 size={64} className="text-[#1BA098] mb-4" />
                      <h3 className="font-display font-bold text-foreground text-2xl mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
                        Thank you for reaching out. Our team will get back to you within 1-2 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-foreground text-2xl mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                              First Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="firstName"
                              type="text"
                              required
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors"
                              placeholder="Enter first name"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                              Last Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="lastName"
                              type="text"
                              required
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                            Email Address <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                            Company / Organisation
                          </label>
                          <input
                            id="company"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="programme" className="block text-sm font-medium text-foreground mb-1.5">
                            Programme of Interest
                          </label>
                          <select
                            id="programme"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors"
                          >
                            <option value="">Select a programme...</option>
                            {programmes.map((p) => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098]/50 focus:border-[#1BA098] transition-colors resize-none"
                            placeholder="Tell us about your training needs..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1BA098] hover:bg-[#0B7A8F] text-white font-semibold transition-colors shadow-lg"
                        >
                          Send Message <Send size={16} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
