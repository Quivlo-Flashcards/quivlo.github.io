export interface Step {
  id: string
  number: number
  title: string
  description: string
}

export const steps: Step[] = [
  {
    id: 'paste',
    number: 1,
    title: 'Paste link or text',
    description: 'Paste any article URL or copy-paste text. Quivlo fetches and parses the content for you.',
  },
  {
    id: 'generate',
    number: 2,
    title: 'Generate',
    description: 'Our AI creates clear, concise flashcards from the content. You get key concepts, not clutter.',
  },
  {
    id: 'edit-share',
    number: 3,
    title: 'Edit & share',
    description: 'Tweak cards, save to My Cards, or share as a single card or carousel to LinkedIn and beyond.',
  },
]
