import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DonateFor from '../components/DonateFor'


const ForIndividualsPage = () => {
  return (
    <>
      <Navbar scrollToTop={false}/>
      <div>
        <DonateFor />
      </div>
      <Footer scrollToTop={false}/>
    </>
  )
}

export default ForIndividualsPage
