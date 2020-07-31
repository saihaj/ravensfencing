import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { Fade } from 'react-slideshow-image'
import Img from 'gatsby-image'
import 'react-slideshow-image/dist/styles.css'

const SlideShow = ( { images } ) => (
  <Fade>
    {images.map( ( { node: { id, childImageSharp: { fluid } } } ) => (
      <Img key={id} fluid={fluid} />
    ) )}
  </Fade>
)

SlideShow.propTypes = {
  images: arrayOf(
    shape( {
      node: {
        id: string,
        childImageSharp: shape( {} ),
      },
    } ),
  ).isRequired,
}

export default SlideShow
