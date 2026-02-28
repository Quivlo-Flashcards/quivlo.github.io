import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { APP_STORE_URL } from '../config'

const base = import.meta.env.BASE_URL || '/'
const logoPath = `${base}AppIcon-1024.png`

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#" className="flex items-center gap-3 font-bold text-lg text-slate-900 dark:text-white group">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl overflow-hidden shadow-md shadow-indigo-500/20 ring-2 ring-slate-200/80 dark:ring-slate-700/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-indigo-500/25 group-hover:ring-indigo-400/40 dark:group-hover:ring-indigo-500/50">
            <img
              src={logoPath}
              alt=""
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const fallback = target.nextElementSibling
                if (fallback) (fallback as HTMLElement).style.display = 'flex'
              }}
            />
            <span className="absolute inset-0 hidden items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-extrabold" aria-hidden>
              Q
            </span>
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Quivlo
          </span>
        </a>

        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 min-h-[44px] rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-slate-900/20 touch-manipulation"
          >
            Download
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 touch-manipulation"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-slate-200 dark:border-slate-800 ${open ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col gap-1 px-4 py-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-[44px] flex items-center rounded-xl px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium touch-manipulation"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="min-h-[44px] flex items-center rounded-xl px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400 touch-manipulation"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </header>
  )
}
