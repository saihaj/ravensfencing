import React from 'react'

import Layout from '../components/layout'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'

const IndexPage = () => (
  <Layout seoTitle="Home" seoKeywords={[ 'gatsby', 'tailwind', 'react', 'tailwindcss' ]}>

    <section className="text-center">
      <img
        alt="Cat and human sitting on a couch"
        className="block w-1/2 mx-auto mb-5"
        src={catAndHumanIllustration}
      />

      <h2 className="inline-block p-5 mb-5 text-2xl font-bold bg-yellow-300 rounded-full">
        Hey there! Welcome to your first Gatsby site.
      </h2>

      <p className="leading-loose">
        This is a barebones starter for Gatsby styled using{' '}
        <a
          className="font-bold text-gray-900 no-underline"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , a utility-first CSS framework.
      </p>
    </section>
  </Layout>
)

export default IndexPage
