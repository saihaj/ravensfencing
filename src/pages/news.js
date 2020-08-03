import React from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsBox from '../components/NewsBox'
import { newsKeywords } from '../lib/keywords'

const NewsListing = ( { title, permalink, excerpt, date } ) => (
  <div className="p-4 md:w-1/3">
    <NewsBox
      newsTitle={title}
      permalink={permalink}
      excerpt={excerpt}
      date={date}
    />
  </div>
)

NewsListing.propTypes = {
  title: string.isRequired,
  permalink: string.isRequired,
  excerpt: string.isRequired,
  date: string.isRequired,
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
            date (formatString: "MMM DD, YYYY")
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
            frontmatter: { title, date },
            fields: { slug },
          } } ) => (
            <NewsListing
              key={id}
              title={title}
              excerpt={excerpt}
              permalink={slug}
              date={date}
            />
          ) )}

        </div>
      </div>

    </Layout>
  )
}

export default News
