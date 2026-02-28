import { screenshots } from '../data/screenshots'

const base = import.meta.env.BASE_URL || '/'

export function Screenshots() {
  return (
    <section id="screenshots" className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-6xl min-w-0">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          Gallery
        </p>
        <h2 className="mt-3 text-2xl font-bold text-center text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          See Quivlo in action
        </h2>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          From link to flashcards to share in a few taps.
        </p>
        <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {screenshots.map((shot) => (
            <div
              key={shot.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 aspect-[9/19] min-h-[280px] sm:min-h-[340px] flex items-center justify-center border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 max-w-[280px] mx-auto sm:max-w-none"
            >
              <img
                src={`${base}${shot.src}`}
                alt={shot.alt}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  const placeholder = parent?.querySelector('.screenshot-placeholder')
                  if (placeholder) (placeholder as HTMLElement).classList.remove('hidden')
                }}
              />
              <div className="screenshot-placeholder hidden absolute inset-0 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-sm p-6 text-center gap-2">
                <span className="rounded-full bg-slate-300 dark:bg-slate-600 w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Screenshot placeholder
                <span className="text-xs opacity-80">public/{shot.src}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
