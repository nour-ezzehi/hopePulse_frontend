import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Campaign from '../components/Campaign'

const CampaignRecievedPage = () => {
  return (
    <>
      <Navbar scrollToTop={false}/>
      <div className='m-12 flex auto-mx flex-col'>
        <h1 className="text-xl text-center mb-20">Congratulations! Your campaign has been successfully created</h1>
        <Campaign />
      </div>
      <Footer scrollToTop={false}/>
    </>
  )
}

export default CampaignRecievedPage
