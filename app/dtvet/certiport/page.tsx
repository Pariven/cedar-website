import Link from 'next/link'
import { ArrowRight, BadgeCheck, CheckCircle2, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const programGroups = [
  {
    body: 'Critical Career Skills',
    logo: '/images/critical-career-skills-logo.png',
    programs: ['Generative AI Foundations'],
  },
  {
    body: 'Microsoft',
    logo: '/images/Microsoft_White_Box.png',
    programs: [
      'Azure AI Fundamentals (AI-900)',
      'Azure Fundamentals (AZ-900)',
      'Azure Data Fundamentals (DP-900)',
      'Power Platform Fundamentals (PL-900)',
    ],
  },
  {
    body: 'Adobe',
    logo: '/images/Exin/Picture2.png',
    programs: ['Illustrator', 'Photoshop'],
  },
  {
    body: 'Cisco',
    logo: '/images/Cisco_Logo_no_TM_Sky_Blue-CMYK.png',
    programs: ['Cybersecurity'],
  },
  {
    body: 'Information Technology',
    logo: '/images/IT-Specialist-Logo_PPT-Stacked.jpg',
    programs: ['Cybersecurity', 'Network Security', 'Python', 'Cloud Computing', 'Data Analytics', 'Artificial Intelligence'],
  },
  {
    body: 'Autodesk',
    logo: '/images/Autodesk-logo-rgb-black.png',
    programs: ['AutoCAD'],
  },
  {
    body: 'WordPress',
    logo: '/images/WORDPRESS.png',
    programs: ['WP Certified Developer', 'WP Certified Administrator'],
  },
  {
    body: 'Meta',
    logo: '/images/META.png',
    programs: ['Associate Certification'],
  },
  {
    body: 'Medical Administrative Assistant',
    logo: '/images/health-sciences-careers-cert-logo.png',
    programs: ['Medical Administrative Assistant Certification'],
  },
]

const certiportHighlights = [
  'Certiport, a Pearson VUE business, delivers credentials that validate digital skills and professional competencies.',
  'Cedar Tech Training is a Certiport Authorized Testing Centre.',
  'Performance-based certifications aligned to global and industry standards.',
]

const certificationBodies = [
  { src: '/images/critical-career-skills-logo.png', alt: 'Critical Career Skills' },
  { src: '/images/Microsoft_White_Box.png', alt: 'Microsoft' },
  { src: '/images/Exin/Picture2.png', alt: 'Adobe' },
  { src: '/images/Cisco_Logo_no_TM_Sky_Blue-CMYK.png', alt: 'Cisco' },
  { src: '/images/IT-Specialist-Logo_PPT-Stacked.jpg', alt: 'Information Technology Specialist' },
  { src: '/images/Autodesk-logo-rgb-black.png', alt: 'Autodesk' },
  { src: '/images/WORDPRESS.png', alt: 'WordPress' },
  { src: '/images/META.png', alt: 'Meta' },
  { src: '/images/health-sciences-careers-cert-logo.png', alt: 'Medical Administrative Assistant' },
]

export default function CertiportPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Digital Skills Partner"
        title="Certiport"
        description="Industry-recognized certifications that validate practical digital skills and job-ready competencies."
        breadcrumb={[
          { label: 'Digital Skills', href: '/dtvet' },
          { label: 'Certiport', href: '/dtvet/certiport' },
        ]}
        logoSrc="/images/certiport.png"
        logoAlt="Certiport logo"
        logoClassName="scale-[1.8]"
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Overview</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-3 mb-5 text-balance">
                Certiport and Pearson VUE certifications
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Certiport, a Pearson VUE business, delivers credentials that validate digital skills and professional competencies
                through partnerships with globally and industry recognized certification bodies.
              </p>
              <ul className="space-y-3">
                {certiportHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-[#1BA098] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-[#1BA098]/30 bg-[#0B7A8F]/10 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#1BA098]/60 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck size={20} className="text-[#1BA098]" />
                  <p className="text-sm font-semibold text-[#1BA098] uppercase tracking-widest">Authorized Testing Centre</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cedar Tech Training is an authorized Certiport testing centre, providing exam delivery, preparation support, and
                  trusted proctoring.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#1BA098]/40 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <Globe size={20} className="text-[#1BA098]" />
                  <p className="text-sm font-semibold text-foreground">Why Certiport</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="rounded-xl bg-muted/60 p-3">Global certification standards</div>
                  <div className="rounded-xl bg-muted/60 p-3">Performance-based assessments</div>
                  <div className="rounded-xl bg-muted/60 p-3">Job-ready digital skills</div>
                  <div className="rounded-xl bg-muted/60 p-3">Employer-recognized credentials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Bodies Logos */}
      <section className="py-16 bg-[#F4FAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              Certification <span className="text-[#1BA098]">Bodies</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Globally recognised certifications from leading technology brands.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {certificationBodies.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-xl border border-[#E4EFF0] shadow-sm px-4 py-4 flex items-center justify-center h-24 hover:-translate-y-1 hover:shadow-lg hover:border-[#1BA098]/40 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Bodies & Programme Titles */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Certification Bodies</span>
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-3 text-balance">
              Certification bodies and programme titles
            </h2>
          </div>

          <div className="space-y-4">
            {programGroups.map((group) => (
              <div
                key={group.body}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col lg:flex-row lg:items-start gap-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#1BA098]/40 transition-all duration-300 cursor-default"
              >
                {/* Logo + Body Name */}
                <div className="flex items-center gap-4 lg:w-[260px] lg:min-w-[260px]">
                  <div className="h-14 w-14 rounded-xl border border-border bg-white flex items-center justify-center p-1 flex-shrink-0 shadow-sm">
                    <img
                      src={group.logo}
                      alt={group.body}
                      className="max-h-12 max-w-[48px] w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Certification Body</p>
                    <p className="font-semibold text-foreground text-base leading-tight mt-0.5">{group.body}</p>
                  </div>
                </div>

                {/* Programme Titles */}
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Programme Title</p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.programs.map((program) => (
                      <div
                        key={program}
                        className="rounded-lg border border-border/80 bg-muted/60 px-3 py-2 text-sm text-foreground"
                      >
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
