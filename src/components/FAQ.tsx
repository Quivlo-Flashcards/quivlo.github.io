import { useState } from 'react'
import { faqItems } from '../data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          FAQ
        </p>
        <h2 className="mt-3 text-2xl font-bold text-center text-slate-900 dark:text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 sm:mt-14 space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/50 overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors min-h-[44px] touch-manipulation"
                  >
                    {item.question}
                    <span className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${isOpen ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      {isOpen ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-4 sm:px-6 pb-5 pt-4 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
