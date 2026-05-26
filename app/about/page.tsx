'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Heart, ArrowRight } from 'lucide-react'
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const values = [
  { icon: Target, title: 'Purpose-Driven', desc: 'Every programme we deliver is aligned to a clear purpose: building human capital that drives organisational and societal progress.', color: '#0B7A8F' },
  { icon: Eye, title: 'Future-Focused', desc: 'We continuously anticipate industry trends to ensure our programmes are always relevant, practical, and forward-looking.', color: '#1BA098' },
  { icon: Heart, title: 'Human-Centred', desc: 'We believe that technology and innovation must be grounded in human values, empathy, and a genuine commitment to growth.', color: '#3DC2B8' },
]

const partners = [
  {
    src: '/images/b368ae98-7f90-4b23-abbf-940b2aaab4c3.png',
    logo: '/images/ChatGPT Image May 25, 2026, 05_49_45 AM.png',
    title: 'OIPD - Oxbridge Institute of Professional Development',
    desc: 'International accreditation partner providing globally recognised credentials for our leadership and management programmes.',
  },
  {
    // Use the uploaded image file for Changeability background
    src: '/images/a508e2b5-b525-474a-b527-7b7411522903.png',
    logo: '/ChangeabilityPro.png',
    title: 'ChangeabilityPro',
    desc: 'Partner for change capability and organisational development solutions.',
  },
  {
    src: '/images/e048bf18-f47b-4b92-b73c-039ffde322d8.png',
    logo: '/images/elsa-logo.png',
    title: 'ELSA',
    desc: 'Technology partner for AI-powered English communication training, deployed across organisations in Malaysia and the region.',
  },
  {
    src: '/images/439cc4d8-83b3-46bd-999c-4c3ba2dc517b.png',
    // Prefer explicit white logo filename if present, otherwise fallback to the image itself
    logo: '/images/DTVET%20LOGO-WHITE%20TM.png',
    logoFallback: '/images/439cc4d8-83b3-46bd-999c-4c3ba2dc517b.png',
    title: 'DTVET',
    desc: 'Digital TVET platform partner enabling industry-aligned technical and vocational digital skills development at scale.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="About Cedar Tech Training"
        title="Building human capital for a "
        highlight="future-ready Malaysia"
        description="Cedar Tech Training is a premier training provider dedicated to growing people through open, innovative learning that bridges the gap between today's skills and tomorrow's demands."
        breadcrumb={[{ label: 'About Us', href: '/about' }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                A training partner committed to <span className="gradient-text">meaningful growth</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Cedar Tech Training was founded with a clear mission: to enable working adults to grow confidently by combining human leadership capability with future-ready technical and technological skills.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                We serve organisations across Malaysia and the region, delivering programmes that are practical, industry-aligned, and grounded in the latest learning science. Our team of certified trainers and subject matter experts brings deep real-world experience to every engagement.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Whether working with a small team or an enterprise organisation, we customise our approach to deliver meaningful, measurable results.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 gap-5">
                <div className="rounded-2xl bg-gradient-to-br from-[#0B7A8F] to-[#1BA098] p-7 text-white">
                  <Target size={32} className="mb-3 text-[#7ED957]" />
                  <h3 className="font-display font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    To build and elevate human capital development in our region by aligning industry needs with future trends through innovative, accessible, and impactful training programmes.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg p-7 text-white min-h-[250px] flex flex-col justify-end">
                  <img src="/images/about-vision-background.jpg" alt="Inclusive Learning" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A3F] via-[#1E3A3F]/90 to-transparent" />
                  <div className="relative z-10">
                    <Eye size={28} className="mb-2 text-[#3DC2B8]" />
                    <h3 className="font-display font-bold text-xl mb-2">Our Vision</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      To be the leading training provider in Southeast Asia, empowering individuals and organisations to confidently navigate change and embrace the opportunities of the digital future.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Values */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Our Values</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                What drives everything we do
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${v.color}15` }}
                  >
                    <v.icon size={28} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Partners */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Our Partners</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                Trusted global and local partnerships
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {partners.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="relative rounded-2xl overflow-hidden w-full h-full min-h-[360px] shadow-sm hover:shadow-2xl will-change-transform transform-gpu transition-transform duration-400 ease-out hover:-translate-y-2 hover:scale-105">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url('${p.src}')` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content inside the card */}
                    <div className="relative z-30 p-8 h-full flex flex-col justify-start items-center text-center text-white">
                      {/* Fixed height logo container for perfect alignment */}
                      <div className="h-48 w-full flex items-center justify-center mb-4 mt-2">
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={`${p.title} logo`}
                            className={`object-contain ${p.title.startsWith('OIPD') ? 'w-48 h-48' : p.title === 'ChangeabilityPro' ? 'w-40 h-40' : 'w-32 h-32'}`}
                            onError={(e) => {
                              const el = e.target as HTMLImageElement
                              if (p.logoFallback) el.src = p.logoFallback
                            }}
                          />
                        )}
                      </div>
                      <p className="text-sm max-w-prose leading-relaxed flex-grow flex items-start">{p.desc}</p>
                    </div>
                  </div>
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
              Partner with Cedar Tech Training
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you need a single workshop or a comprehensive L&D strategy, we&apos;re here to help you build a future-ready workforce.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
