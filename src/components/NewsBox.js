import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'
import title from 'title'

const NewsBox = ( { newsTitle, permalink, excerpt } ) => (
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">

    <div className="p-6">

      <h1 className="title-font text-xl font-medium text-white mb-3">{title( newsTitle )}</h1>

      <p className="leading-relaxed mb-3">{excerpt}</p>

      <div className="flex items-center flex-wrap ">

        <Link
          to={permalink}
          className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>

      </div>

    </div>

  </div>
)

NewsBox.propTypes = {
  newsTitle: string.isRequired,
  permalink: string.isRequired,
  excerpt: string.isRequired,
}

export default NewsBox
