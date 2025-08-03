import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What is included in your services?',
      answer: 'Our services include comprehensive web development, design consultation, ongoing maintenance, and technical support. We also provide training and documentation to help your team get the most out of your new website.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. We provide detailed timelines during the planning phase.',
      category: 'Projects'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer various maintenance packages to keep your website secure, updated, and running smoothly. Our support includes regular backups, security updates, content updates, and technical assistance.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'We offer transparent pricing based on project scope and requirements. We provide detailed quotes after understanding your needs. We also offer flexible payment plans and ongoing maintenance packages.',
      category: 'Pricing'
    },
    {
      id: 5,
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! We work closely with your existing brand guidelines and can help enhance them if needed. Our designers ensure that your website reflects your brand identity consistently.',
      category: 'Design'
    },
    {
      id: 6,
      question: 'Do you offer mobile app development?',
      answer: 'Yes, we develop native and cross-platform mobile applications for iOS and Android. We also specialize in progressive web apps (PWAs) that work seamlessly across all devices.',
      category: 'Development'
    },
    {
      id: 7,
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Node.js, Python, PHP, and various databases. We choose the best technology stack based on your specific requirements.',
      category: 'Technical'
    },
    {
      id: 8,
      question: 'Do you provide SEO services?',
      answer: 'Yes, we include basic SEO optimization in all our projects. We also offer comprehensive SEO services including keyword research, content optimization, and ongoing SEO monitoring.',
      category: 'Marketing'
    },
    {
      id: 9,
      question: 'Can you migrate our existing website?',
      answer: 'Yes, we can migrate your existing website to a new platform while preserving your content, SEO rankings, and ensuring minimal downtime during the transition.',
      category: 'Technical'
    },
    {
      id: 10,
      question: 'What if we need changes after the project is completed?',
      answer: 'We provide training on how to make basic content updates yourself. For more complex changes, we offer post-launch support packages or can quote individual change requests.',
      category: 'Support'
    }
  ];

  const categories = ['All', 'General', 'Projects', 'Support', 'Pricing', 'Design', 'Development', 'Technical', 'Marketing'];

  const filteredItems = activeCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
      {/* Page Title */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Frequently Asked Questions</h1>
              <p>Find answers to common questions about our services</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="content-lg container">
        {/* Category Filter */}
        <div className="row margin-b-40">
          <div className="col-sm-12">
            <h3>Browse by Category</h3>
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

        {/* FAQ Items */}
        <div className="row">
          <div className="col-sm-12">
            <div className="faq-list">
              {filteredItems.map((item) => (
                <div key={item.id} className="faq-item margin-b-20">
                  <div 
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                    style={{
                      padding: '20px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <h4 style={{ margin: 0, fontWeight: '500' }}>{item.question}</h4>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {openItem === item.id ? '−' : '+'}
                    </span>
                  </div>
                  {openItem === item.id && (
                    <div 
                      className="faq-answer"
                      style={{
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e9ecef',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px'
                      }}
                    >
                      <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>
                        {item.answer}
                      </p>
                      <span 
                        className="badge" 
                        style={{
                          backgroundColor: '#3498db',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          marginTop: '10px',
                          display: 'inline-block'
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="row margin-t-50">
          <div className="col-sm-12 text-center">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Our team is here to help.</p>
            <a href="/contact" className="btn-theme btn-theme-sm btn-base-bg text-uppercase margin-r-20">
              Contact Us
            </a>
            <a href="mailto:support@company.com" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">
              Email Support
            </a>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="row margin-t-50">
          <div className="col-sm-12">
            <h3>Popular Topics</h3>
            <div className="row">
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li><a href="#" className="link">Getting Started</a></li>
                  <li><a href="#" className="link">Account Management</a></li>
                  <li><a href="#" className="link">Billing & Payments</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li><a href="#" className="link">Technical Support</a></li>
                  <li><a href="#" className="link">Feature Requests</a></li>
                  <li><a href="#" className="link">API Documentation</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li><a href="#" className="link">Security & Privacy</a></li>
                  <li><a href="#" className="link">Integration Help</a></li>
                  <li><a href="#" className="link">Best Practices</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;