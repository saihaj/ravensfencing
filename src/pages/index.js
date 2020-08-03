import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SlideShow from '../components/SlideShow'
import TwitterFeed from '../components/TwitterFeed'
import { BASE_KEYWORDS } from '../lib/keywords'
import { FilteredNewsResults as NewsListing } from './news'

const IndexPage = () => {
  const { slideshowImages, topNews, aboutUsSection } = useStaticQuery( graphql`
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
        filter: { frontmatter: { layout: { eq: "News" } } },
        sort: { fields: frontmatter___date, order: DESC },
        limit: 3
        ) {
      edges {
        node {
          ...NewsFragment
        }
      }
    }
    aboutUsSection: markdownRemark( frontmatter: { title: { eq: "About Us" } } ) {
      html
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

      <section className="py-12">
        <div className="p-2 container mx-auto border-2 border-secondary-grey rounded-lg">
          <h1 className="pt-2 text-5xl font-bold text-center">
            About Us
          </h1>
          <p className="text-2xl m-4">
            <div dangerouslySetInnerHTML={{ __html: aboutUsSection.html }} />
          </p>
        </div>
      </section>

      <section>
        <h1 className="pb-2 text-5xl font-bold text-center">
          Latest News
        </h1>
        <div className="container mx-auto text-gray-600 body-font">
          <div className="flex flex-wrap -m-4">
            <NewsListing newsResults={topNews} />
          </div>
        </div>
      </section>

      <section className=" py-12">
        <TwitterFeed userName="RavensFencing" />
      </section>

    </Layout>
  )
}

export default IndexPage
