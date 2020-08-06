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
        background_color: fullConfig.theme.colors.black,
        theme_color: fullConfig.theme.colors.primary.red,
        icon: 'src/images/ravens-icon.png',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-anywhere',
            options: {
              staticDir: 'src/images',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-164560585-3',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Viga',
          'Andika',
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     tailwind: true,
    //     develop: true,
    //   },
    // },
    'gatsby-plugin-netlify-cms', // make sure to keep it last in the array
  ],
}
