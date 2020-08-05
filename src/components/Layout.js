import React from 'react'
import { node, string, arrayOf } from 'prop-types'
import cx from 'classnames'

import Header from './Header'
import Footer from './Footer'
import SEO from './Seo'

const Layout = ( { children, seoTitle, seoKeywords, customStyles } ) => (

  <div className="flex flex-col min-h-screen font-sans">
    <SEO title={seoTitle} keywords={seoKeywords} />

    <Header />

    <main
      className={cx(
        'flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 font-andika',
        `${customStyles}`,
      )}
    >
      {children}
    </main>

    <Footer />

  </div>
)

Layout.propTypes = {
  children: node.isRequired,
  seoTitle: string.isRequired,
  seoKeywords: arrayOf( string ),
  customStyles: string,
}

Layout.defaultProps = {
  seoKeywords: [],
  customStyles: '',
}

export default Layout
