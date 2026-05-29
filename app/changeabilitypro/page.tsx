'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Search, Zap, Route, Library, CalendarDays, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const features = [
  {
    icon: Bot,
    title: 'AI Coach',
    desc: 'Get practical change advice powered by AI. The coach draws on the platform\'s Neurohacks, expert knowledge and published books to provide reliable, actionable guidance.',
    color: '#0B7A8F',
    cardStyle: { background: 'linear-gradient(135deg, #0B7A8F 0%, #1BA098 100%)' },
  },
  {
    icon: Search,
    title: 'Explore and Search',
    desc: 'Explore everything on the platform in one place. Smart recommendations adapt to your interests over time, while powerful search helps you quickly find the tools and insights you need.',
    color: '#1BA098',
    cardStyle: { background: 'linear-gradient(135deg, #1BA098 0%, #3DC2B8 100%)' },
  },
  {
    icon: Zap,
    title: 'Neurohacks',
    desc: 'Discover the Neurohacks most relevant to you. Recommendations adapt to your watch and search history, while the latest releases keep you up to date with new techniques.',
    color: '#3DC2B8',
    cardStyle: { background: 'linear-gradient(135deg, #3DC2B8 0%, #5aaa34 100%)' },
  },
  {
    icon: Route,
    title: 'Practical Pathways',
    desc: 'Explore curated learning pathways that group Neurohacks around key change topics. Follow a structured sequence from fundamentals to advanced techniques.',
    color: '#7ED957',
    cardStyle: { background: 'linear-gradient(135deg, #5aaa34 0%, #7ED957 100%)' },
  },
  {
    icon: Library,
    title: 'Resources',
    desc: 'Access a growing library of resources including research, templates and supporting materials for our Neurohacks. Powerful search and tabs help you quickly find what you need.',
    color: '#A7D948',
    cardStyle: { background: 'linear-gradient(135deg, #7aab28 0%, #A7D948 100%)' },
  },
  {
    icon: CalendarDays,
    title: 'Events',
    desc: 'Find upcoming events, from free member sessions to specialist courses. View them in the calendar, access recordings from past events, and manage the events you\'re booked onto.',
    color: '#0B7A8F',
    cardStyle: { background: 'linear-gradient(135deg, #0B4A52 0%, #0B7A8F 100%)' },
  },
]

const benefits = [
  'Suitable for leaders at any level in any industry',
  'Addresses real business change and transformation challenges',
  'AI-powered, continuously updated content',
  'Built on evidence-based change management research',
  'Accessible anytime, anywhere on any device',
  'Integrates with your existing L&D strategy',
]

export default function ChangeabilityProPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Leadership Development Platform"
        title="ChangeabilityPro"
        highlight=""
        description="A powerful tool for leadership development at any level, specifically addressing business change and transformation challenges with AI-powered coaching and curated learning pathways."
        breadcrumb={[{ label: 'ChangeabilityPro', href: '/changeabilitypro' }]}
        logoSrc="/ChangeabilityPro.png"
        logoAlt="ChangeabilityPro"
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">About the Platform</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                Leadership development built for <span className="gradient-text">the age of change</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                ChangeabilityPro® is a powerful tool for leadership development at any level, specifically addressing the challenges of business change and transformation. Everyone experiences high levels of change at work, and to achieve these improvements and create new ways of working, we all need support. This platform is an ever-expanding source of practical techniques that apply to all types and size of work-related change.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-[#1BA098] mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1BA098] hover:bg-[#0B7A8F] text-white font-semibold transition-colors shadow-lg"
              >
                Request a Demo <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end">
                <img 
                  src="/images/b368ae98-7f90-4b23-abbf-940b2aaab4c3.png" 
                  alt="ChangeabilityPro Platform User" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B7A8F] via-[#0B7A8F]/70 to-[#0B7A8F]/10"></div>
                <div className="relative z-10 p-8 sm:p-10 text-white">
                  <p className="font-display font-bold text-2xl sm:text-3xl mb-3 pr-4">
                    &ldquo;ChangeabilityPro® is a powerful tool for leadership development at any level.&rdquo;
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 font-medium">
                    Combines AI coaching with evidence-based change management methodologies.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'AI-Powered', label: 'Coaching' },
                      { value: '6', label: 'Core Modules' },
                      { value: '24/7', label: 'Access Anytime' },
                      { value: 'Certified', label: 'Expertise' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                        <p className="font-display font-bold text-base">{s.value}</p>
                        <p className="text-white/80 text-[11px] mt-0.5 tracking-wider uppercase">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Features */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Platform Features</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                Everything you need to <span className="gradient-text">lead change</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1} className="h-full">
                <div
                  className="group relative p-7 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                  style={f.cardStyle}
                >
                  {/* Decorative faded background icon */}
                  <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500 pointer-events-none">
                    <f.icon size={120} className="text-white" />
                  </div>
                  
                  {/* Icon box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 relative z-10"
                  >
                    <f.icon size={26} className="text-white" />
                  </div>
                  
                  {/* Text */}
                  <h3 className="font-display font-bold text-white text-xl mb-2 relative z-10">{f.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed relative z-10">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1E3A3F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4 text-balance">
              Ready to build your ChangeabilityPro® capability?
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed max-w-xl mx-auto">
              Contact us to learn how ChangeabilityPro can be integrated into your organisation&apos;s learning and development strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="/change-management"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/15 text-white font-semibold border border-white/30 hover:bg-white/25 transition-all"
              >
                View Change Management
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
