import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsBox from '../components/NewsBox'
import SlideShow from '../components/SlideShow'
import { BASE_KEYWORDS } from '../lib/keywords'

const IndexPage = () => {
  const { slideshowImages, topNews } = useStaticQuery( graphql`
  query HomePageSections {
    slideshowImages: allFile (
      filter: {
        sourceInstanceName: { eq: "images" },
        relativeDirectory: { eq: "slideshow" }
        },
        sort: {
          fields: name,
          order: ASC
        }
      ) {
      edges {
        node {
          id
          childImageSharp {
            fluid( quality: 100, maxWidth: 1400, maxHeight: 1200 ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    topNews: allMarkdownRemark(
        filter: {
          frontmatter: { layout: { eq: "News" } }
        },
        sort: {
          fields: frontmatter___date,
          order: DESC
        },
        limit: 3
        ) {
      edges {
          node {
            id
            excerpt( format: PLAIN, truncate: true, pruneLength: 100 )
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
    <Layout seoTitle="Home" seoKeywords={BASE_KEYWORDS}>

      <section>
        <div className="container mx-auto lg:w-9/12 w-full pb-8">
          <div className="border-2 border-secondary-grey rounded-lg">
            <SlideShow images={slideshowImages.edges} imgStyle="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4">

            {topNews.edges.map( ( { node: {
              id,
              excerpt,
              frontmatter: { title },
              fields: { slug },
            } } ) => (
              <div key={id} className="p-4 md:w-1/3">
                <NewsBox newsTitle={title} permalink={slug} excerpt={excerpt} />
              </div>
            ) )}

          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
