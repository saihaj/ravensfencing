import React from 'react'
import { node, string, arrayOf } from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import SEO from './Seo'

const Layout = ( { children, seoTitle, seoKeywords } ) => (

  <div className="flex flex-col min-h-screen font-sans text-white bg-black">
    <SEO title={seoTitle} keywords={seoKeywords} />

    <Header />

    <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {children}
    </main>

    <Footer />

  </div>
)

Layout.propTypes = {
  children: node.isRequired,
  seoTitle: string.isRequired,
  seoKeywords: arrayOf( string ),
}

Layout.defaultProps = {
  seoKeywords: [],
}

export default Layout
