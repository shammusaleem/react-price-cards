import React from 'react';

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

export default PriceCard;
