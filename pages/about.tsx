import { Layout } from '../ui/layout'
import { PostView } from '../ui/post_view'
import post from '../posts/about.md'

function About() {
  return (
    <Layout>
      <PostView post={post} />
    </Layout>
  )
}

export default About
