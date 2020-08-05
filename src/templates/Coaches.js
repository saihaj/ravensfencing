import React from 'react'
import { graphql } from 'gatsby'
import { shape } from 'prop-types'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import { BASE_KEYWORDS } from '../lib/keywords'

export const query = graphql`
  query CoachPageLayout($id: String ) {
    markdownRemark(id: { eq: $id }, frontmatter: { layout: { eq:"Coaches" } }) {
      html
      frontmatter {
        title
        keywords
        role
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Template = ( {
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, keywords, image, role },
    },
  },
} ) => (
  <Layout seoTitle={title} seoKeywords={[ ...BASE_KEYWORDS, keywords ]}>

    <div className="max-w-2xl mx-auto pb-8">

      <div className="md:flex md:justify-around">
        <Img
          alt={`Image of Coach ${title}`}
          fluid={image.childImageSharp.fluid}
          className="lg:w-1/2 md:w-2/5 w-4/6 rounded-lg mx-auto md:mx-0"
        />

        <div className="flex flex-col my-auto text-center md:text-left">
          <h1 className="text-5xl font-bold font-viga">{title}</h1>
          <h3 className="text-2xl font-medium">{role}</h3>
        </div>
      </div>

    </div>

    <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: html }} />

  </Layout>
)

Template.propTypes = {
  data: shape( { markdownRemark: shape( {} ).isRequired } ).isRequired,
}

export default Template
