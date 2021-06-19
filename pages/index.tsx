import Image from 'next/image'

import { Layout } from '../ui/layout'

function About() {
  return (
    <Layout>
      <div className="imageMe">
        <Image
          src="https://avatars0.githubusercontent.com/u/1329312"
          alt="photo of spencer"
          width={284}
          height={284}
        />
      </div>
      <p style={{ fontSize: '1.2em', wordBreak: 'break-word' }}>
        So... I’m a web developer and gadget fanatic who digs JavaScript, Apple,
        and a bunch of other things. I work at{' '}
        <a href="https://www.elastic.co">Elastic</a>. I primarily focus on{' '}
        <a href="https://www.elastic.co/products/kibana">Kibana</a>. I read{' '}
        <a href="https://theverge.com">The Verge</a>,{' '}
        <a href="https://news.ycombinator.com">Hacker News</a>, and{' '}
        <a href="http://macrumors.com/">MacRumors</a>. You can find me on
        Twitter <a href="https://twitter.com/spalger">@spalger</a> or
        collaborate with me on <a href="https://github.com/spalger">Github</a>.
      </p>
      <div style={{ clear: 'both' }} />
    </Layout>
  )
}

export default About
