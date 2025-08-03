import React, { useEffect } from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize animations and other effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.wow, [data-wow-duration]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <div className="bg-color-sky-light" data-auto-height="true">
        <div className="content-lg container">
          <div className="row row-space-1 margin-b-2">
            <div className="col-sm-4 sm-margin-b-2">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-chemistry"></i>
                  </div>
                  <div className="service-info">
                    <h3>Art Of Coding</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
            <div className="col-sm-4 sm-margin-b-2">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".2s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-screen-tablet"></i>
                  </div>
                  <div className="service-info">
                    <h3>Responsive Design</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".1s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-badge"></i>
                  </div>
                  <div className="service-info">
                    <h3>Feature Reach</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
          </div>

          <div className="row row-space-1">
            <div className="col-sm-4 sm-margin-b-2">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".4s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-notebook"></i>
                  </div>
                  <div className="service-info">
                    <h3>Useful Documentation</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
            <div className="col-sm-4 sm-margin-b-2">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-speedometer"></i>
                  </div>
                  <div className="service-info">
                    <h3>Fast Delivery</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".6s">
                <div className="service" data-height="height">
                  <div className="service-element">
                    <i className="service-icon icon-badge"></i>
                  </div>
                  <div className="service-info">
                    <h3>Free Plugins</h3>
                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                  </div>
                  <a href="#" className="content-wrapper-link"></a>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="content-lg container">
        <div className="row margin-b-40">
          <div className="col-sm-6">
            <h2>Latest Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                <img className="img-responsive" src="/img/970x647/01.jpg" alt="Latest Products Image" />
              </div>
            </div>
            <h4><a href="#">Triangle Roof</a> <span className="text-uppercase margin-l-20">Management</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
            <a className="link" href="#">Read More</a>
          </div>
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                <img className="img-responsive" src="/img/970x647/02.jpg" alt="Latest Products Image" />
              </div>
            </div>
            <h4><a href="#">Curved Corners</a> <span className="text-uppercase margin-l-20">Development</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
            <a className="link" href="#">Read More</a>
          </div>
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                <img className="img-responsive" src="/img/970x647/03.jpg" alt="Latest Products Image" />
              </div>
            </div>
            <h4><a href="#">Bird On Green</a> <span className="text-uppercase margin-l-20">Design</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
            <a className="link" href="#">Read More</a>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row row-space-1">
            <div className="col-sm-4 sm-margin-b-2">
              <div className="pricing">
                <div className="margin-b-30">
                  <i className="pricing-icon icon-chemistry"></i>
                  <h3>Starter Kit <span> - $</span> 49</h3>
                  <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                </div>
                <ul className="list-unstyled pricing-list margin-b-50">
                  <li className="pricing-list-item">Basic Features</li>
                  <li className="pricing-list-item">Up to 5 products</li>
                  <li className="pricing-list-item">50 Users Panels</li>
                </ul>
                <Link to="/pricing" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</Link>
              </div>
            </div>
            <div className="col-sm-4 sm-margin-b-2">
              <div className="pricing pricing-active">
                <div className="margin-b-30">
                  <i className="pricing-icon icon-badge"></i>
                  <h3>Professional <span> - $</span> 149</h3>
                  <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                </div>
                <ul className="list-unstyled pricing-list margin-b-50">
                  <li className="pricing-list-item">Basic Features</li>
                  <li className="pricing-list-item">Up to 100 products</li>
                  <li className="pricing-list-item">100 Users Panels</li>
                </ul>
                <Link to="/pricing" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing">
                <div className="margin-b-30">
                  <i className="pricing-icon icon-shield"></i>
                  <h3>Advanced <span> - $</span> 249</h3>
                  <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                </div>
                <ul className="list-unstyled pricing-list margin-b-50">
                  <li className="pricing-list-item">Extended Features</li>
                  <li className="pricing-list-item">Unlimited products</li>
                  <li className="pricing-list-item">Unlimited Users Panels</li>
                </ul>
                <Link to="/pricing" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="promo-section overflow-h">
        <div className="container">
          <div className="clearfix">
            <div className="ver-center">
              <div className="ver-center-aligned">
                <div className="promo-section-col">
                  <h2>Our Clients</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                  <p>Ipsum dolor sit amet consectetur adipiscing elit sed tempor incididut ut sead laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="promo-section-img-right">
          <img className="img-responsive" src="/img/970x970/01.jpg" alt="Content Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;