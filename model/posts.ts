import { Post } from './post'

const POSTS_CONTEXT = (require as any).context('../posts', false, /.*\.md$/)
export const POSTS: Post[] = (POSTS_CONTEXT.keys() as string[])
  .slice()
  .map(key => POSTS_CONTEXT(key).default as Post)
  .sort((a, b) => b.date.localeCompare(a.date))

export type PostsListResp = {
  total: number
  posts: Post[]
}
