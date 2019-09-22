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
      </Head>

      <header className="site-header">
        <div className="header-content">
          <div className="site-title">
            <Link href="/">
              <a>{SITE.title}</a>
            </Link>
          </div>
          <nav className="site-nav">
            <Link href="/about">
              <a className="page-link">About</a>
            </Link>
          </nav>
        </div>
      </header>

      <div className="page-content">{children}</div>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-cols">
            <div className="footer-col-left">
              <ul className="contact-list">
                <li>
                  <a href="https://github.com/spalger">github</a>
                </li>
                <li>
                  <a href="https://twitter.com/spalger">twitter</a>
                </li>
              </ul>
            </div>

            <div className="footer-col-right">
              <p className="text">{SITE.description}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
