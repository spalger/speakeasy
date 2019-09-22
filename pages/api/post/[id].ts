import { makeNextHandler, NextRoute, NotFoundError } from '@spalger/next-plus'

import { POSTS } from '../../../model/posts'
import { injectSiteUrl } from '../../../model/post'
import { getSiteUrl } from '../../../model/url'

export default makeNextHandler([
  new NextRoute('GET', ctx => {
    const id = decodeURIComponent(ctx.pathname.split('/').pop() || '')
    const siteUrl = getSiteUrl(ctx.headers)
    const post = injectSiteUrl(POSTS.find(p => p.id === id), siteUrl)

    if (!post) {
      throw new NotFoundError(`no post with id ${id}`)
    }

    return {
      body: post,
    }
  }),
])
