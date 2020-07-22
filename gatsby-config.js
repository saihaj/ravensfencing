/* eslint-disable global-require */
const resolveConfig = require( 'tailwindcss/resolveConfig' )
const tailwindConfig = require( './tailwind.config.js' )

const fullConfig = resolveConfig( tailwindConfig )

module.exports = {
  siteMetadata: {
    title: 'Ravens Fencing',
    description: 'The Carleton University Fencing Club',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carleton University Fencing Club',
        short_name: 'CUFC',
        start_url: '/',
        background_color: fullConfig.theme.colors.gray[ '900' ],
        theme_color: fullConfig.theme.colors.red[ '600' ],
        icon: 'src/images/tailwind-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require( 'tailwindcss' )( tailwindConfig ),
          require( 'autoprefixer' ),
          ...( process.env.NODE_ENV === 'production'
            ? [ require( 'cssnano' ) ]
            : [] ),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        develop: true,
      },
    },
  ],
}
