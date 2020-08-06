import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SlideShow from '../components/SlideShow'
import TwitterFeed from '../components/TwitterFeed'
import Coaches from '../components/Coaches'
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
      html,
      frontmatter {
        title
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

      <section className="pt-12">
        <div className="px-2 py-8 container mx-auto border-t-2 border-b-2 border-secondary-grey">
          <h1 className="text-5xl font-bold text-center font-viga">
            {aboutUsSection.frontmatter.title}
          </h1>
          <p className="text-2xl m-4">
            <div dangerouslySetInnerHTML={{ __html: aboutUsSection.html }} />
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="px-2 py-8 container mx-auto border-b-2 border-secondary-grey">
          <h1 className="text-5xl font-bold text-center font-viga">
            Coaches
          </h1>
          <Coaches />
        </div>
      </section>

      <section>
        <h1 className="pb-2 text-5xl font-bold text-center font-viga">
          Latest News
        </h1>
        <div className="container mx-auto text-gray-600 body-font">
          <div className="flex flex-wrap -m-4">
            <NewsListing newsResults={topNews} />
          </div>
        </div>
      </section>

      <section className="pt-8">
        <TwitterFeed userName="RavensFencing" />
      </section>

    </Layout>
  )
}

export default IndexPage
