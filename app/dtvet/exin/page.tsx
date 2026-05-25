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
    src: '/images/Exin/EXIN-Data-Analytics-Foundation-certified-badge.png',
    alt: 'EXIN Data Analytics Foundation',
    label: 'Data Analytics Foundation',
  },
  {
    src: '/images/Exin/EXIN-BCS-Artificial-Intelligence-Foundation-Badge-1024x1024.png',
    alt: 'EXIN Artificial Intelligence Foundation',
    label: 'Artificial Intelligence Foundation',
  },
  {
    src: '/images/Exin/EXIN ARTIFICIAL INTELLIGENCE ESSENTIALS BADGE.png',
    alt: 'EXIN Artificial Intelligence Essentials',
    label: 'Artificial Intelligence Essentials',
  },
  {
    src: '/images/Exin/EXIN AI COMPLIANCE OFFICER BADGE.png',
    alt: 'EXIN AI Compliance Officer',
    label: 'AI Compliance Officer',
  },
  {
    src: '/images/Exin/EXIN MACHINE LEARNING AWARD BADGE.png',
    alt: 'EXIN Machine Learning Award',
    label: 'Machine Learning Award',
  },
  {
    src: '/images/Exin/EXIN GENERATIVE AI AWARD BADGE.png',
    alt: 'EXIN Generative AI Award',
    label: 'Generative AI Award',
  },
  {
    src: '/images/Exin/EXIN DYNAMIC PROJECT MANAGEMENT METHOD (DPMM) FOUNDATION BADGE.png',
    alt: 'EXIN DPMM Foundation',
    label: 'DPMM Foundation',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleProfessional_SIAM.png',
    alt: 'EXIN SIAM Professional',
    label: 'SIAM Professional',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleFoundation_ITServiceM_ISO.png',
    alt: 'EXIN IT Service Management Foundation',
    label: 'IT Service Management Foundation',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleProfessional_VeriSM-1024x1024.png',
    alt: 'VeriSM Digital Transformation Professional',
    label: 'VeriSM Professional',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleProfessional_PDP.png',
    alt: 'EXIN Privacy & Data Protection Professional',
    label: 'Privacy & Data Protection Professional',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleFoundation_InformationSM_ISO.png',
    alt: 'EXIN Information Security Foundation',
    label: 'Information Security Foundation',
  },
  {
    src: '/images/Exin/EXIN_Badge_ModuleProfessional_InformationSM_ISO.png',
    alt: 'EXIN Information Security Management Professional',
    label: 'Information Security Management Professional',
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

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] lg:h-[500px]">
              <img
                src="/images/exin-team.png"
                alt="EXIN Professional Training Team"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B7A8F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">Trusted by professionals</p>
                <p className="font-display font-bold text-xl leading-snug">
                  AI Governance &amp; Digital Transformation Certifications
                </p>
              </div>
            </div>

            {/* Right — Text + Highlights */}
            <div>
              <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">About EXIN</span>
              <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-3 mb-4 text-balance">
                Lead Digital Transformation{' '}
                <span className="text-[#1BA098]">with Confidence</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                AI Governance, Data Protection, Security &amp; Digital Transformation Certifications — equipping professionals with the credentials to lead in the modern digital economy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exinHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#1BA098]/20 bg-[#0B7A8F]/5 px-5 py-4 text-sm text-foreground font-medium hover:border-[#1BA098]/50 hover:bg-[#0B7A8F]/10 transition-colors"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1BA098] mr-2 mb-0.5 align-middle" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* All Programme Logos */}
      <section className="py-16 bg-[#F4FAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#1BA098] font-semibold text-sm uppercase tracking-widest">Certifications</span>
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mt-2">
              Programme <span className="text-[#1BA098]">Logos</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Globally recognised EXIN certification badges.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {programLogos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-2xl border border-[#E4EFF0] shadow-sm p-4 flex flex-col items-center justify-center gap-3 text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#1BA098]/40 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-20 object-contain"
                />
                <p className="text-xs text-muted-foreground font-medium leading-snug">{logo.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
