/* eslint-disable react/require-default-props */
import React from 'react'
import { arrayOf, string, shape } from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks'

const SEO = ( { description, lang, meta, keywords, title } ) => {
  const site = useSiteMetadata()

  const metaDescription = description || site.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join( ', ' ),
            }
            : [],
        )
        .concat( meta )}
      title={title}
      titleTemplate={`%s | ${site.title}`}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  keywords: [],
  meta: [],
}

SEO.propTypes = {
  description: string,
  keywords: arrayOf( string ),
  lang: string,
  meta: arrayOf( shape( {} ) ),
  title: string.isRequired,
}

export default SEO
