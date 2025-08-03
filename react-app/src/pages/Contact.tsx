import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Page Title */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Contact Us</h1>
              <p>Get in touch with us for any questions or inquiries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="content-lg container">
        <div className="row">
          <div className="col-sm-8">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="margin-b-20">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name *" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="margin-b-20">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email *" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="margin-b-20">
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="Phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="margin-b-20">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="margin-b-20">
                <textarea 
                  className="form-control" 
                  rows={8} 
                  placeholder="Message *" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-theme btn-theme-sm btn-base-bg text-uppercase">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="col-sm-4">
            <h2>Contact Information</h2>
            <div className="margin-b-30">
              <h4><i className="icon-pointer margin-r-10"></i>Address</h4>
              <p>123 Business Street<br />
                 City, State 12345<br />
                 United States</p>
            </div>
            
            <div className="margin-b-30">
              <h4><i className="icon-phone margin-r-10"></i>Phone</h4>
              <p>+1 (555) 123-4567<br />
                 +1 (555) 987-6543</p>
            </div>
            
            <div className="margin-b-30">
              <h4><i className="icon-envelope margin-r-10"></i>Email</h4>
              <p>info@company.com<br />
                 support@company.com</p>
            </div>
            
            <div className="margin-b-30">
              <h4><i className="icon-clock margin-r-10"></i>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                 Saturday: 10:00 AM - 4:00 PM<br />
                 Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row margin-t-40">
          <div className="col-sm-12">
            <h2>Find Us</h2>
            <div className="margin-t-20" style={{height: '400px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p className="text-muted">Map would be integrated here (Google Maps, OpenStreetMap, etc.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;