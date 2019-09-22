import { Url } from './url'

export interface Post {
  id: string
  date?: string
  title: string
  snippet?: string
  body: string
}

export interface DatedPost extends Post {
  date: string
}

export function injectSiteUrl<T extends Post>(post: T, siteUrl: Url) {
  return {
    ...post,
    snippet:
      post.snippet !== undefined
        ? siteUrl.replacePlaceholder(post.snippet)
        : undefined,
    body: siteUrl.replacePlaceholder(post.body),
  }
}
