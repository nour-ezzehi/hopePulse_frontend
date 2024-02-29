import React from 'react'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
  <div className="">
    <Header />
    <Home/>
    <Footer scrollToTop={true}/>
  </div>
  )
}

export default Layout
