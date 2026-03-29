export interface Feature {
  id: string
  title: string
  description: string
  icon: 'link' | 'camera' | 'pencil' | 'folder' | 'share' | 'sparkles'
}

export const features: Feature[] = [
  {
    id: 'paste',
    title: 'Paste text or link',
    description:
      'Drop any article URL or paste text. Quivlo 2.0 uses on-device AI to pull out the best ideas and turn them into focused flashcards.',
    icon: 'link',
  },
  {
    id: 'screenshot',
    title: 'Import from screenshot',
    description:
      'Capture a screenshot, extract text with on-device OCR, then let AI shape it into cards. Great for slides or PDFs.',
    icon: 'camera',
  },
  {
    id: 'edit',
    title: 'Edit, reorder & review',
    description: 'Tweak wording, reorder cards, and review with a smooth, distraction-free experience.',
    icon: 'pencil',
  },
  {
    id: 'save',
    title: 'Save to My Cards',
    description: 'Keep your sets organized. All your decks live in one place for quick access anytime.',
    icon: 'folder',
  },
  {
    id: 'share',
    title: 'Share as card or carousel',
    description: 'Export a single card or a full carousel. Ideal for LinkedIn, Twitter, or messaging.',
    icon: 'share',
  },
  {
    id: 'smart',
    title: 'On-device AI generation',
    description:
      'Local reasoning finds high-value ideas, rewrites them for clarity, and builds cards designed for retention. No cloud required.',
    icon: 'sparkles',
  },
]
