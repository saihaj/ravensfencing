import React from 'react'
import { graphql } from 'gatsby'
import { shape } from 'prop-types'

import Layout from '../components/Layout'
import { BASE_KEYWORDS } from '../lib/keywords'

export const query = graphql`
  query NewsPageLayout($id: String ) {
    markdownRemark(id: { eq: $id }, frontmatter: { layout: { eq:"News" } }) {
      html
      frontmatter {
        title
        keywords
        author
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`

const Template = ( {
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, keywords, author, date },
    },
  },
} ) => (
  <Layout seoTitle={title} seoKeywords={[ ...BASE_KEYWORDS, keywords ]}>

    <div className="max-w-2xl mx-auto font-viga">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="text-sm pb-3 text-right">{`${date} by ${author}`}</p>
      <hr />
    </div>

    <div className="prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>

  </Layout>
)

Template.propTypes = {
  data: shape( { markdownRemark: shape( {} ).isRequired } ).isRequired,
}

export default Template
