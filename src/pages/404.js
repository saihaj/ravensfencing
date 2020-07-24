import React from 'react'

import Layout from '../components/Layout'
import engarde from '../images/engarde.svg'
import { notFoundKeywords } from '../lib/keywords'

const NotFoundPage = () => (
  <Layout
    seoTitle="404: Not found"
    customStyles="flex items-center"
    seoKeywords={notFoundKeywords}
  >
    <div className="flex flex-col">
      <img
        alt="Engarde"
        className="block mx-auto w-11/12 md:w-4/6 md:mt-0 -mt-40"
        src={engarde}
      />
      <h2 className="text-xl text-center font-bold inline-block">
        Looks like the page you were searching for does not exist...
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
