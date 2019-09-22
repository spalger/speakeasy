import fetch from 'isomorphic-fetch'

import { Layout } from '../../ui/layout'
import { PostView } from '../../ui/post_view'
import { Post } from '../../model/post'
import { uri } from '../../model/uri'
import { NextPage } from 'next'
import { getSiteUrl } from '../../model/url'

interface Props {
  post: Post
}

const Page: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <PostView post={post} />
    </Layout>
  )
}

Page.getInitialProps = async ({ query, req }): Promise<Props> => {
  const { id } = query

  if (typeof id !== 'string') {
    throw new Error('expected id to be a string')
  }

  const siteUrl = getSiteUrl(req ? req.headers : undefined)
  const post = await fetch(siteUrl.resolve(uri`/api/post/${id}`)).then(r =>
    r.json(),
  )

  return { post }
}

export default Page
