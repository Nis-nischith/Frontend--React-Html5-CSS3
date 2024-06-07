// src/components/QuickActions.js
import React from 'react';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h4>Quick Actions</h4>
      <div id="hibye"><button><i className="fas fa-bookmark"></i> <br />Create Indents</button></div>
      <div id="hibye"><button><i className="fas fa-trailer"></i> <br />Add Trailer</button></div>
      <div id="hibye"><button><i className="fas fa-truck"></i> <br />Add Vehicle</button></div>
      <div id="hibye"><button><i className="fas fa-user"></i><br /> Add Driver</button></div>
      <div id="hibye"><button><i className="fas fa-truck"></i><br /> Add Indents</button></div>
    </div>
  );
};

export default QuickActions;
