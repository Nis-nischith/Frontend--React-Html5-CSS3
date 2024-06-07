// src/components/Alerts.js
import React from 'react';

const Alerts = () => {
  return (
    <div className="alerts">
      <h3 style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        High Priority Alerts(14)
        <a href='' style={{ marginLeft: 'auto' }}>View All</a>
      </h3>
      <div className="alert">
      <span><i className="fas fa-user"></i></span><b> Driver Raised Concern</b>
      <span><p>Load number : xyz</p></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Ignore</button>
        <button>Resolve</button>
      </div>
      <div className="alert" id='alerting'>
      <span><i className="fas fa-thermometer-full"></i></span><b> Reefer Temp. out of range</b>
      <span><p>load number : xyz</p></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Ignore</button>
        <button>Resolve</button>
      </div>
      {/* Add more alerts as needed */}
    </div>
  );
};

export default Alerts;
