import React, { Children } from 'react'
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
