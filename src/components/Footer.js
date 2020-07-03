import React from 'react'
import moment from 'moment'

const Footer = () => (
  <footer>
    <nav className="flex justify-between max-w-6xl p-4 mx-auto text-sm text-gray-600 md:px-10">
      <p>Designed by Ravens Fencing Team</p>
      <p>© {moment().format( 'YYYY' )} Ravens Fencing</p>
    </nav>
  </footer>
)

export default Footer
