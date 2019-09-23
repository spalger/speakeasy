import { NextPage } from 'next'
import fetch from 'isomorphic-fetch'

import { Post } from '../model/post'
import { PostsListResp } from '../model/posts'
import { Layout } from '../ui/layout'
import { PostListItem } from '../ui/post_list_item'
import { getSiteUrl } from '../model/url'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className="home">
        <header className="page-header">
          <h1>Posts</h1>
        </header>

        <ul className="post-list">
          {posts.length ? null : <p>No posts to show</p>}
          {posts.map(p => (
            <PostListItem key={p.id} post={p} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function({ req }): Promise<Props> {
  const siteUrl = getSiteUrl(req ? req.headers : undefined)
  const resp: PostsListResp = await fetch(siteUrl.resolve('/api/posts')).then(
    r => r.json(),
  )

  return { posts: resp.posts }
}

export default Home
