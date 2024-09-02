import React from 'react';
import './App.css';

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header bg-primary text-white">{plan}</div>
      <div className="card-body">
        <h4 className="card-title">{price}/month</h4>
        <ul className="list-group list-group-flush">
          {features.map((feature, index) => (
            <li className={`list-group-item ${feature.isAvailable ? '' : 'text-muted'}`} key={index}>
              {feature.isAvailable ? '✔' : '✘'} {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
};


function App() {
  const pricingPlans = [
    {
      plan: 'FREE',
      price: '$0',
      features: [
        { name: 'Single User', isAvailable: true },
        { name: '50GB Storage', isAvailable: true },
        { name: 'Unlimited Public Projects', isAvailable: true },
        { name: 'Community Access', isAvailable: true },
        { name: 'Unlimited Private Projects', isAvailable: false },
        { name: 'Dedicated Phone Support', isAvailable: false },
        { name: 'Free Subdomain', isAvailable: false },
        { name: 'Monthly Status Reports', isAvailable: false },
      ],
    },
    {
      plan: 'PLUS',
      price: '$9',
      features: [
        { name: '5 Users', isAvailable: true },
        { name: '50GB Storage', isAvailable: true },
        { name: 'Unlimited Public Projects', isAvailable: true },
        { name: 'Community Access', isAvailable: true },
        { name: 'Unlimited Private Projects', isAvailable: true },
        { name: 'Dedicated Phone Support', isAvailable: true },
        { name: 'Free Subdomain', isAvailable: true },
        { name: 'Monthly Status Reports', isAvailable: false },
      ],
    },
    {
      plan: 'PRO',
      price: '$49',
      features: [
        { name: 'Unlimited Users', isAvailable: true },
        { name: '50GB Storage', isAvailable: true },
        { name: 'Unlimited Public Projects', isAvailable: true },
        { name: 'Community Access', isAvailable: true },
        { name: 'Unlimited Private Projects', isAvailable: true },
        { name: 'Dedicated Phone Support', isAvailable: true },
        { name: 'Free Subdomain', isAvailable: true },
        { name: 'Monthly Status Reports', isAvailable: true },
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-4">React Price Card Task</h1>
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <PriceCard plan={plan.plan} price={plan.price} features={plan.features} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
