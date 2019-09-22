import { NextPage } from 'next'
import fetch from 'isomorphic-fetch'

import { Post } from '../model/post'
import { PostsListResp } from '../model/posts'
import { resolveUrl } from '../model/uri'
import { Layout } from '../ui/layout'
import { PostListItem } from '../ui/post_list_item'

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
          {posts.map(p => (
            <PostListItem key={p.id} post={p} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function(): Promise<Props> {
  const resp: PostsListResp = await fetch(resolveUrl('/api/posts')).then(r =>
    r.json(),
  )

  return { posts: resp.posts }
}

export default Home
