import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
