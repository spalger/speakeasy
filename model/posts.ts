import Path from 'path'

import { WebpackRequire } from '../types/webpack'
import { DatedPost } from './post'

const POSTS_CONTEXT = ((require as any) as WebpackRequire).context(
  '../posts',
  false,
  /\d\d\d\d-\d\d-\d\d-[^\/]*\.md$/,
)

const DATE_RE = /^(\d\d\d\d-\d\d-\d\d)-/

export const POSTS: DatedPost[] = POSTS_CONTEXT.keys()
  .slice()
  .sort()
  .map(key => {
    const post = POSTS_CONTEXT(key).default

    if (!post.date) {
      const date = Path.basename(key).match(DATE_RE)

      return {
        ...post,
        date: date[1],
      }
    }

    return post
  })

export type PostsListResp = {
  total: number
  posts: DatedPost[]
}
