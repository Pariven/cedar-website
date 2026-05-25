import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const highlightCards = [
  {
    title: 'Globally Recognised',
    desc: 'Recognised by employers worldwide.',
  },
  {
    title: 'Industry-recognised',
    desc: 'Aligned to real-world digital job roles.',
  },
  {
    title: 'Flexible Learning',
    desc: 'Self-paced online learning with hands-on practice.',
  },
  {
    title: '100% HRD Corp Claimable',
    desc: 'Suitable for workforce upskilling initiatives.',
  },
]

const certificationBodies = [
  { src: '/images/image.png', alt: 'Pearson' },
  { src: '/images/AWS.png', alt: 'AWS Training and Certification' },
  { src: '/images/Vmware-by-broadcom.svg.png', alt: 'VMware by Broadcom' },
  { src: '/images/comptia-logo-png_seeklogo-237177.png', alt: 'CompTIA' },
  { src: '/images/ISC2-Logo-350x350.png', alt: 'ISC2' },
  { src: '/images/ECC.png', alt: 'EC-Council' },
  { src: '/images/Cisco_Logo_no_TM_Sky_Blue-CMYK.png', alt: 'Cisco' },
  { src: '/images/Microsoft_White_Box.png', alt: 'Microsoft' },
  { src: '/images/IT-Specialist-Logo_PPT-Stacked.jpg', alt: 'Information Technology Specialist' },
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

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
              Future-Ready <span className="text-[#F5B63A]">Professional</span> Certifications
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Industry-recognised programs designed for real-world digital job roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm"
              >
                <p className="font-semibold text-foreground text-sm">{card.title}</p>
                <p className="text-muted-foreground text-xs mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certificationBodies.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-xl border border-[#E4EFF0] shadow-sm px-4 py-3 flex items-center justify-center h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
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

          <div className="space-y-6">
            {courseSections.map((section) => (
              <details
                key={section.title}
                className="course-accordion group rounded-3xl border border-[#DCE6E6] bg-white shadow-[0_20px_40px_rgba(16,52,58,0.08)]"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5">
                  <div className="flex items-center gap-4">
                    <span className="h-12 w-12 rounded-2xl bg-[#0B7A8F]/10 text-[#0B7A8F] flex items-center justify-center font-bold text-lg">
                      {section.title[0]}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#7B8B8F]">Category</p>
                      <p className="font-display font-bold text-foreground text-lg sm:text-xl">
                        {section.title}
                      </p>
                    </div>
                  </div>
                  <span className="h-9 w-9 rounded-full border border-[#E4EFF0] text-[#0B7A8F] flex items-center justify-center text-sm transition-transform group-open:rotate-180">
                    ˅
                  </span>
                </summary>

                <div className="course-accordion-content border-t border-[#E6EEF0] px-6 pb-6 pt-4 space-y-5">
                  {section.groups.map((group) => (
                    <div
                      key={group.name}
                      className="rounded-2xl border border-[#E6EEF0] bg-[#F7FBFB] px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 rounded-xl bg-white text-[#0B7A8F] border border-[#DCE6E6] flex items-center justify-center font-bold">
                          {group.logoSrc ? (
                            <img
                              src={group.logoSrc}
                              alt={`${group.name} logo`}
                              className="max-h-7 w-auto object-contain"
                            />
                          ) : (
                            group.name[0]
                          )}
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[#7B8B8F]">Track</p>
                          <p className="font-semibold text-foreground">{group.name}</p>
                        </div>
                      </div>

                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
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
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
