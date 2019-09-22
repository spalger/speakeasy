import React from 'react'
import { format, parseISO } from 'date-fns'

import { Post } from '../model/post'

export const PostView: React.FC<{ post: Post }> = ({ post }) => (
  <div className="post">
    <header className="post-header">
      <h1>{post.title}</h1>
      {post.date ? (
        <p className="post-meta">
          <span className="post-meta-date">
            {format(parseISO(post.date), 'LLL co, yyyy')}
          </span>
        </p>
      ) : null}
    </header>

    <article
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.body }}
    ></article>
  </div>
)
