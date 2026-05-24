'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Star, Target, Users, Lightbulb, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
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

const modules = [
  {
    icon: Target,
    title: 'Managerial Confidence & Role Clarity',
    desc: 'Enhance managers\' confidence and deepen their understanding of their responsibilities within the organisation.',
    color: '#0B7A8F',
  },
  {
    icon: Heart,
    title: 'Positive Psychology & Mental Wellness',
    desc: 'Strong emphasis on building psychological resilience, mental wellness, and a positive growth mindset for sustainable leadership.',
    color: '#1BA098',
  },
  {
    icon: Users,
    title: 'Team Building & Collaboration',
    desc: 'Practical tools and frameworks for building high-performing, cohesive teams that collaborate effectively across functions.',
    color: '#3DC2B8',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solving',
    desc: 'Equip leaders with creative thinking methodologies and problem-solving frameworks for complex organisational challenges.',
    color: '#7ED957',
  },
  {
    icon: Star,
    title: 'Effective Communication',
    desc: 'Develop impactful communication skills including active listening, constructive feedback, and influencing without authority.',
    color: '#A7D948',
  },
  {
    icon: Shield,
    title: 'Conflict Resolution & Resilience',
    desc: 'Build capacity to handle workplace conflict constructively and lead teams through adversity with strength and composure.',
    color: '#0B7A8F',
  },
]

const outcomes = [
  'Greater confidence in leadership roles and decision-making',
  'Improved team engagement and psychological safety',
  'Stronger communication across all levels of the organisation',
  'Enhanced mental wellness and stress management capabilities',
  'Practical tools for performance conversations and feedback',
  'A positive, growth-oriented leadership culture',
]

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Leadership & Soft Skills"
        title="Building leaders who inspire, "
        highlight="engage, and grow"
        description="Fully customisable, industry-proven programmes that enhance managerial confidence, deepen leadership understanding, and build the human skills that drive organisational excellence."
        breadcrumb={[{ label: 'Leadership & Soft Skills', href: '/leadership' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Programme Overview</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 mb-5 text-balance">
                Leadership <span className="gradient-text">Development for the Modern Workplace</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                The primary objective of this leadership and soft skills programme is to enhance managers' confidence, deepen their understanding of managerial responsibilities, and equip them with the skills to perform effectively in their roles. The programme places strong emphasis on positive psychology and mental wellness to support sustainable leadership development.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                Our programmes are fully customizable to meet specific client requirements and have been successfully delivered to organizations across various industries. Whether your focus is developing emerging managers or building executive capability, we tailor solutions to match your organization's culture and strategic priorities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1BA098] hover:bg-[#0B7A8F] text-white font-semibold transition-colors shadow-lg"
              >
                Customise for Your Team <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end">
                <img 
                  src="/images/leadership-background.jpg" 
                  alt="Leadership Coaching" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1BA098] via-[#1BA098]/80 to-transparent"></div>
                <div className="relative z-10 p-8 sm:p-10 text-white">
                  <h3 className="font-display font-bold text-2xl mb-4">Key Programme Outcomes</h3>
                  <ul className="space-y-3.5">
                    {outcomes.slice(0, 4).map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-white/95 font-medium">
                        <CheckCircle2 size={18} className="text-[#7ED957] mt-0.5 flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Programme Modules */}
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Programme Areas</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
                Core leadership <span className="gradient-text">competencies</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <div className="group p-7 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${m.color}15` }}
                  >
                    <m.icon size={26} style={{ color: m.color }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Positive Psychology Banner */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl bg-card border border-border p-10 md:p-14 text-center">
              <Heart size={48} className="text-[#1BA098] mx-auto mb-5" />
              <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4 text-balance">
                Rooted in Positive Psychology & Mental Wellness
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-7">
                Unlike traditional management training, our programmes integrate evidence-based positive psychology principles and mental wellness practices to build leaders who can sustain high performance while maintaining personal wellbeing and creating psychologically safe team environments.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Strengths-Based', 'Resilience Building', 'Mindful Leadership', 'Emotional Intelligence', 'Wellbeing at Work'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-muted border border-border text-foreground text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4 text-balance">
              Invest in your people&apos;s leadership potential
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Our Leadership and Soft Skills programmes are fully customisable to your organisation&apos;s context and industry. Reach out to discuss a tailored solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold transition-all shadow-lg"
            >
              Discuss Your Needs <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
