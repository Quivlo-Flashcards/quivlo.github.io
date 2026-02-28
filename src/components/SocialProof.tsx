const bullets = [
  'Generate flashcards in seconds from any link or text',
  'Share polished cards and carousels to LinkedIn and social',
  'Review and save everything in one place',
]

export function SocialProof() {
  return (
    <section className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm px-5 py-8 sm:px-8 sm:py-10 shadow-soft dark:shadow-soft-dark">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" aria-hidden />
          <p className="relative text-lg sm:text-xl font-semibold text-center text-slate-800 dark:text-slate-200">
            Built for fast learning and sharing.
          </p>
          <ul className="relative mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
