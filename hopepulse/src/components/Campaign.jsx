import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormAction from './FormAction';
import ListBox from './ListBox'; // Import the ListBox component
import Logo from './Logo';
import { categories } from '../constants/categories';

const handleSubmit = (e) => {
  e.preventDefault();
};

const Campaign = () => {
  const [selected, setSelected] = useState(categories[0]); // Default selection

  return (
    <>
      <div className="flex flex-col justify-center container mx-auto">
        <div className="container mx-auto my-16">
          <Logo />
        </div>
        <div className="border border-solid border-grayish">
        <div className="relative text-center">
          <ListBox selected={selected} setSelected={setSelected} options={categories} />
        </div>
        <FormAction handleSubmit={handleSubmit} text="Start The Campaign" />
      </div>
    </div>
    </>
  );
};

export default Campaign;
