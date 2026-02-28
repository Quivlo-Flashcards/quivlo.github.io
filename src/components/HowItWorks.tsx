import { steps } from '../data/howItWorks'

export function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          How it works
        </p>
        <h2 className="mt-3 text-2xl font-bold text-center text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Three steps to better learning
        </h2>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          From content to shareable flashcards in minutes.
        </p>
        <div className="mt-12 sm:mt-20 grid gap-10 sm:gap-12 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="relative text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-2xl font-bold shadow-lg shadow-indigo-500/25">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
