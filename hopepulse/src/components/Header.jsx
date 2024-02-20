import React from 'react';
import SCButton from './SCButton';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div  id="top" className="custom-height bg-cover bg-no-repeat" style={{ backgroundImage: `url('../images/bg-image.png')`}}>
      <div className="mx-auto px-4 py-8">
        <header className="bg-fafafa border-double border-grayish rounded-full">
          <Navbar/>
        </header>
        <div className='mt-48'>
        <SCButton textColor="primary" heartColor="primary" buttonColor="fafafa" hoverColor="grayish"/>
        </div>

      </div>
      <h1 className="text-3xl font-bold text-fafafa text-center -mt-40">Pulsating Hope, Changing Lives</h1>
    </div>
  );
};

export default Header;
