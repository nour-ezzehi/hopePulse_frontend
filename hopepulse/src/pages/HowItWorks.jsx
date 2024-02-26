import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItHome from '../components/HowItHome';

const HowItWorks = () => {
  return (
    <>
      <Navbar />
      <HowItHome />
      <Footer scrollToTop={false}/>
    </>

  );
};

export default HowItWorks;
