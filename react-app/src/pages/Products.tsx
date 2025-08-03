import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Triangle Roof',
      category: 'Management',
      image: '/img/970x647/01.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    },
    {
      id: 2,
      title: 'Curved Corners',
      category: 'Development',
      image: '/img/970x647/02.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    },
    {
      id: 3,
      title: 'Bird On Green',
      category: 'Design',
      image: '/img/970x647/03.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    },
    {
      id: 4,
      title: 'Modern Architecture',
      category: 'Architecture',
      image: '/img/800x400/01.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    },
    {
      id: 5,
      title: 'Clean Interface',
      category: 'UI/UX',
      image: '/img/397x400/01.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    },
    {
      id: 6,
      title: 'Responsive Layout',
      category: 'Development',
      image: '/img/397x300/01.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor',
      link: '#'
    }
  ];

  const categories = ['All', 'Management', 'Development', 'Design', 'Architecture', 'UI/UX'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Page Title */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Our Products</h1>
              <p>Discover our latest products and solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Content */}
      <div className="content-lg container">
        {/* Filter Buttons */}
        <div className="row margin-b-40">
          <div className="col-sm-12 text-center">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn-theme btn-theme-sm margin-r-10 margin-b-10 ${
                    activeCategory === category ? 'btn-base-bg' : 'btn-white-brd'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-sm-4 sm-margin-b-50">
              <div className="margin-b-20">
                <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                  <img className="img-responsive" src={product.image} alt={product.title} />
                </div>
              </div>
              <h4>
                <a href={product.link}>{product.title}</a> 
                <span className="text-uppercase margin-l-20">{product.category}</span>
              </h4>
              <p>{product.description}</p>
              <a className="link" href={product.link}>Read More</a>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="row margin-t-50">
          <div className="col-sm-12">
            <h2 className="text-center margin-b-40">Why Choose Our Products?</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-center">
              <i className="service-icon icon-chemistry margin-b-20" style={{fontSize: '48px', color: '#3498db'}}></i>
              <h4>High Quality</h4>
              <p>All our products are built with the highest quality standards and attention to detail.</p>
            </div>
          </div>
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-center">
              <i className="service-icon icon-speedometer margin-b-20" style={{fontSize: '48px', color: '#3498db'}}></i>
              <h4>Fast Performance</h4>
              <p>Optimized for speed and performance to ensure the best user experience.</p>
            </div>
          </div>
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-center">
              <i className="service-icon icon-shield margin-b-20" style={{fontSize: '48px', color: '#3498db'}}></i>
              <h4>Secure & Reliable</h4>
              <p>Built with security in mind and thoroughly tested for reliability.</p>
            </div>
          </div>
          <div className="col-sm-3 sm-margin-b-30">
            <div className="text-center">
              <i className="service-icon icon-badge margin-b-20" style={{fontSize: '48px', color: '#3498db'}}></i>
              <h4>Award Winning</h4>
              <p>Recognized by industry experts and trusted by thousands of customers.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row margin-t-50">
          <div className="col-sm-12 text-center">
            <h3>Ready to get started?</h3>
            <p>Contact us to learn more about our products and how they can benefit your business.</p>
            <a href="#" className="btn-theme btn-theme-sm btn-base-bg text-uppercase margin-r-20">
              Get Started
            </a>
            <a href="#" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;