import {
  makeNextHandler,
  NextRoute,
  parseIntQueryValue,
} from '@spalger/micro-plus'

import { POSTS, PostsListResp } from '../../model/posts'

export default makeNextHandler([
  new NextRoute('GET', ctx => {
    const pageNum = parseIntQueryValue(ctx.query, 'page', 1)
    const perPage = parseIntQueryValue(ctx.query, 'perPage', 10)

    const startI = (pageNum - 1) * perPage
    const total = POSTS.length

    const body: PostsListResp = {
      total,
      posts: POSTS.slice(startI, startI + perPage),
    }

    return {
      body,
    }
  }),
])
