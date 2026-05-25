'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
  Brain,
  Globe,
  BookOpen,
  Cpu,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Fade-in wrapper ───────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
      ? { opacity: 0, x: -40 }
      : direction === 'right'
      ? { opacity: 0, x: 40 }
      : { opacity: 0 }
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// ── Offerings data ────────────────────────────────────────────────
const offerings = [
  {
    icon: Users,
    title: 'CHANGE MANAGEMENT SOFT SKILLS',
    subtitle: 'The Change Journey Programme',
    desc: 'Learn, lead, and transform through certified change management training.',
    href: '/change-management',
    color: 'from-[#3DC2B8] to-[#7ED957]',
  },
  {
    icon: TrendingUp,
    title: 'CHANGEABILITY PRO',
    subtitle: 'Leadership & Change Platform',
    desc: 'Powerful tool for leadership development and business change transformation.',
    href: '/changeabilitypro',
    color: 'from-[#1BA098] to-[#3DC2B8]',
  },
  {
    icon: Brain,
    title: 'ENGLISH LEARNING SPEAKING ASSISTANT (ELSA)',
    subtitle: 'English Learning Speaking Assistant',
    desc: 'AI-powered communication coach for business-ready English speakers at scale.',
    href: '/elsa',
    color: 'from-[#0B7A8F] to-[#1BA098]',
  },
  {
    icon: Cpu,
    title: 'DIGITAL SKILLS',
    subtitle: 'Technical & Vocational Education',
    desc: 'Future-ready digital certifications aligned with industry demands.',
    href: '/dtvet',
    color: 'from-[#0B7A8F] to-[#3DC2B8]',
  },
  {
    icon: Award,
    title: 'LEADERSHIP PROGRAMMES',
    subtitle: 'Soft Skills & Positive Psychology',
    desc: 'Empower managers with confidence, responsibility, and effective leadership skills.',
    href: '/leadership',
    color: 'from-[#7ED957] to-[#A7D948]',
  },
]

// ── Carousel slides ───────────────────────────────────────────────
const carouselSlides = [
  {
    title: 'ChangeabilityPro®',
    subtitle: 'Powerful leadership development for business change & transformation',
    tag: 'AI-Powered Platform',
    // Use the uploaded ChangeabilityPro logo (at repo root `public/ChangeabilityPro.png`)
    logo: '/ChangeabilityPro.png',
    href: '/changeabilitypro',
    bg: 'from-[#0B7A8F] to-[#1BA098]',
  },
  {
    title: 'ELSA',
    subtitle: 'AI-powered communication coach building confident, business-ready English speakers',
    tag: 'English Learning Speaking Assistant',
    logo: '/images/elsa-logo.png',
    href: '/elsa',
    bg: 'from-[#1BA098] to-[#3DC2B8]',
  },
  {
    title: 'Digital Skills',
    subtitle: 'Bridging the gap between traditional technical education and the digital economy',
    tag: 'Future-Ready Skills',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-qkuOgkUwDz2Za40LH6U5vCQbFDDRru.png',
    href: '/dtvet',
    bg: 'from-[#0B7A8F] to-[#2C5260]',
  },
  {
    title: 'OIPD Partnership',
    subtitle: 'Internationally accredited programmes with the Oxbridge Institute of Professional Development',
    tag: 'Global Accreditation',
    logo: '/images/ChatGPT Image May 25, 2026, 05_49_45 AM.png',
    href: '/about',
    bg: 'from-[#1E3A3F] to-[#0B7A8F]',
  },
]

// ── Why Cedar stats ───────────────────────────────────────────────
const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5000+', label: 'Professionals Trained' },
  { value: '100%', label: 'HRDC Claimable' },
  { value: '5', label: 'Specialised Programmes' },
]

export default function HomePage() {
  // Carousel state
  const [current, setCurrent] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselSlides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  const goTo = (index: number) => {
    setCurrent(index)
    if (timer.current) {
      clearInterval(timer.current)
    }
    startTimer()
  }

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-teal">
        {/* Fixed background layer so hero background stays while scrolling */}
        <div className="hero-fixed-bg -z-10 pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-[#7ED957]/10" />
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance mb-6">
              Growing people through<br />
              <span className="text-[#7ED957]">open, innovative</span> learning
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Cedar Tech Training builds and elevates human capital development in our region, always aligning industry needs with future trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Our Programs
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-base border border-white/30 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* ChangeabilityPro logo removed from homepage (shown on its own page) */}

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-4 py-5 text-center">
                <p className="font-display font-bold text-white text-3xl">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 48C840 58.7 960 69.3 1080 64C1200 58.7 1320 37.3 1380 26.7L1440 16V80H0Z" fill="#F8FAFA" />
          </svg>
        </div>
      </section>

      {/* ── WHY CEDAR ──────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2 mb-5 text-balance">
                Why Choose <span className="gradient-text">Cedar Tech Training?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                To enable working adults to grow confidently by combining human leadership capability with future-ready technical and technological skills.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation-Led Learning',
                desc: 'We integrate the latest technologies including AI into our training methodologies, ensuring learners are future-ready.',
                color: '#1BA098',
              },
              {
                icon: Users,
                title: 'Human-Centred Approach',
                desc: 'Our programmes prioritise positive psychology, mental wellness, and leadership development for holistic growth.',
                color: '#3DC2B8',
              },
              {
                icon: TrendingUp,
                title: 'Industry-Aligned Content',
                desc: 'Every curriculum is designed in partnership with industry experts to meet current and emerging workplace demands.',
                color: '#7ED957',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-[#1BA098]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon size={26} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR OFFERINGS ──────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2 text-balance">
                Our <span className="gradient-text">Programmes</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Coloured top bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${item.color}`} />
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-lg mb-1">{item.title}</h3>
                      <p className="text-[#1BA098] text-xs font-medium mb-3">{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-[#1BA098] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#3DC2B8] font-semibold text-sm uppercase tracking-widest">Featured</span>
              <h2 className="font-display font-bold text-[#1E3A3F] text-3xl sm:text-4xl lg:text-5xl mt-2 text-balance">
                Explore Our Flagship Programmes
              </h2>
            </div>
          </FadeIn>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselSlides.map((slide, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bg} p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 min-h-[340px]`}>
                    <div className="flex-1 text-center md:text-left">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/80 text-xs font-medium mb-4">
                        {slide.tag}
                      </span>
                      <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
                        {slide.title}
                      </h3>
                      <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-6">
                        {slide.subtitle}
                      </p>
                      <Link
                        href={slide.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-semibold text-sm transition-all duration-200"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                    {slide.logo && (
                      <div className="flex-shrink-0">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl glass-card flex items-center justify-center p-4">
                          <img
                            src={slide.logo}
                            alt={slide.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={() => {
                const idx = (current - 1 + carouselSlides.length) % carouselSlides.length
                setCurrent(idx)
                if (timer.current) clearInterval(timer.current)
                startTimer()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => {
                const idx = (current + 1) % carouselSlides.length
                setCurrent(idx)
                if (timer.current) clearInterval(timer.current)
                startTimer()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  if (timer.current) clearInterval(timer.current)
                  startTimer()
                }}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-7 h-2.5 bg-[#3DC2B8]' : 'w-2.5 h-2.5 bg-[#1E3A3F]/20 hover:bg-[#1E3A3F]/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────── */}
      <section className="relative py-16 partners-bg partners-sticky">
        {/* decorative circles removed per request */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-white/90 text-sm font-medium uppercase tracking-widest mb-10">
              Trusted Partners & Accreditations
            </p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture4-XlaWgT05Irl1s0WdejCjHHYCx9iUJg.png', alt: 'ELSA' },
              { src: '/images/DTVET%20LOGO-WHITE%20TM.png', alt: 'DTVET' },
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture2-RSL4fZMvOlIF6JFFoE1EvLkAtmuEAC.png', alt: 'ELSA App' },
              { src: '/images/ChatGPT Image May 25, 2026, 05_49_45 AM.png', alt: 'Custom Logo' },
            ].map((logo) => (
              <FadeIn key={logo.alt} direction="none">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.alt === 'Custom Logo' ? 'h-30' : 'h-12'} w-auto object-contain opacity-100`}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="py-20 bg-[#E4F2F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-[#1E3A3F] text-3xl sm:text-4xl lg:text-5xl mb-5 text-balance">
              Ready to transform your workforce?
            </h2>
            <p className="text-[#1E3A3F]/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Partner with Cedar Tech Training to build future-ready human capital for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B7A8F] text-white font-bold hover:bg-[#1BA098] transition-all duration-200 shadow-lg"
              >
                Contact Us Today <ArrowRight size={18} />
              </Link>
              <Link
                href="/change-management"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent text-[#1E3A3F] font-semibold border border-[#1E3A3F]/30 hover:bg-[#1E3A3F]/10 transition-all duration-200"
              >
                View Programmes
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
