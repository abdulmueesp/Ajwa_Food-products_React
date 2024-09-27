import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Layout from "../Components/Layout.jsx"
import Contact from '../Pages/Contact.jsx'
import Help from '../Pages/Help.jsx'


const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>} />
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default MainRouter
