import React from 'react'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
  <div className="bg-fafafa">
    <Header />
    <HeroSection />
    <Footer scrollToTop={true}/>
  </div>
  )
}

export default Layout
