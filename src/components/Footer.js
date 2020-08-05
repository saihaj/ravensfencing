import React from 'react'

const Footer = () => (
  <footer>
    <nav className="flex justify-between max-w-6xl p-4 mx-auto text-sm text-gray-600 md:px-10 font-andika">
      <p>Designed by Ravens Fencing Team</p>
      <p>© {new Date().getFullYear()} Ravens Fencing</p>
    </nav>
  </footer>
)

export default Footer
