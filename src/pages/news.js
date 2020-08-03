import React from 'react'
import { string, bool, func, shape, arrayOf } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Layout from '../components/Layout'
import NewsBox from '../components/NewsBox'
import { newsKeywords } from '../lib/keywords'
import { useToggle } from '../hooks'

const NewsListing = ( { title, permalink, excerpt, date } ) => (
  <div className="p-4 md:w-1/3">
    <NewsBox
      newsTitle={title}
      permalink={permalink}
      excerpt={excerpt}
      date={date}
    />
  </div>
)

NewsListing.propTypes = {
  title: string.isRequired,
  permalink: string.isRequired,
  excerpt: string.isRequired,
  date: string.isRequired,
}

const FilterButton = ( { name, updateState, initialState } ) => (
  <button
    className={cx(
      'py-1 px-4',
      'border-2',
      'text-2xl rounded-full',
      { 'bg-primary-red': initialState },
      { 'border-secondary-grey': !initialState, 'border-primary-red': initialState },
    )}
    type="button"
    aria-label={`Sort by ${name} news button`}
    onClick={() => updateState()}
  >
    {name}
  </button>
)

FilterButton.propTypes = {
  name: string.isRequired,
  updateState: func.isRequired,
  initialState: bool.isRequired,
}

export const FilteredNewsResults = ( { newsResults } ) => (
  <div className="flex flex-wrap">
    { newsResults.edges.map( ( { node: {
      id,
      excerpt,
      frontmatter: { title, date },
      fields: { slug },
    } } ) => (
      <NewsListing
        key={id}
        title={title}
        excerpt={excerpt}
        permalink={slug}
        date={date}
      />
    ) )}
  </div>
)

FilteredNewsResults.propTypes = {
  newsResults: arrayOf( shape( {} ) ).isRequired,
}

const News = () => {
  const { allNews, generalNews, varsityNews } = useStaticQuery( graphql`
  query NewsPageListing {
    allNews: allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "News" } } },
      sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
          ...NewsFragment
        }
      }
    },
    generalNews: allMarkdownRemark(
      filter: { 
        frontmatter: { 
          layout: { eq: "News" },
          category: {eq: "General"}
        }
      },
      sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
          ...NewsFragment
        }
      },
    },
    varsityNews: allMarkdownRemark(
      filter: { 
        frontmatter: { 
          layout: { eq: "News" },
          category: {eq: "Varsity"}
        }
      },
      sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
          ...NewsFragment
        }
      },
    }
  }
  fragment NewsFragment on MarkdownRemark {
      id
      excerpt(format: PLAIN, truncate: true, pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
        title
        date (formatString: "MMM DD, YYYY")
      }
    }
  ` )

  const [ varsitySelected, setVarsitySelected ] = useToggle( false )
  const [ generalSelected, setGeneralSelected ] = useToggle( false )

  const renderNewsResults = () => {
    if ( generalSelected && varsitySelected ) {
      return <FilteredNewsResults newsResults={allNews} />
    } if ( generalSelected ) {
      return <FilteredNewsResults newsResults={generalNews} />
    } if ( varsitySelected ) {
      return <FilteredNewsResults newsResults={varsityNews} />
    }
    return <FilteredNewsResults newsResults={allNews} />
  }

  return (
    <Layout seoTitle="News" seoKeywords={newsKeywords}>

      <div className="flex flex-col flex-wrap">
        <div className="flex justify-around">
          <FilterButton name="General News" initialState={generalSelected} updateState={setGeneralSelected} />
          <FilterButton name="Varsity News" initialState={varsitySelected} updateState={setVarsitySelected} />
        </div>
      </div>

      <div className="text-gray-600 body-font container mx-auto">
        {renderNewsResults()}
      </div>

    </Layout>
  )
}

export default News
