import React from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsBox from '../components/NewsBox'
import { newsKeywords } from '../lib/keywords'

const NewsListing = ( { title, permalink, excerpt } ) => (
  <div className="p-4 md:w-1/3">
    <NewsBox
      newsTitle={title}
      permalink={permalink}
      excerpt={excerpt}
    />
  </div>
)

NewsListing.propTypes = {
  title: string.isRequired,
  permalink: string.isRequired,
  excerpt: string.isRequired,
}

const News = () => {
  const { allMarkdownRemark: { edges: data } } = useStaticQuery( graphql`
  query NewsPageListing {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "News" } } },
      sort: { fields: frontmatter___date, order: DESC }
      ) {
      edges {
        node {
          id
          excerpt(format: PLAIN, truncate: true, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  ` )

  return (
    <Layout seoTitle="News" seoKeywords={newsKeywords}>

      <div className="text-gray-600 body-font container mx-auto">
        <div className="flex flex-wrap">

          {data.map( ( { node: {
            id,
            excerpt,
            frontmatter: { title },
            fields: { slug },
          } } ) => (
            <NewsListing
              key={id}
              title={title}
              excerpt={excerpt}
              permalink={slug}
            />
          ) )}

        </div>
      </div>

    </Layout>
  )
}

export default News
