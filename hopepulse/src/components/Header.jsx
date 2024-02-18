import React from 'react';
import SCButton from './SCButton';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="custom-height bg-cover bg-no-repeat" style={{ backgroundImage: `url('../images/bg-image.png')`}}>
      <div className="mx-auto px-4 py-8">
        <header className="bg-fafafa border-double border-grayish rounded-full">
          <Navbar/>
        </header>
        <SCButton />
        <h1 className="text-3xl font-bold text-fafafa text-center -mt-12">Pulsating Hope, Changing Lives</h1>
      </div>
    </div>
  );
};

export default Header;
