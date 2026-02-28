import { features } from '../data/features'
import { FeatureIcon } from './FeatureIcon'

export function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 scroll-mt-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          Features
        </p>
        <h2 className="mt-3 text-2xl font-bold text-center text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Everything you need to learn and share
        </h2>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          Paste a link, import a screenshot, or type text. Then edit, save, and share your flashcards.
        </p>
        <div className="mt-12 sm:mt-20 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/50 p-5 sm:p-6 shadow-soft dark:shadow-soft-dark card-hover"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 dark:from-indigo-400/20 dark:to-violet-400/20 text-indigo-600 dark:text-indigo-400 group-hover:from-indigo-500/25 group-hover:to-violet-500/25 transition-colors">
                <FeatureIcon icon={feature.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
