import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { useWindowWidth } from '@react-hook/window-size'

import navRoutes from '../nav.yml'
import { useSiteMetadata } from '../hooks'

const Header = () => {
  const [ isExpanded, toggleExpansion ] = useState( false )
  const { title } = useSiteMetadata()
  const width = useWindowWidth()

  useEffect( () => {
    // Not mobile then toggle cannot be expanded
    if ( width > 768 ) toggleExpansion( false )
  }, [ width ] )

  return (
    <header className="bg-red-600">

      <nav className="max-w-6xl flex flex-wrap items-center justify-between px-5 py-3 md:px-10 mx-auto">

        <Link to="/">
          <motion.h1
            className="flex items-center text-white no-underline mb-2 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-2xl font-bold tracking-tight">
              {title}
            </span>
          </motion.h1>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          className={cx(
            'flex items-center block px-3 py-2 text-white rounded md:hidden',
            'hover:bg-white hover:text-red-600',
          )}
          onClick={() => toggleExpansion( !isExpanded )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </motion.button>

        {/* Nav items */}
        <div
          className={cx(
            `${isExpanded ? 'block' : 'hidden'}`,
            'w-full divide-y divide-gray-200',
            'md:block md:flex md:items-center md:w-auto md:divide-y-0',
          )}
        >

          {navRoutes.map( ( { title, route } ) => (
            <Link
              className={cx(
                'block font-semibold ',
                'text-xl text-white no-underline',
                'py-1 md:py-0 md:inline-block md:mt-0 md:ml-6',
              )}
              key={title}
              to={route}
            >

              { !isExpanded && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {title}
              </motion.div>
              )}

              {/* Mobile  */}
              { isExpanded && <div>{title}</div> }

            </Link>
          ) )}

        </div>

      </nav>

    </header>
  )
}

export default Header
