// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Highlights from './Highlights';
import Alerts from './Alerts';
import QuickActions from './QuickActions';
import ChartCard from './ChartCard';
import Navigation from './navigation';

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <h1 className='semi-main'>Dashboard <Navigation /></h1>
      <div className="please"><Sidebar /></div>
      <main className='main'>
        <div className="cards">
          <ChartCard title="Orders" data={[50, 100, 50]} />
          <ChartCard title="Trips" data={[50, 100, 50]} />
          <ChartCard title="Revenue" data={[50, 100, 50]} />
          <ChartCard title="Expenses" data={[50, 100, 50]} />
        </div>
        <div className="semi-main">
        <QuickActions />
        <Alerts />
        </div>
        <Highlights />
      </main>
    </div>
  );
};

export default Dashboard;
