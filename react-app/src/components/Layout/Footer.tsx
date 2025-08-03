import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer className="footer">
      {/* Links */}
      <div className="footer-seperator">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-2 sm-margin-b-50">
              {/* List */}
              <ul className="list-unstyled footer-list">
                <li className="footer-list-item"><Link className="footer-list-link" to="/">Home</Link></li>
                <li className="footer-list-item"><Link className="footer-list-link" to="/about">About</Link></li>
                <li className="footer-list-item"><Link className="footer-list-link" to="/products">Products</Link></li>
                <li className="footer-list-item"><Link className="footer-list-link" to="/pricing">Pricing</Link></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">Clients</a></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">Careers</a></li>
                <li className="footer-list-item"><Link className="footer-list-link" to="/contact">Contact</Link></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">Terms</a></li>
              </ul>
              {/* End List */}
            </div>
            <div className="col-sm-4 sm-margin-b-30">
              {/* List */}
              <ul className="list-unstyled footer-list">
                <li className="footer-list-item"><a className="footer-list-link" href="#">Twitter</a></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">Facebook</a></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">Instagram</a></li>
                <li className="footer-list-item"><a className="footer-list-link" href="#">YouTube</a></li>
              </ul>
              {/* End List */}
            </div>
            <div className="col-sm-5 sm-margin-b-30">
              <h2 className="color-white">Send Us A Note</h2>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  className="form-control footer-input margin-b-20" 
                  placeholder="Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  className="form-control footer-input margin-b-20" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  className="form-control footer-input margin-b-20" 
                  placeholder="Phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
                <textarea 
                  className="form-control footer-input margin-b-30" 
                  rows={6} 
                  placeholder="Message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="btn-theme btn-theme-sm btn-base-bg text-uppercase">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Links */}

      {/* Copyright */}
      <div className="content container">
        <div className="row">
          <div className="col-xs-6">
            <img className="footer-logo" src="/img/logo.png" alt="Asentus Logo" />
          </div>
          <div className="col-xs-6 text-right">
            <p className="margin-b-0">
              <a className="color-base fweight-700" href="http://keenthemes.com/preview/asentus/">Asentus</a> 
              {' '}Theme Powered by: {' '}
              <a className="color-base fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a>
            </p>
          </div>
        </div>
      </div>
      {/* End Copyright */}
    </footer>
  );
};

export default Footer;