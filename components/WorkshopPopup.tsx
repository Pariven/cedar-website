'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const REGISTER_URL = 'https://forms.gle/99YJck2Z6Bv7qR2x9'
const DISMISS_KEY = 'workshopPopupDismissed'

export default function WorkshopPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(DISMISS_KEY)) return

    const timer = setTimeout(() => setOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setOpen(false)
    sessionStorage.setItem(DISMISS_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Neuroscience for Change Workshop announcement"
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-[#0f2b28]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <img
              src="/images/neuroscience-workshop-popup.jpg"
              alt="Neuroscience for Change Workshop - 22 July 2026, 2:00PM - 3:00PM, with Melanie Franklin"
              className="w-full h-auto block"
            />

            <div className="p-5 sm:p-6 bg-[#0f2b28] flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#7ED957] hover:bg-[#A7D948] text-[#1E3A3F] font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
