export const SITE = {
  title: `spalger's speakeasy`,
  description: `Just sharing what I've learned, and recording things I don't want to forget.`,
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://spalger.com'
      : 'http://localhost:3000',
  feedUrl: 'https://spalger.com/api/feed.xml',
  author: 'Spencer Alger',
}
