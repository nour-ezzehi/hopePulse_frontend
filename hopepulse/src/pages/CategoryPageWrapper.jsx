import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CategoryPageWrapper = () => {
  const { category } = useParams();
  return (
    <>
      <Navbar scrollToTop={false} />
      <CategoryPage category={category} />
      <Footer scrollToTop={false} />
    </>
  )
};

export default CategoryPageWrapper;
