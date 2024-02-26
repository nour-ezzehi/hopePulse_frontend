import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyStartWithUs from '../components/WhyStartWithUs';

const WhyStartWithUsPage = () => {
  return (
    <>
      <Navbar />
      <WhyStartWithUs />
      <Footer scrollToTop={false}/>
    </>
  );
};

export default WhyStartWithUsPage;
