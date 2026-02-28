const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Support', href: 'mailto:quivlo.app@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white touch-manipulation">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-extrabold">
              Q
            </span>
            Quivlo
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-8" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="min-h-[44px] flex items-center justify-center py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors touch-manipulation"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-10 sm:mt-12 text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Quivlo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
