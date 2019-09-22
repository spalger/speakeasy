import { makeNextHandler, NextRoute } from '@spalger/micro-plus'
import Rss from 'rss'
import { parseISO } from 'date-fns'

import { POSTS } from '../../model/posts'
import { SITE } from '../../model/site'
import { uri } from '../../model/uri'

const last20PostsDesc = POSTS.slice(-20).reverse()

export default makeNextHandler([
  new NextRoute('GET', () => {
    const feed = new Rss({
      /* eslint-disable @typescript-eslint/camelcase */
      title: SITE.title,
      feed_url: SITE.feedUrl,
      site_url: SITE.url,
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
        description: post.body,
        url: new URL(uri`/post/${post.id}`, SITE.url).href,
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
