import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { string, shape } from 'prop-types'
import cx from 'classnames'

import { processTitle, toSlug } from '../lib/utils'

const CoachCard = ( { name, image } ) => (
  <Link to={`/coaches/${toSlug( processTitle( name ) )}`} className="p-2 md:w-1/3">
    <motion.div
      className={cx(
        'h-full overflow-hidden  mx-auto',
        'lg:w-11/12 md:w-full w-2/3',
        'border-2 border-secondary-grey rounded-lg',
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Img
        fluid={image}
        alt={`Image of Coach ${processTitle( name )}`}
      />

      <h1 className="title-font text-3xl font-bold text-center text-white">
        {processTitle( name )}
      </h1>
    </motion.div>
  </Link>
)

CoachCard.propTypes = {
  name: string.isRequired,
  image: shape( {} ).isRequired,
}

const Coaches = () => {
  const { allFile: { edges: images } } = useStaticQuery( graphql`
  query CoachesImages {
    allFile(
      filter: {
        sourceInstanceName: {eq: "images"},
        relativeDirectory: {eq: "coaches"}
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
    <div className="md:flex md:flex-wrap">
      {images.map( ( {
        node: {
          id,
          name,
          childImageSharp: { fluid },
        },
      } ) => (
        <CoachCard key={id} name={name} image={fluid} />
      ) )}
    </div>
  )
}

export default Coaches
