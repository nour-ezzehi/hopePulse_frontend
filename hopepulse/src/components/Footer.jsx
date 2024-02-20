import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <footer className="bg-fafafa text-primary p-8 border-t border-grayish"> {/* Added border here */}
        <div className="flex flex-wrap items-start">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">Fundraise for</h2>
            <ul className="list-none">
              <li><a href="/blog" className="text-grayish hover:text-primary block py-1">Emergency</a></li>
              <li><a href="/about" className="text-grayish hover:text-primary block py-1">Medical</a></li>
              <li><a href="/press" className="text-grayish hover:text-primary block py-1">Education</a></li>
              <li><a href="/jobs" className="text-grayish hover:text-primary block py-1">Environment</a></li>
              <li><a href="/jobs" className="text-grayish hover:text-primary block py-1">Animals</a></li>
              <li><a href="/jobs" className="text-grayish hover:text-primary block py-1">Arts and Culture</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">Solutions</h2>
            <ul className="list-none">
              <li><a href="/marketing" className="text-grayish hover:text-primary block py-1">Marketing</a></li>
              <li><a href="/analytics" className="text-grayish hover:text-primary block py-1">Analytics</a></li>
              <li><a href="/commerce" className="text-grayish hover:text-primary block py-1">Commerce</a></li>
              <li><a href="/insights" className="text-grayish hover:text-primary block py-1">Insights</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">Support</h2>
            <ul className="list-none">
              <li><a href="/pricing" className="text-grayish hover:text-primary block py-1">Pricing</a></li>
              <li><a href="/documentation" className="text-grayish hover:text-primary block py-1">Documentation</a></li>
              <li><a href="/guides" className="text-grayish hover:text-primary block py-1">Guides</a></li>
              <li><a href="/api-status" className="text-grayish hover:text-primary block py-1">API Status</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:text-left flex items-center justify-end">
            <a href="#">
            <Logo />
            </a>
          </div>
        </div>
          <div className="full border-t border-grayish my-6"></div>
          <div className="flex container md:justify-between items-center text-center mt-8">
            <p className="text-sm text-grayish mr-4">&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nour.zehi.18" className="text-grayish hover:text-primary">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com" className="text-grayish hover:text-primary">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/home" className="text-grayish hover:text-primary">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-grayish hover:text-primary">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
