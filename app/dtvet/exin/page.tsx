import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const exinHighlights = [
  'Align to PDPA Act 2024 - Data Protection Officer role',
  'AI Governance Ready',
  'Understand ethical and responsible AI implementation.',
  'Enterprise Focused',
]

const programLogos = [
  {
    src: '/images/exin/EXIN-Data-Analytics-Foundation-certified-badge.png',
    alt: 'EXIN Data Analytics Foundation',
  },
  {
    src: '/images/exin/EXIN-BCS-Artificial-Intelligence-Foundation-Badge-1024x1024.png',
    alt: 'EXIN Artificial Intelligence Foundation',
  },
  {
    src: '/images/exin/EXIN ARTIFICIAL INTELLIGENCE ESSENTIALS BADGE.png',
    alt: 'EXIN Artificial Intelligence Essentials',
  },
  {
    src: '/images/exin/EXIN AI COMPLIANCE OFFICER BADGE.png',
    alt: 'EXIN AI Compliance Officer',
  },
  {
    src: '/images/exin/EXIN MACHINE LEARNING AWARD BADGE.png',
    alt: 'EXIN Machine Learning Award',
  },
  {
    src: '/images/exin/EXIN GENERATIVE AI AWARD BADGE.png',
    alt: 'EXIN Generative AI Award',
  },
]

const exinMasterlist = [
  {
    category: 'Artificial Intelligence',
    programs: [
      {
        title: 'EXIN Data Analytics Foundation',
        logo: '/images/exin/EXIN-Data-Analytics-Foundation-certified-badge.png',
      },
      {
        title: 'EXIN Artificial Intelligence Foundation',
        logo: '/images/exin/EXIN-BCS-Artificial-Intelligence-Foundation-Badge-1024x1024.png',
      },
      {
        title: 'EXIN Artificial Intelligence Essentials',
        logo: '/images/exin/EXIN ARTIFICIAL INTELLIGENCE ESSENTIALS BADGE.png',
      },
      {
        title: 'EXIN AI Compliance Officer',
        logo: '/images/exin/EXIN AI COMPLIANCE OFFICER BADGE.png',
      },
      {
        title: 'EXIN Machine Learning Award',
        logo: '/images/exin/EXIN MACHINE LEARNING AWARD BADGE.png',
      },
      {
        title: 'EXIN Generative AI Award',
        logo: '/images/exin/EXIN GENERATIVE AI AWARD BADGE.png',
      },
    ],
  },
  {
    category: 'Project Management',
    programs: [
      {
        title: 'EXIN Dynamic Project Management Method (DPMM) Foundation',
        logo: '/images/exin/EXIN DYNAMIC PROJECT MANAGEMENT METHOD (DPMM) FOUNDATION BADGE.png',
      },
    ],
  },
  {
    category: 'Information Technology',
    programs: [
      {
        title: 'EXIN SIAM Professional',
        logo: '/images/exin/EXIN_Badge_ModuleProfessional_SIAM.png',
      },
      {
        title: 'EXIN IT Service Management ISO/IEC 20000 Foundation',
        logo: '/images/exin/EXIN_Badge_ModuleFoundation_ITServiceM_ISO.png',
      },
      {
        title: 'VeriSM Digital Transformation Professional',
        logo: '/images/exin/EXIN_Badge_ModuleProfessional_VeriSM-1024x1024.png',
      },
      {
        title: 'EXIN Privacy & Data Protection Professional',
        logo: '/images/exin/EXIN_Badge_ModuleProfessional_PDP.png',
      },
      {
        title: 'EXIN IT Information Security ISO/IEC 27001 Foundation',
        logo: '/images/exin/EXIN_Badge_ModuleFoundation_InformationSM_ISO.png',
      },
      {
        title: 'EXIN IT Information Security Management ISO/IEC 27001 Professional',
        logo: '/images/exin/EXIN_Badge_ModuleProfessional_InformationSM_ISO.png',
      },
    ],
  },
]

export default function ExinPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Digital Skills Partner"
        title="EXIN"
        description="Lead Digital Transformation with Confidence"
        breadcrumb={[
          { label: 'Digital Skills', href: '/dtvet' },
          { label: 'EXIN', href: '/dtvet/exin' },
        ]}
        logoSrc="/images/exin-logo-800X800.png.webp"
        logoAlt="EXIN logo"
      />

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            AI Governance, Data Protection, Security & Digital Transformation Certifications.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exinHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4FAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              Program <span className="text-[#1BA098]">Logos</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {programLogos.map((logo) => (
              <div key={logo.alt} className="bg-white rounded-xl border border-[#E4EFF0] shadow-sm p-3 flex items-center justify-center h-20">
                <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              EXIN Programme Masterlist
            </h2>
          </div>

          <div className="space-y-6">
            {exinMasterlist.map((group) => (
              <details key={group.category} className="group rounded-3xl border border-[#DCE6E6] bg-white shadow-[0_20px_40px_rgba(16,52,58,0.08)]">
                <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7B8B8F]">Category</p>
                    <p className="font-display font-bold text-foreground text-lg sm:text-xl">{group.category}</p>
                  </div>
                  <span className="h-9 w-9 rounded-full border border-[#E4EFF0] text-[#0B7A8F] flex items-center justify-center text-sm transition-transform group-open:rotate-180">˅</span>
                </summary>
                <div className="border-t border-[#E6EEF0] px-6 pb-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.programs.map((program) => (
                    <div key={program.title} className="rounded-2xl border border-[#E6EEF0] bg-[#F7FBFB] px-4 py-3 flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-white border border-[#DCE6E6] flex items-center justify-center">
                        <img src={program.logo} alt={program.title} className="max-h-8 w-auto object-contain" />
                      </div>
                      <p className="text-sm text-foreground font-medium">{program.title}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
