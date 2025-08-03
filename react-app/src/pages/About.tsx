import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-12">
              <h1>About Us</h1>
              <p>Learn more about our company and mission</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="content-lg container">
        <div className="row margin-b-40">
          <div className="col-sm-6">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-sm-6">
            <img className="img-responsive" src="/img/970x647/01.jpg" alt="About Us" />
          </div>
        </div>

        <div className="row margin-b-40">
          <div className="col-sm-6">
            <img className="img-responsive" src="/img/970x647/02.jpg" alt="Our Mission" />
          </div>
          <div className="col-sm-6">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul>
              <li>Provide high-quality services</li>
              <li>Deliver exceptional customer experience</li>
              <li>Innovate and stay ahead of trends</li>
              <li>Build long-lasting relationships</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center margin-b-40">Meet Our Team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 sm-margin-b-50">
            <div className="text-center">
              <img className="img-responsive margin-b-20" src="/img/397x400/01.jpg" alt="Team Member" style={{borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto'}} />
              <h4>John Doe</h4>
              <p className="color-link">CEO & Founder</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna.</p>
            </div>
          </div>
          <div className="col-sm-4 sm-margin-b-50">
            <div className="text-center">
              <img className="img-responsive margin-b-20" src="/img/397x400/02.jpg" alt="Team Member" style={{borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto'}} />
              <h4>Jane Smith</h4>
              <p className="color-link">CTO</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna.</p>
            </div>
          </div>
          <div className="col-sm-4 sm-margin-b-50">
            <div className="text-center">
              <img className="img-responsive margin-b-20" src="/img/397x400/03.jpg" alt="Team Member" style={{borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto'}} />
              <h4>Mike Johnson</h4>
              <p className="color-link">Lead Developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;