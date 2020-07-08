import React from 'react'

import Layout from '../components/Layout'
import NewsBox from '../components/NewsBox'

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

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          <div className="p-4 md:w-1/3">
            <NewsBox newsTitle="fasdkfj;" permalink="news" excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>

          <div className="p-4 md:w-1/3">
            <NewsBox newsTitle="Testing" permalink="news" excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>

          <div className="p-4 md:w-1/3">
            <NewsBox newsTitle="Testing" permalink="news" excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>

        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
