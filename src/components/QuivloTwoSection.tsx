import {
  quivloTwoBlurb,
  quivloTwoHighlights,
  quivloTwoIntro,
  quivloTwoWhy,
} from '../data/quivloTwo'

export function QuivloTwoSection() {
  return (
    <section
      id="whats-new"
      className="relative scroll-mt-20 px-4 py-16 sm:py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.06] via-transparent to-violet-500/[0.04] dark:from-indigo-500/10 dark:to-violet-500/5 pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
            New in the app
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {quivloTwoIntro.headline}
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400">
            {quivloTwoIntro.subhead}
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-5 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          <p>{quivloTwoIntro.lead}</p>
          <p>{quivloTwoIntro.followUp}</p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-indigo-200/80 dark:border-indigo-500/30 bg-indigo-50/80 dark:bg-indigo-950/40 px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-2">
            At a glance
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
            {quivloTwoBlurb}
          </p>
        </div>

        <h3 className="mt-16 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          What’s new in Quivlo 2.0
        </h3>
        <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {quivloTwoHighlights.map((item, i) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-5 sm:p-6 shadow-soft dark:shadow-soft-dark"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-bold shadow-md shadow-indigo-500/25">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-800/30 px-6 py-8 sm:px-10 sm:py-10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl mb-4">
            Why this matters
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {quivloTwoWhy}
          </p>
        </div>
      </div>
    </section>
  )
}
