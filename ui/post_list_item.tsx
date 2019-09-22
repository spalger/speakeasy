import React from 'react'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { Post } from '../model/post'
import { uri } from '../model/uri'

interface Props {
  post: Post
}

export const PostListItem: React.FC<Props> = ({ post }) => (
  <li>
    {post.date ? (
      <span className="post-meta">
        {format(parseISO(post.date), 'LLL co, yyyy')}
      </span>
    ) : null}
    <h2>
      <Link href="/post/[id]" as={uri`/post/${post.id}`}>
        <a className="post-link">{post.title || post.id}</a>
      </Link>
    </h2>
    {post.snippet ? (
      <div dangerouslySetInnerHTML={{ __html: post.snippet }} />
    ) : null}
  </li>
)
