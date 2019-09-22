import { resolve as resolveUrl } from 'url'

export const SITE_URL_PLACEHOLER = 'http://site_url_placeholder/'

export class Url {
  constructor(public readonly href: string) {
    if (!this.href.endsWith('/')) {
      this.href = `${this.href}/`
    }
  }

  resolve(relativeUrl: string) {
    return resolveUrl(this.href, relativeUrl)
  }

  replacePlaceholder(text: string) {
    return text.split(SITE_URL_PLACEHOLER).join(this.href)
  }
}

export function getSiteUrl(reqHeaders?: Record<string, string | string[]>) {
  if (reqHeaders) {
    return new Url(
      `${reqHeaders['x-forwarded-proto']}://${reqHeaders['x-forwarded-host']}`,
    )
  } else if (typeof window !== 'undefined') {
    return new Url(resolveUrl(window.location.href, '/'))
  } else {
    return new Url('http://localhost:3000/')
  }
}
