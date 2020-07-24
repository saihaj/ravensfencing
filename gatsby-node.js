const { createFilePath } = require( 'gatsby-source-filesystem' )
const path = require( 'path' )
const slugify = require( 'slugify' )

exports.createSchemaCustomization = ( { actions } ) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      permalink: String
    }
  `
  createTypes( typeDefs )
}

// Add slug for each mdx file in 'content'
exports.onCreateNode = ( { node, actions, getNode } ) => {
  const { createNodeField } = actions

  if ( node.internal.type === 'MarkdownRemark' ) {
    const slug = slugify(
      createFilePath( { node, getNode } ), {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      },
    )
    createNodeField( { node, value: slug, name: 'slug' } )
  }
}

exports.createPages = async ( { actions, graphql, reporter } ) => {
  const { createPage } = actions

  const result = await graphql( `
  query AllContentPages {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            layout
            permalink
          }
        }
      }
    }
  }
  ` )

  if ( result.errors ) reporter.panicOnBuild( '🚨  ERROR: Loading "createPages" query' )

  const pages = result.data.allMarkdownRemark.edges

  // Call `createPage` for each page
  pages
    .filter( ( { node: { frontmatter: { layout } } } ) => layout )
    .forEach( ( { node: {
      id,
      frontmatter,
      fields: { slug },
    } } ) => {
      const pageLink = frontmatter.permalink || slug
      createPage( {
        path: pageLink,
        component: path.resolve( `src/templates/${frontmatter.layout}.js` ),
        context: { id },
      } )
    } )
}
