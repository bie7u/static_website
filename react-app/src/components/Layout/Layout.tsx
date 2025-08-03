import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '../BackToTop/BackToTop';

const Layout: React.FC = () => {
  useEffect(() => {
    // Initialize layout-specific functionality
    const handleAutoHeight = () => {
      const autoHeightElements = document.querySelectorAll('[data-auto-height]');
      autoHeightElements.forEach((element) => {
        const heightElements = element.querySelectorAll('[data-height]');
        let maxHeight = 0;
        const mode = element.getAttribute('data-mode');
        const offset = parseInt(element.getAttribute('data-offset') || '0');

        heightElements.forEach((heightElement) => {
          if (heightElement.getAttribute('data-height') === 'height') {
            (heightElement as HTMLElement).style.height = '';
          } else {
            (heightElement as HTMLElement).style.minHeight = '';
          }

          const currentHeight = mode === 'base-height' 
            ? (heightElement as HTMLElement).offsetHeight 
            : (heightElement as HTMLElement).offsetHeight;
          
          if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
          }
        });

        maxHeight += offset;

        heightElements.forEach((heightElement) => {
          if (heightElement.getAttribute('data-height') === 'height') {
            (heightElement as HTMLElement).style.height = maxHeight + 'px';
          } else {
            (heightElement as HTMLElement).style.minHeight = maxHeight + 'px';
          }
        });

        // Handle related elements
        const relatedSelector = element.getAttribute('data-related');
        if (relatedSelector) {
          const relatedElement = document.querySelector(relatedSelector);
          if (relatedElement) {
            (relatedElement as HTMLElement).style.height = (element as HTMLElement).offsetHeight + 'px';
          }
        }
      });
    };

    // Initial call
    handleAutoHeight();

    // Handle window resize
    const handleResize = () => {
      handleAutoHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;