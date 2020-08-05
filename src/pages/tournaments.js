import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { shape, string } from 'prop-types'
import { motion } from 'framer-motion'

import { processTitle, toSlug } from '../lib/utils'
import { tournamentsKeywords } from '../lib/keywords'
import Layout from '../components/Layout'

const ImageBox = ( { name, image } ) => (
  <motion.div
    className="lg:w-3/5 md:w-9/12 w-5/6 pb-12 mx-auto"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.95 }}
  >

    <Link to={toSlug( processTitle( name ) )}>

      <div className="h-full border-2 border-gray-400 rounded-lg overflow-hidden">

        <Img fluid={image} alt={processTitle( name )} />

        <div className="p-2 text-center">

          <h1 className="text-2xl font-viga">
            { processTitle( name ) }
          </h1>

        </div>

      </div>

    </Link>

  </motion.div>
)

ImageBox.propTypes = {
  image: shape( {} ).isRequired,
  name: string.isRequired,
}

const Tournaments = () => {
  const { allFile: { edges: images } } = useStaticQuery( graphql`
    query TournamentsPageImages {
      allFile(
        filter: {
          sourceInstanceName: {eq: "images"},
          relativeDirectory: {eq: "tournaments"}
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
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  ` )

  return (
    <Layout seoTitle="Tournaments" seoKeywords={tournamentsKeywords}>

      <section className="flex flex-col">

        {images.map( (
          { node: { id, name, childImageSharp: { fluid } } },
        ) => (
          <ImageBox key={id} name={name} image={fluid} />
        ) )}

      </section>

    </Layout>
  )
}

export default Tournaments
