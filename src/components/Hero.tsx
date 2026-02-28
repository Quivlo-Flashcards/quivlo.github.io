import { useEffect, useState } from 'react'
import { APP_STORE_URL } from '../config'
import { heroCarouselCards, type HeroFlashcard } from '../data/heroCarousel'

const base = import.meta.env.BASE_URL
const logoPath = `${base}AppIcon-1024.png`
const CAROUSEL_INTERVAL_MS = 7000

function HeroCardContent({ card }: { card: HeroFlashcard }) {
  return (
    <article className="h-full flex flex-col text-left min-h-0">
      <div className="flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 w-4 h-px bg-slate-400 dark:bg-slate-500" aria-hidden />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-600">
            What I learned
          </span>
          <button type="button" className="shrink-0 p-1 text-slate-400 dark:text-slate-500 hover:text-slate-300 dark:hover:text-slate-700" aria-label="Menu">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <button type="button" className="shrink-0 p-1 text-slate-400 dark:text-slate-500 hover:text-slate-300 dark:hover:text-slate-700" aria-label="Remove">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      <div className="mt-4 sm:mt-5 flex-1 min-h-0 flex flex-col justify-start overflow-y-auto">
        <p className="font-serif text-base sm:text-lg font-bold text-white dark:text-slate-900 leading-relaxed">
          {card.definition}
        </p>
        <p className="mt-3 font-serif text-base sm:text-lg font-extrabold text-white dark:text-slate-900 bg-indigo-500/20 dark:bg-indigo-400/25 inline-block px-2 py-0.5 rounded shrink-0">
          {card.term}
        </p>
      </div>
      <p className="shrink-0 pt-4 text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
        Created with Quivlo
      </p>
    </article>
  )
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % heroCarouselCards.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden px-4 pt-16 pb-20 sm:pt-20 sm:pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 bg-mesh pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50 dark:from-[#0a0a0f]/90 dark:via-transparent dark:to-[#0a0a0f] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-6xl w-full flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="inline-flex items-center rounded-full border border-indigo-500/50 bg-indigo-500/10 dark:bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-6 animate-fade-in">
            Now available on iOS
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="relative shrink-0 flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24">
              <img
                src={logoPath}
                alt="Quivlo"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl shadow-soft dark:shadow-soft-dark object-cover ring-2 ring-white/50 dark:ring-slate-800/50"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling
                  if (fallback) (fallback as HTMLElement).style.display = 'flex'
                }}
              />
              <div
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-soft dark:shadow-soft-dark ring-2 ring-white/50 dark:ring-slate-800/50 bg-gradient-to-br from-indigo-500 to-violet-600"
                style={{ display: 'none' }}
                aria-hidden
              >
                Q
              </div>
            </div>
            <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">Quivlo</span>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2 animate-fade-in">
            Flashcards, reimagined
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-slate-900 dark:text-white">Read. </span>
            <span className="text-gradient">Remember. </span>
            <span className="text-slate-900 dark:text-white">Share.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Turn articles, links, and screenshots into beautiful flashcards you can review and share.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-[44px] inline-flex items-center px-6 py-3 text-sm touch-manipulation"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 touch-manipulation"
            >
              View Features
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          </div>

        {/* Phone mock + SHARE box (Share on left edge of phone) */}
        <div className="mt-14 lg:mt-0 flex-1 flex justify-center lg:justify-end items-center gap-2 sm:gap-3 min-w-0">
          {/* SHARE box - smaller, on left edge of phone */}
          <div className="rounded-xl bg-slate-800 dark:bg-slate-800/90 px-3 py-3 shadow-lg border border-slate-700/50 dark:border-slate-600/50 w-[100px] sm:w-[110px] shrink-0 self-center">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400">
                Share
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 rounded-full bg-slate-600/60 dark:bg-slate-600/50 w-full max-w-[85%]" aria-hidden />
              <div className="h-1.5 rounded-full bg-slate-600/40 dark:bg-slate-600/40 w-full max-w-[65%]" aria-hidden />
            </div>
          </div>

          <div
            className="relative w-[260px] sm:w-[300px] max-w-[85vw]"
            style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-indigo-500/25 to-violet-500/20 blur-2xl opacity-70 dark:opacity-50" aria-hidden />
            <div className="relative flex flex-col rounded-[2.75rem] border-[12px] sm:border-[14px] border-slate-800 dark:border-slate-600 bg-slate-900 dark:bg-slate-950 shadow-2xl overflow-hidden h-[500px] sm:h-[600px]">
              {/* Status bar */}
              <div className="h-11 shrink-0 flex items-center justify-between px-6 pt-2 text-xs text-white/90 font-medium">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M1 9h2v7H1V9zm4 3h2v4H5v-4zm4-6h2v10H9V6zm4 6h2v4h-2v-4zm4-3h2v7h-2v-7z" />
                  </svg>
                  <span>100%</span>
                </span>
              </div>
              {/* App header */}
              <div className="shrink-0 px-4 pb-2">
                <p className="text-xs text-slate-400 dark:text-slate-500">My Cards</p>
                <p className="text-sm font-semibold text-slate-200 dark:text-slate-300">Daily Review</p>
              </div>
              {/* Flashcard carousel inside phone: horizontal slide */}
              <div className="flex-1 min-h-0 px-3 pb-3 overflow-hidden">
                <div className="h-full min-h-[220px] overflow-hidden relative rounded-2xl bg-slate-900 dark:bg-white shadow-lg">
                  <div
                    className="flex h-full transition-transform duration-300 ease-out"
                    style={{
                      width: `${heroCarouselCards.length * 100}%`,
                      transform: `translateX(-${(100 / heroCarouselCards.length) * currentIndex}%)`,
                    }}
                  >
                    {heroCarouselCards.map((card) => (
                      <div
                        key={card.id}
                        className="h-full flex-shrink-0 p-4 sm:p-5 flex flex-col"
                        style={{ width: `${100 / heroCarouselCards.length}%` }}
                      >
                        <HeroCardContent card={card} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom nav hint */}
              <div className="shrink-0 h-14 flex items-center justify-around border-t border-slate-700/80 dark:border-slate-600/80 px-2 text-[10px] text-slate-400 dark:text-slate-500">
                <span>Home</span>
                <span className="text-indigo-400 font-medium">Cards</span>
                <span>Share</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
