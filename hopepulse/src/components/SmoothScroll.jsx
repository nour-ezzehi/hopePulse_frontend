import React, { useEffect } from 'react';

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
  }, []);

  return null;
};

export default SmoothScroll;
