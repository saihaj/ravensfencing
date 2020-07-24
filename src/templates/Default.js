/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import { shape } from 'prop-types'

import Layout from '../components/Layout'
import { BASE_KEYWORDS } from '../lib/keywords'

export const query = graphql`
  query DefaultPageLayout($id: String ) {
    markdownRemark(id: { eq: $id }, frontmatter: { layout: { eq:"Default" } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`

const Template = ( {
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, keywords },
    },
  },
} ) => (
  <Layout seoTitle={title} seoKeywords={[ ...BASE_KEYWORDS, keywords ]}>
    <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

Template.propTypes = {
  data: shape( { markdownRemark: shape( {} ).isRequired } ).isRequired,
}

export default Template
