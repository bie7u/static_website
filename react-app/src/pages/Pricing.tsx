import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter Kit',
      price: 49,
      icon: 'icon-chemistry',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      features: ['Basic Features', 'Up to 5 products', '50 Users Panels', 'Email Support', '1 GB Storage'],
      isPopular: false
    },
    {
      id: 2,
      name: 'Professional',
      price: 149,
      icon: 'icon-badge',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      features: ['All Basic Features', 'Up to 100 products', '100 Users Panels', 'Priority Support', '10 GB Storage', 'Advanced Analytics'],
      isPopular: true
    },
    {
      id: 3,
      name: 'Advanced',
      price: 249,
      icon: 'icon-shield',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      features: ['All Professional Features', 'Unlimited products', 'Unlimited Users Panels', '24/7 Support', 'Unlimited Storage', 'Custom Integrations', 'White Label'],
      isPopular: false
    }
  ];

  return (
    <div>
      {/* Page Title */}
      <div className="bg-color-sky-light">
        <div className="content-lg container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Pricing Plans</h1>
              <p>Choose the perfect plan for your business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="content-lg container">
        <div className="row row-space-1">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-sm-4 sm-margin-b-2">
              <div className={`pricing ${plan.isPopular ? 'pricing-active' : ''}`}>
                {plan.isPopular && (
                  <div className="pricing-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="margin-b-30">
                  <i className={`pricing-icon ${plan.icon}`}></i>
                  <h3>{plan.name} <span> - $</span> {plan.price}</h3>
                  <p>{plan.description}</p>
                </div>
                <ul className="list-unstyled pricing-list margin-b-50">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="pricing-list-item">{feature}</li>
                  ))}
                </ul>
                <button className="btn-theme btn-theme-sm btn-default-bg text-uppercase">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="row margin-t-50">
          <div className="col-sm-12">
            <h2 className="text-center margin-b-40">Frequently Asked Questions</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-6">
            <div className="margin-b-30">
              <h4>Can I upgrade my plan anytime?</h4>
              <p>Yes, you can upgrade your plan at any time. The upgrade will be prorated and you'll only pay the difference.</p>
            </div>
            <div className="margin-b-30">
              <h4>Is there a setup fee?</h4>
              <p>No, there are no setup fees. You only pay the monthly or annual subscription fee.</p>
            </div>
            <div className="margin-b-30">
              <h4>Do you offer refunds?</h4>
              <p>Yes, we offer a 30-day money-back guarantee for all our plans.</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="margin-b-30">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="margin-b-30">
              <h4>Can I cancel anytime?</h4>
              <p>Yes, you can cancel your subscription at any time. No questions asked.</p>
            </div>
            <div className="margin-b-30">
              <h4>Do you offer discounts for annual billing?</h4>
              <p>Yes, save 20% when you choose annual billing on any plan.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row margin-t-50">
          <div className="col-sm-12 text-center">
            <h3>Still have questions?</h3>
            <p>Our team is here to help you choose the right plan.</p>
            <Link to="/contact" className="btn-theme btn-theme-sm btn-base-bg text-uppercase margin-r-20">
              Contact Sales
            </Link>
            <Link to="/faq" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;