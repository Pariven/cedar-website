import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  tag?: string
  title: string
  highlight?: string
  description: string
  breadcrumb?: { label: string; href: string }[]
  logoSrc?: string
  logoAlt?: string
  logoClassName?: string
  imageSrc?: string
  imageAlt?: string
  waveColor?: string
}

export default function PageHero({
  tag,
  title,
  highlight,
  description,
  breadcrumb,
  logoSrc,
  logoAlt,
  logoClassName,
  imageSrc,
  imageAlt,
  waveColor = '#F8FAFA',
}: PageHeroProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <section className="relative pt-28 pb-20 gradient-teal overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-[#7ED957]/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight size={14} />
                <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
              </span>
            ))}
          </nav>
        )}

        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${!imageSrc && !logoSrc ? 'justify-center text-center' : ''}`}>
          <div className={`flex-1 text-center ${!imageSrc && !logoSrc ? '' : 'md:text-left'} ${!imageSrc && logoSrc ? 'md:max-w-[60%]' : ''}`}>
            {tag && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-4 border border-white/20">
                {tag}
              </span>
            )}
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-balance leading-tight">
              {highlight ? (
                <>
                  {parts[0]}
                  <span className="text-[#7ED957]">{highlight}</span>
                  {parts[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className={`text-white/80 text-lg mt-5 leading-relaxed ${!imageSrc && !logoSrc ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
              {description}
            </p>
          </div>
          {logoSrc && (
            <div className={`flex-shrink-0 ${!imageSrc ? 'w-full md:flex-1 flex justify-center md:justify-end' : ''}`}>
              <div className={`rounded-3xl glass-card flex items-center justify-center p-6 md:p-8 ${!imageSrc ? 'w-full max-w-[320px] sm:max-w-sm aspect-video md:aspect-[4/3] shadow-2xl ring-1 ring-white/10' : 'w-40 h-40 md:w-48 md:h-48'}`}>
                <img src={logoSrc} alt={logoAlt ?? ''} className={`object-contain drop-shadow-lg transition-transform duration-300 ${logoClassName || ''}`} style={{height: '220px', width: 'auto'}} />
              </div>
            </div>
          )}
          {imageSrc && (
            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-[450px]">
              <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src={imageSrc} alt={imageAlt ?? ''} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 36C840 44 960 52 1080 48C1200 44 1320 28 1380 20L1440 12V60H0Z" fill={waveColor} />
        </svg>
      </div>
    </section>
  )
}
