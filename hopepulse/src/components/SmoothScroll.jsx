import React, { useEffect } from 'react'; // Import useEffect from React

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };

    smoothScroll();
  }, []); // Add an empty dependency array to useEffect

  return null; // SmoothScroll doesn't render anything
};

export default SmoothScroll;
