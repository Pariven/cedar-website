'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Code2, Network, Wifi, Shield, Database, ArrowRight, CheckCircle2 } from 'lucide-react'
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
    icon: Code2,
    title: 'Digital Literacy & Coding',
    desc: 'Foundational and advanced coding skills for the digital economy, covering web development, scripting, and application logic.',
    color: '#0B7A8F',
  },
  {
    icon: Network,
    title: 'Networking & Infrastructure',
    desc: 'Practical training in network configuration, management, and troubleshooting for modern IT environments.',
    color: '#1BA098',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Fundamentals',
    desc: 'Essential knowledge and hands-on skills to protect organisations from cyber threats in the digital age.',
    color: '#3DC2B8',
  },
  {
    icon: Database,
    title: 'Data Management & Analytics',
    desc: 'Skills in data collection, processing, analysis, and visualisation to support data-driven decision making.',
    color: '#7ED957',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Practical understanding of AI tools, automation frameworks, and how they transform workplace productivity.',
    color: '#A7D948',
  },
  {
    icon: Wifi,
    title: 'IoT & Smart Technologies',
    desc: 'Hands-on training with IoT devices, smart systems, and the technologies driving Industry 4.0 transformation.',
    color: '#0B7A8F',
  },
]

const highlights = [
  'Aligned with Malaysia\'s Digital Economy Blueprint',
  'Industry-led curriculum developed with technology partners',
  '100% HRDC claimable for eligible organisations',
  'Flexible delivery: physical, online, or blended',
  'Hands-on, practical skill-based learning',
  'Recognised certifications and credentials',
]

export default function DtvetPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Digital Skills"
        title="Future-ready digital skills for the "
        highlight="modern workforce"
        description="Digital Skills programmes bridge the gap between traditional technical and vocational education and the demands of the digital economy, equipping professionals with the certifications and competencies needed to thrive in Industry 4.0."
        breadcrumb={[{ label: 'Digital Skills', href: '/dtvet' }]}
        logoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-qkuOgkUwDz2Za40LH6U5vCQbFDDRru.png"
        logoAlt="Digital Skills Logo"
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">About Digital Skills</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                Industry-recognized <span className="gradient-text">digital certifications</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Cedar Tech Training is an authorized partner for globally recognized certification bodies including Certiport, Exin, and Pearson. We deliver comprehensive digital skills training leading to industry-recognized credentials that validate professional competencies across multiple technology domains.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                Our Digital Skills programmes are aligned with global industry standards and designed to equip professionals with practical skills that directly impact career advancement and organizational transformation.
              </p>
              <ul className="space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-[#1BA098] mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end">
                <img 
                  src="/images/dtvet-background.jpg" 
                  alt="Digital Skills Professional" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B7A8F] via-[#0B7A8F]/60 to-[#0B7A8F]/10"></div>
                <div className="relative z-10 p-8 sm:p-10 text-white">
                  <h3 className="font-display font-bold text-2xl mb-3">Industry-Aligned Competencies</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    Our partnerships with leading certification bodies ensure you receive training aligned with the latest global industry standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: 'Certiport', label: 'Authorized Testing' },
                      { value: 'Exin', label: 'Certifications' },
                      { value: 'Pearson', label: 'VUE Partner' },
                      { value: 'Industry-Led', label: 'Curriculum' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                        <p className="font-display font-bold text-sm tracking-wide">{s.value}</p>
                        <p className="text-white/70 text-[11px] mt-1 font-medium tracking-wider uppercase">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Programme Areas */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Core Training Areas</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                Digital skills and <span className="gradient-text">industry certifications</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group p-7 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${p.color}15` }}
                  >
                    <p.icon size={26} style={{ color: p.color }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
              Build industry-recognized digital competencies
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Partner with Cedar Tech Training to deliver digital certifications that advance your team's skills and career prospects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all shadow-lg"
            >
              Enquire About Digital Skills <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
