'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, BarChart3, UserCheck, GraduationCap, ArrowRight, CheckCircle2, Sparkles, Brain, Route, MessageCircle, LineChart } from 'lucide-react'
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

const pillars = [
  {
    icon: Sparkles,
    title: 'AI-Driven Personalisation',
    desc: 'ELSA automatically creates learning paths tailored to each employee\'s role, level, and goals.',
    color: '#0B7A8F',
    img: '/images/dtvet-background.jpg',
  },
  {
    icon: Mic,
    title: 'Real-time Speaking Feedback',
    desc: 'Receive instant, detailed feedback on every aspect of your spoken English, from pronunciation to fluency.',
    color: '#1BA098',
    img: '/images/office.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Skill Development',
    desc: 'Short, frequent interactions build confidence and fluency gradually through consistent practice.',
    color: '#3DC2B8',
    img: '/images/about-vision-background.jpg',
  },
  {
    icon: BarChart3,
    title: 'Skills Intelligence for HR & Leaders',
    desc: 'HR and managers gain visibility into engagement, progress, and communication readiness across teams.',
    color: '#5aaa34',
    img: '/images/leadership-background.jpg',
  },
]

const steps = [
  {
    step: '01',
    icon: Brain,
    title: 'AI Assessment',
    desc: 'Employees start with Placement Assessment, our AI-powered speaking assessment that identifies individual communication gaps and readiness.',
    color: '#0B7A8F',
    cardStyle: { background: 'linear-gradient(135deg, #0B7A8F 0%, #0d8fa6 100%)' },
  },
  {
    step: '02',
    icon: Route,
    title: 'Personalised Learning Paths',
    desc: 'ELSA automatically creates learning paths tailored to each employee\'s role, level, and goals.',
    color: '#1BA098',
    cardStyle: { background: 'linear-gradient(135deg, #1BA098 0%, #22bfb5 100%)' },
  },
  {
    step: '03',
    icon: MessageCircle,
    title: 'Real-life Speaking Practice',
    desc: 'Employees practice real-life communication scenarios. Short, frequent interactions build confidence and fluency gradually.',
    color: '#3DC2B8',
    cardStyle: { background: 'linear-gradient(135deg, #3DC2B8 0%, #56d4ca 100%)' },
  },
  {
    step: '04',
    icon: LineChart,
    title: 'Actionable Insights',
    desc: 'HR and managers gain visibility into engagement, progress, and communication readiness across teams.',
    color: '#7ED957',
    cardStyle: { background: 'linear-gradient(135deg, #5aaa34 0%, #7ED957 100%)' },
  },
]

export default function ElsaPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="English Learning Speaking Assistant"
        title="Build confident, business-ready English speakers "
        highlight="at scale"
        description="ELSA is an AI-powered communication coach that helps organizations build confident, business-ready English speakers at scale. End-to-end English Communication Proficiency Solution."
        breadcrumb={[{ label: 'ELSA', href: '/elsa' }]}
        logoSrc="/images/elsa-logo.png"
        logoAlt="ELSA Speak Logo"
      />

      {/* About ELSA */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Why ELSA?</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                End-to-end English <span className="gradient-text">Communication Proficiency</span> Solution
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                ELSA is an AI-powered communication coach that helps organizations build confident, business-ready English speakers at scale. With personalized learning paths and real-time feedback, ELSA enables employees to develop communication skills that directly impact business success.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                Whether your team needs to improve customer interactions, lead international meetings, or communicate with global partners, ELSA provides the targeted practice and support to accelerate proficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '200+', label: 'Business Scenarios' },
                  { value: '50+', label: 'Learning Topics' },
                  { value: 'AI', label: 'Powered Coach' },
                  { value: 'Real-time', label: 'Feedback Engine' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-muted p-4 text-center">
                    <p className="font-display font-bold text-[#1BA098] text-2xl">{s.value}</p>
                    <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/about-vision-background.jpg"
                  alt="Learning English with ELSA"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Four Pillars */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Key Features</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                How ELSA Builds <span className="gradient-text">Real Communication Skills</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg group">
                  {/* Background image */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Colour gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${p.color}F0 0%, ${p.color}90 45%, ${p.color}30 100%)`,
                    }}
                  />
                  {/* Text & icon at bottom */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3 group-hover:scale-110 transition-transform">
                      <p.icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base leading-tight mb-1">{p.title}</h3>
                    <p className="text-white/85 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How ELSA Builds Skills */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">The Process</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                How ELSA builds speaking skills
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.12}>
                <div
                  className="relative p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={s.cardStyle}
                >
                  {/* Connecting line to next card */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-white/50 z-10" />
                  )}
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/20 mb-4">
                    <s.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{s.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4 text-balance">
              Ready to transform your team&apos;s English communication?
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Contact Cedar Tech Training to learn how ELSA can be deployed across your organisation to build confident, business-ready communicators.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all shadow-lg"
            >
              Get Started with ELSA <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
