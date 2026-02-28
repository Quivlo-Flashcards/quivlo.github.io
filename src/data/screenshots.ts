/**
 * Screenshot placeholders for the marketing site.
 * Add your images to public/screenshots/:
 *   screenshot-1.png: Home screen
 *   screenshot-2.png: Preview of a flashcard
 *   screenshot-3.png: My Cards library
 */
export interface ScreenshotItem {
  id: string
  alt: string
  /** Path relative to public/ (e.g. screenshots/screenshot-1.png) */
  src: string
}

export const screenshots: ScreenshotItem[] = [
  { id: '1', alt: 'Quivlo home screen', src: 'screenshots/screenshot-1.PNG' },
  { id: '2', alt: 'Preview of a flashcard', src: 'screenshots/screenshot-2.PNG' },
  { id: '3', alt: 'My Cards library', src: 'screenshots/screenshot-3.PNG' },
]
