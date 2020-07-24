/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    typography: theme => ( {
      default: {
        css: {
          color: '#ffffff',
          h1: {
            color: '#ffffff',
            fontWight: '900',
          },
          h2: {
            color: '#ffffff',
          },
          thead: {
            color: '#ffffff',
          },
          a: {
            color: theme( 'colors.red.600' ),
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              color: '#ffffff',
            },
          },
          p: {
            fontSize: '1.05rem',
            lineHeight: 1.4,
          },
          li: {
            margin: 0,
          },
        },
      },
    } ),
  },
  variants: {},
  plugins: [
    require( '@tailwindcss/typography' ),
  ],
}
