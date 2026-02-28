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
    description: 'Drop any article URL or paste text and Quivlo generates clean, focused flashcards in seconds.',
    icon: 'link',
  },
  {
    id: 'screenshot',
    title: 'Import from screenshot',
    description: 'Capture a screenshot and we extract the text, then turn it into cards. Perfect for slides or PDFs.',
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
    title: 'Smart generation',
    description: 'AI-powered card creation that focuses on key concepts so you remember what matters.',
    icon: 'sparkles',
  },
]
