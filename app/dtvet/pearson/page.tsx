'use client'

import { useState } from 'react'
import { ChevronDown, Globe, Briefcase, BookOpen, BadgeCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const highlightCards = [
  {
    title: 'Globally Recognized',
    desc: 'Recognized by employers worldwide.',
    icon: Globe,
    color: '#1BA098',
    gradient: 'linear-gradient(135deg, #0B7A8F 0%, #1BA098 100%)',
  },
  {
    title: 'Industry-recognized',
    desc: 'Aligned to real-world digital job roles.',
    icon: Briefcase,
    color: '#3DC2B8',
    gradient: 'linear-gradient(135deg, #1BA098 0%, #3DC2B8 100%)',
  },
  {
    title: 'Flexible Learning',
    desc: 'Self-paced online learning with hands-on practice.',
    icon: BookOpen,
    color: '#7ED957',
    gradient: 'linear-gradient(135deg, #5aaa34 0%, #7ED957 100%)',
  },
  {
    title: '100% HRD Corp Claimable',
    desc: 'Suitable for workforce upskilling initiatives.',
    icon: BadgeCheck,
    color: '#A7D948',
    gradient: 'linear-gradient(135deg, #7aab28 0%, #A7D948 100%)',
  },
]

const certificationBodies = [
  { src: '/images/AWS.png', alt: 'AWS', imgClass: 'max-h-12 w-auto' },
  { src: '/images/Vmware-by-broadcom.svg.png', alt: 'VMware by Broadcom', imgClass: 'max-h-10 w-auto' },
  { src: '/images/comptia-logo-png_seeklogo-237177.png', alt: 'CompTIA', imgClass: 'max-h-20 w-auto' },
  { src: '/images/ISC2-Logo-350x350.png', alt: 'ISC2', imgClass: 'max-h-14 w-auto' },
  { src: '/images/ECC.png', alt: 'EC-Council', imgClass: 'max-h-10 w-auto' },
  { src: '/images/Cisco_Logo_no_TM_Sky_Blue-CMYK.png', alt: 'Cisco', imgClass: 'max-h-14 w-auto' },
  { src: '/images/Microsoft_White_Box.png', alt: 'Microsoft', imgClass: 'max-h-10 w-auto' },
  { src: '/images/IT-Specialist-Logo_PPT-Stacked.jpg', alt: 'IT Specialist', imgClass: 'max-h-14 w-auto' },
  { src: '/images/pmi_mb_logo_hrz_fc_rgb.png', alt: 'PMI', imgClass: 'max-h-12 w-auto' },
]

const courseSections = [
  {
    title: 'Cloud & Infrastructure',
    groups: [
      {
        name: 'AWS',
        logoSrc: '/images/AWS.png',
        courses: [
          'AWS Certified Cloud Practitioner (CLF-C02)',
          'AWS Certified Developer - Associate (DVA-C01)',
          'AWS Certified Solutions Architect - Associate (SAA-C03)',
          'AWS Certified SysOps Administrator (SOA-C02)',
        ],
      },
      {
        name: 'VMWARE',
        logoSrc: '/images/Vmware-by-broadcom.svg.png',
        courses: ['VMware vSphere 8.x Professional (2V0-21.23)'],
      },
    ],
  },
  {
    title: 'Cybersecurity',
    groups: [
      {
        name: 'COMPTIA',
        logoSrc: '/images/comptia-logo-png_seeklogo-237177.png',
        courses: [
          'CompTIA A+ Core 1 (220-1101)',
          'CompTIA A+ Core 2 (220-1102)',
          'CompTIA CASP+ (CAS-004)',
          'CompTIA Cloud+ (CV0-003)',
          'CompTIA CYSA+ (CS0-003)',
          'CompTIA Linux+ (XK0-005)',
          'CompTIA Network+ (N10-009)',
          'CompTIA PenTest+ (PT0-002)',
          'CompTIA Security+ (SY0-701)',
          'CompTIA IT Fundamentals (FC0-U61)',
        ],
      },
      {
        name: 'ISC2',
        logoSrc: '/images/ISC2-Logo-350x350.png',
        courses: ['ISC2 Certified Information Systems Security Professional (CISSP)'],
      },
      {
        name: 'EC-COUNCIL',
        logoSrc: '/images/ECC.png',
        courses: ['EC-Council Certified Ethical Hacker CEH (312-50)'],
      },
      {
        name: 'CISCO',
        logoSrc: '/images/Cisco_Logo_no_TM_Sky_Blue-CMYK.png',
        courses: [
          'Cisco CCNP and CCIE Enterprise Core ENCOR (350-401 v1.1)',
          'Cisco Certified Cisco Network Associate CCNA (200-301)',
          'Cisco Certified Support Technician Cybersecurity CCST (100-160)',
          'Cisco Certified Support Technician Networking CCST (100-150)',
          'Cisco Implementing and Operating Security Core Technologies SCOR (350-701 v1.1)',
        ],
      },
    ],
  },
  {
    title: 'Microsoft Certifications',
    groups: [
      {
        name: 'Fundamentals',
        logoSrc: '/images/Microsoft_White_Box.png',
        courses: [
          'Microsoft Azure Fundamentals (AZ-900)',
          'Microsoft Azure AI Fundamentals (AI-900)',
          'Microsoft Azure Data Fundamentals (DP-900)',
          'Microsoft Power Platform Fundamentals (PL-900)',
        ],
      },
      {
        name: 'Associate Level',
        logoSrc: '/images/Microsoft_White_Box.png',
        courses: [
          'Microsoft Azure Administrator (AZ-104)',
          'Microsoft Designing and Implementing Azure Networking Solutions (AZ-700)',
          'Microsoft Designing and Implementing DevOps Solutions (AZ-400)',
          'Microsoft Power BI Analyst (PL-300)',
        ],
      },
      {
        name: 'Microsoft Copilot',
        logoSrc: '/images/Microsoft_White_Box.png',
        courses: [
          'Copilot for Marketing Specialists',
          'Copilot for Human Resources Specialist',
          'Copilot for Sales Representatives and Account Managers',
          'Copilot for Data Analysts',
        ],
      },
    ],
  },
  {
    title: 'Programming & IT Specialist',
    groups: [
      {
        name: 'IT SPECIALIST',
        logoSrc: '/images/IT-Specialist-Logo_PPT-Stacked.jpg',
        courses: [
          'IT Specialist Artificial Intelligence (INF-307)',
          'IT Specialist Cloud Computing (INF-104)',
          'IT Specialist Cybersecurity (INF-105)',
          'IT Specialist Data Analytics (INF-202)',
          'IT Specialist Java (INF-304)',
          'IT Specialist Javascript (INF-302)',
          'IT Specialist Python (INF-303)',
        ],
      },
    ],
  },
  {
    title: 'Project Management',
    groups: [
      {
        name: 'PMI',
        logoSrc: '/images/pmi_mb_logo_hrz_fc_rgb.png',
        courses: [
          'PMI Certified Associate in Project Management (CAPM)',
          'PMI Project Management Professional (PMP)',
        ],
      },
    ],
  },
]

// Smooth animated accordion item
function AccordionItem({ section }: { section: typeof courseSections[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-3xl border bg-white shadow-[0_8px_32px_rgba(16,52,58,0.08)] overflow-hidden transition-all duration-300 ${
        open ? 'border-[#1BA098]/40' : 'border-[#DCE6E6]'
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
              open ? 'bg-[#1BA098] text-white' : 'bg-[#0B7A8F]/10 text-[#0B7A8F]'
            }`}
          >
            {section.title[0]}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7B8B8F]">Category</p>
            <p className="font-display font-bold text-foreground text-lg sm:text-xl">{section.title}</p>
          </div>
        </div>

        {/* Animated chevron icon */}
        <span
          className={`h-9 w-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? 'border-[#1BA098] bg-[#1BA098] text-white rotate-180'
              : 'border-[#E4EFF0] bg-transparent text-[#0B7A8F] rotate-0'
          }`}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
      </button>

      {/* Smooth animated content */}
      <div
        style={{
          maxHeight: open ? '2000px' : '0px',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <div className="border-t border-[#E6EEF0] px-6 pb-6 pt-4 space-y-5">
          {section.groups.map((group) => (
            <div
              key={group.name}
              className="rounded-2xl border border-[#E6EEF0] bg-[#F7FBFB] px-5 py-4"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-14 w-14 rounded-xl bg-white border border-[#DCE6E6] flex items-center justify-center flex-shrink-0 p-1.5">
                  {group.logoSrc ? (
                    <img
                      src={group.logoSrc}
                      alt={`${group.name} logo`}
                      className="max-h-10 max-w-[48px] w-auto object-contain"
                    />
                  ) : (
                    <span className="font-bold text-[#0B7A8F] text-lg">{group.name[0]}</span>
                  )}
                </span>
                <p className="font-semibold text-foreground text-base">{group.name}</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-xl border border-[#E6EEF0] bg-white px-4 py-2 text-sm text-foreground shadow-sm"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PearsonPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Digital Skills Partner"
        title="Pearson"
        description="Pearson VUE delivers secure computer-based testing and certification programs trusted worldwide."
        breadcrumb={[
          { label: 'Digital Skills', href: '/dtvet' },
          { label: 'Pearson', href: '/dtvet/pearson' },
        ]}
        logoSrc="/images/image.png"
        logoAlt="Pearson logo"
      />

      {/* Future-Ready Professional Certifications — Bento Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10">
            <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Pearson VUE</span>
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2 text-balance">
              Future-Ready <span className="text-[#1BA098]">Professional</span> Certifications
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 — Large, spans 2 rows */}
            <div
              className="lg:row-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0B7A8F 0%, #1BA098 100%)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Globe size={28} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-xl mb-2">{highlightCards[0].title}</p>
                <p className="text-white/75 text-sm leading-relaxed">{highlightCards[0].desc}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #3DC2B8 0%, #56d4ca 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Briefcase size={22} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg mb-1">{highlightCards[1].title}</p>
                <p className="text-white/75 text-sm leading-relaxed">{highlightCards[1].desc}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #5aaa34 0%, #7ED957 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <BookOpen size={22} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg mb-1">{highlightCards[2].title}</p>
                <p className="text-white/75 text-sm leading-relaxed">{highlightCards[2].desc}</p>
              </div>
            </div>

            {/* Card 4 — Wide, spans 2 cols */}
            <div
              className="sm:col-span-2 lg:col-span-2 rounded-3xl p-7 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #7aab28 0%, #A7D948 100%)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <BadgeCheck size={28} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-xl mb-1">{highlightCards[3].title}</p>
                <p className="text-white/75 text-sm leading-relaxed">{highlightCards[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F4FAFA] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              Certification <span className="text-[#1BA098]">Bodies</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Globally recognized certifications from leading technology brands.
            </p>
          </div>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative w-full">
          <style>{`
            @keyframes scroll-logos {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logos-track {
              animation: scroll-logos 22s linear infinite;
            }
            .logos-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex overflow-hidden">
            <div className="logos-track flex gap-12 w-max items-center">
              {[...certificationBodies, ...certificationBodies].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-20 max-w-[160px] w-auto flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              List of <span className="text-[#F5B63A]">Courses</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Choose the certification track that matches your digital career goals.
            </p>
          </div>

          <div className="space-y-4">
            {courseSections.map((section) => (
              <AccordionItem key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
