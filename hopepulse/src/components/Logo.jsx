import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Logo = ({ scrollToTop }) => {
  if (scrollToTop) {
    return (
      <AnchorLink href="#top">
        <div className="-m-1.5 p-1.5 flex items-center hover:text-secondary text-primary">
          <img className="h-10 w-auto mr-2" src='../images/logo.png' alt="hopepulse Logo" />
          <span className="text-2xl font-semibold">hopepulse</span>
        </div>
      </AnchorLink>
    );
  } else {
    return (
      <Link to="/" className="-m-1.5 p-1.5 flex items-center hover:text-secondary text-primary">
        <img className="h-10 w-auto mr-2" src='../images/logo.png' alt="hopepulse Logo" />
        <span className="text-2xl font-semibold">hopepulse</span>
      </Link>
    );
  }
};

export default Logo;
