import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { shape, string } from 'prop-types'

import { processTitle, toSlug } from '../lib/utils'
import Layout from '../components/Layout'

const ImageBox = ( { name, image } ) => (
  <div className="lg:w-3/5 md:w-9/12 w-5/6 pb-12 mx-auto">

    <Link to={toSlug( processTitle( name ) )}>

      <div className="h-full border-2 border-gray-400 rounded-lg overflow-hidden">

        <Img fluid={image} alt={processTitle( name )} />

        <div className="p-2 text-center">

          <h1 className="text-2xl">
            { processTitle( name ) }
          </h1>

        </div>

      </div>

    </Link>

  </div>
)

ImageBox.propTypes = {
  image: shape( {} ).isRequired,
  name: string.isRequired,
}

const Programs = () => {
  const { allFile: { edges: images } } = useStaticQuery( graphql`
    query ProgramPageImages {
      allFile(
        filter: {
          sourceInstanceName: {eq: "images"},
          relativeDirectory: {eq: "programs"}
          },
          sort: {
            fields: name,
            order: ASC
          }
        ) {
        edges {
          node {
            id
            name
            childImageSharp{
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  ` )

  return (
    <Layout seoTitle="Programs">

      <section
        className="flex flex-wrap flex-col"
      >
        {images.map( (
          { node: { id, name, childImageSharp: { fluid } } },
        ) => (
          <ImageBox key={id} name={name} image={fluid} />
        ) )}
      </section>

    </Layout>
  )
}

export default Programs
