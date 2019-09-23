import { makeNextHandler, NextRoute } from '@spalger/next-plus'
import Rss from 'rss'
import { parseISO } from 'date-fns'

import { POSTS } from '../../model/posts'
import { SITE } from '../../model/site'
import { uri } from '../../model/uri'
import { getSiteUrl } from '../../model/url'

const last20PostsDesc = POSTS.slice(0, 20)

export default makeNextHandler([
  new NextRoute('GET', ctx => {
    const siteUrl = getSiteUrl(ctx.headers)

    const feed = new Rss({
      /* eslint-disable @typescript-eslint/camelcase */
      title: SITE.title,
      feed_url: SITE.feedUrl,
      site_url: siteUrl.href,
      pubDate: last20PostsDesc
        .slice(1)
        .map(p => parseISO(p.date))
        .shift(),
      /* eslint-enable @typescript-eslint/camelcase */
    })

    for (const post of last20PostsDesc) {
      feed.item({
        author: SITE.author,
        date: post.date,
        guid: post.id,
        title: post.title,
        description: siteUrl.replacePlaceholder(post.body),
        url: siteUrl.resolve(uri`/post/${post.id}`),
      })
    }

    return {
      body: feed.xml(),
      headers: {
        'content-type': 'application/rss+xml',
      },
    }
  }),
])
