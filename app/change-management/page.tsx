'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2, Clock, CreditCard, BadgeCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
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

const programs = [
  {
    id: 1,
    title: 'Change Management Essentials',
    badge: 'Option 1',
    badgeColor: 'bg-[#1BA098]',
    description:
      'Change Management essentials is a dynamic, hands-on program designed to introduce you to the essential tools and strategies needed to thrive in today\'s fast-evolving workplace.',
    outcomes: [
      'Understand the Fundamentals of Change Management',
      'Identify and Engage Stakeholders Effectively',
      'Address Resistance to Change',
      'Apply Practical Tools for Change Initiatives',
    ],
    duration: '1 Day',
    feePhysical: 'RM 1,200',
    feeOnline: 'RM 1,100',
    payment: '100% HRDC Claimable, Local Purchase Order (LPO)',
  },
  {
    id: 2,
    title: 'Embracing Organizational Change',
    badge: 'Option 2',
    badgeColor: 'bg-[#3DC2B8]',
    description:
      'Embracing Organizational Change is your next step in mastering the art of leading transformation. This fast-paced, hands-on program dives deep into the real-world tools and strategies you need to crush complex change initiatives.',
    outcomes: [
      'Understanding of Advanced Change Management Concepts',
      'Explore Stakeholder Engagement and Communication',
      'Examine Effective Resistance Management Strategies',
      'Develop a Change Strategy Development Skills',
    ],
    duration: '1 Day',
    feePhysical: 'RM 1,200',
    feeOnline: 'RM 1,100',
    payment: '100% HRDC Claimable, Local Purchase Order (LPO)',
  },
  {
    id: 3,
    title: 'The Leadership Compass: Guiding Teams Through Change',
    badge: 'Option 3',
    badgeColor: 'bg-[#7ED957]',
    description:
      'This program is designed to empower leaders and change practitioners with the advanced skills and strategies needed to navigate complex change environments, foster innovation, and drive sustainable transformation.',
    outcomes: [
      'Define the evolving role of leadership in driving strategic change and explain how leadership actions impact successful execution of organizational change initiatives',
      'Demonstrate the ability to assess and manage a portfolio of overlapping change initiatives, balancing priorities and resources',
      'Design strategies to embed change as a core competency within an organization, including creation of change champions and networks',
      'Use data and analytics to measure the effectiveness of change initiatives and make data-driven decisions',
    ],
    duration: '1 Day',
    feePhysical: 'RM 1,200',
    feeOnline: 'RM 1,100',
    payment: '100% HRDC Claimable, Local Purchase Order (LPO)',
  },
]

function ProgramCard({ program, index }: { program: (typeof programs)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeIn delay={index * 0.1}>
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 p-6 text-left focus-visible:outline-none"
          aria-expanded={open}
        >
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${program.badgeColor}`}>
              {program.badge}
            </span>
            <h3 className="font-display font-bold text-foreground text-lg">{program.title}</h3>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-border pt-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{program.description}</p>

                <h4 className="font-semibold text-foreground text-sm mb-3">Learning Outcomes</h4>
                <ul className="space-y-2.5 mb-6">
                  {program.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-[#1BA098] mt-0.5 flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-muted p-4 flex items-start gap-3">
                    <Clock size={18} className="text-[#1BA098] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Duration</p>
                      <p className="text-foreground text-sm font-semibold">{program.duration}</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted p-4 flex items-start gap-3">
                    <CreditCard size={18} className="text-[#1BA098] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Fees</p>
                      <p className="text-foreground text-sm font-semibold">Physical: {program.feePhysical}</p>
                      <p className="text-foreground text-sm font-semibold">Online: {program.feeOnline}</p>
                      <p className="text-xs text-muted-foreground">(inclusive of SST)</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted p-4 flex items-start gap-3">
                    <BadgeCheck size={18} className="text-[#1BA098] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Payment</p>
                      <p className="text-foreground text-sm font-semibold">{program.payment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1BA098] hover:bg-[#0B7A8F] text-white text-sm font-semibold transition-colors"
                  >
                    Enquire Now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function ChangeManagementPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Soft Skills Programme"
        title="The Change Journey: Learn, Lead, "
        highlight="Transform"
        description="A comprehensive three-part series by certified change management trainers helping professionals understand, embrace, and lead change effectively."
        breadcrumb={[{ label: 'Change Management', href: '/change-management' }]}
        logoSrc={'/images/ChatGPT Image May 25, 2026, 05_49_45 AM.png'}
        logoAlt={'Cedar / Partner logo'}
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Programme Overview</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                The Change Journey: Learn, Lead, Transform
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                We&apos;re pleased to introduce The Change Journey: Learn, Lead, Transform, a comprehensive three-part series facilitated by certified change management trainers. This program is designed to help professionals understand, embrace, and lead change effectively across all functions—leadership, HR, operations, finance, and beyond.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                The series comprises three 1-day programs, each crafted to equip participants with practical tools and insights to drive successful transformation initiatives.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <img 
                  src="/images/change-management-background.jpg" 
                  alt="Team Collaboration and Change Management" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Essentials', sub: 'For change beginners', color: '#1BA098' },
              { label: 'Embracing Change', sub: 'For change practitioners', color: '#3DC2B8' },
              { label: 'Leadership Compass', sub: 'For change leaders', color: '#7ED957' },
            ].map((step, i) => (
              <FadeIn key={step.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-border bg-card">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base">{step.label}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{step.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Programme Options */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8">
              Programme Options
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* HRDC Banner */}
      <section className="py-14 bg-[#1E3A3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <BadgeCheck size={48} className="text-[#7ED957] mx-auto mb-4" />
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">
              100% HRDC Claimable
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mb-6 leading-relaxed">
              All our Change Management programmes are fully HRDC claimable. Eligible Malaysian employers can claim training costs through the Human Resources Development Corporation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all"
            >
              Register Your Interest <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
