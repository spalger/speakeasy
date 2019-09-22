import { makeNextHandler, NextRoute, NotFoundError } from '@spalger/micro-plus'

import { POSTS } from '../../../model/posts'

export default makeNextHandler([
  new NextRoute('GET', ctx => {
    const id = decodeURIComponent(ctx.pathname.split('/').pop() || '')
    const post = POSTS.find(p => p.id === id)

    if (!post) {
      throw new NotFoundError(`no post with id ${id}`)
    }

    return {
      body: post,
    }
  }),
])
