// src/components/Highlights.js
import React from 'react';

const Highlights = () => {
  return (
    <div className="highlights">
      <h3>Today's Highlights (14)</h3>
      <div className="highlight">
        <div className='Income'>Income <br /><span id="lakh"> 100000 CAD</span><br /><span> 2 payments received</span></div>
        <div className='Expenses'>Expenses<br /><span id="fiftyk"> 50000 CAD</span><br /><span>5 payments paid</span></div>
      </div>
      <h4 style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} className='fin'>
        Completed Activities(14)
        <a href='' style={{ marginLeft: 'auto' }}>View All</a>
      </h4>
      <div className="activity">
        <div id="n1">
          <p><a href=''>Gurpreet Singh</a> <span id="team">(Dispatch team) has created </span><span id="load1">Load No. 1-1-AAA-1325</span></p> 
        </div>
        <div id="n2">
        <p><a href=''>Aman</a><span id="load2"> (Driver) <b>Picked UP</b> goods at <b>Location_Name</b> for <b>Load No. 1-1-AAA-1325</b></span></p>
        </div>
        <div id="n3">
          <p><b id='text2'>Load No. 1-1-AAA-1325 </b><span id='load3'>will start added by <a href=''>Gurpreet Singh</a></span></p> 
        </div>
        <div id="n4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <h4 style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} className='fin'>
        Scheduled Activities(14)
        <a href='' style={{ marginLeft: 'auto' }}>View All</a>
      </h4>
      <div className="activity">
        <div id="n1">
          <p><a href=''>Gurpreet Singh</a> <span id="team">(Dispatch team) has created </span><span id="load1">Load No. 1-1-AAA-1325</span></p> 
        </div>
        <div id="n2">
        <p><a href=''>Aman</a><span id="load2"> (Driver) <b>Picked UP</b> goods at <b>Location_Name</b> for <b>Load No. 1-1-AAA-1325</b></span></p>
        </div>
        <div id="n3">
          <p><b id='text2'>Load No. 1-1-AAA-1325 </b><span id='load3'>will start added by <a href=''>Gurpreet Singh</a></span></p> 
        </div>
        <div id="n4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Add more highlights and activities as needed */}
    </div>
  );
};

export default Highlights;


