import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current page is home page (has hero carousel)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update body class based on scroll state and page type
    // On inner pages (non-home), always show the page-on-scroll state
    // On home page, only show it when scrolled
    if (!isHomePage || isScrolled) {
      document.body.classList.add('page-on-scroll');
    } else {
      document.body.classList.remove('page-on-scroll');
    }
  }, [isScrolled, isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header navbar-fixed-top">
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="menu-container">
            <button 
              type="button" 
              className="navbar-toggle" 
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="toggle-icon"></span>
            </button>

            <div className="logo">
              <Link className="logo-wrap" to="/">
                <img className="logo-img logo-img-main" src="/img/logo.png" alt="Asentus Logo" />
                <img className="logo-img logo-img-active" src="/img/logo-dark.png" alt="Asentus Logo" />
              </Link>
            </div>
          </div>

          <div className={`collapse navbar-collapse nav-collapse ${isMobileMenuOpen ? 'in' : ''}`}>
            <div className="menu-container">
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/')}`} 
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/pricing')}`} 
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/about')}`} 
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/products')}`} 
                    to="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/faq')}`} 
                    to="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-item-child nav-item-hover ${isActive('/contact')}`} 
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;