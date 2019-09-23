import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { SITE } from '../model/site'

import './styles/theme.css'
import './styles/highlight.css'

export const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/api/site.webmanifest" />
      </Head>

      <header className="site-header">
        <div className="header-content">
          <div className="site-title">
            <Link href="/">
              <a>{SITE.title}</a>
            </Link>
          </div>
          <nav className="site-nav">
            <Link href="/posts">
              <a className="page-link">Posts</a>
            </Link>
          </nav>
        </div>
      </header>

      <div className="page-content">{children}</div>

      <footer className="site-footer">
        <div className="footer-content">
          <p>
            <a href="https://github.com/spalger">github</a>
            <a href="https://twitter.com/spalger">twitter</a>
          </p>
        </div>
      </footer>
    </>
  )
}
