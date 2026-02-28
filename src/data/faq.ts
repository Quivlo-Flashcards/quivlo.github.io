export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'offline',
    question: 'Does Quivlo work offline?',
    answer: 'You need an internet connection to generate new flashcards. Once created, you can view and review your saved sets offline.',
  },
  {
    id: 'linkedin',
    question: 'Can I share to LinkedIn?',
    answer: 'Yes! Share a single card or a carousel directly to LinkedIn. The carousel format is designed to look great in the feed.',
  },
  {
    id: 'save',
    question: 'Can I save flashcards?',
    answer: 'Absolutely. All your flashcard sets are saved under "My Cards" so you can revisit and review them anytime.',
  },
  {
    id: 'screenshots',
    question: 'Does it support screenshots?',
    answer: 'Yes. Import a screenshot and Quivlo extracts the text, then generates flashcards from it. Great for slides, PDFs, or notes.',
  },
  {
    id: 'free',
    question: 'Is it free?',
    answer: 'Quivlo offers a free tier to get started. Premium features and higher limits are available via in-app subscription.',
  },
]
