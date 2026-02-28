export interface HeroFlashcard {
  id: string
  topic: string
  term: string
  definition: string
}

export const heroCarouselCards: HeroFlashcard[] = [
  {
    id: 'ai',
    topic: 'AI',
    term: 'Large Language Model (LLM)',
    definition: 'Models trained on vast text to understand and generate language. They power ChatGPT, Claude, and excel at summarization and reasoning.',
  },
  {
    id: 'ml',
    topic: 'ML',
    term: 'Overfitting',
    definition: 'When a model memorizes training data but fails on new data. Fix with more data, regularization, or simpler models.',
  },
  {
    id: 'product',
    topic: 'Product',
    term: 'North Star Metric',
    definition: 'The one metric that best reflects the value your product delivers. It aligns teams and ties to retention and revenue.',
  },
  {
    id: 'analytical',
    topic: 'Analytical thinking',
    term: 'First-principles reasoning',
    definition: 'Breaking problems into basic truths and building up. Reduces bias and often reveals non-obvious solutions.',
  },
  {
    id: 'entrepreneurship',
    topic: 'Entrepreneurship',
    term: 'Product–market fit',
    definition: 'When your product satisfies strong demand and users stick. Until then, focus on learning and iterating, not scaling.',
  },
]
