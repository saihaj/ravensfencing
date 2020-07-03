/* eslint-disable global-require */
const resolveConfig = require( 'tailwindcss/resolveConfig' )
const tailwindConfig = require( './tailwind.config.js' )

const fullConfig = resolveConfig( tailwindConfig )

module.exports = {
  siteMetadata: {
    title: 'Ravens Fencing',
    description: 'The Carleton University Fencing Club',
    author: '@saihaj',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
  ],
}
