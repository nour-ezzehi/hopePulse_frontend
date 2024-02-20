import React from 'react'
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Logo = () => {
  return (
    <AnchorLink href="#top">
    <Link to="/" className="-m-1.5 p-1.5 flex items-center hover:text-secondary text-primary">
      <img className="h-10 w-auto mr-2" src="../images/logo.png" alt="hopepulse Logo" />
      <span className="text-2xl font-semibold">hopepulse</span>
    </Link>
    </AnchorLink>
  )
}

export default Logo
