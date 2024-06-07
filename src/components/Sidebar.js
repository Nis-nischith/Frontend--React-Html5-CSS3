// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">

      <li class="logo">
    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="30" r="20" stroke="red" stroke-width="3" fill="transparent" />
      <circle cx="30" cy="70" r="20" stroke="blue" stroke-width="3" fill="transparent" />
      <circle cx="70" cy="70" r="20" stroke="green" stroke-width="3" fill="transparent" />
    </svg>
  </li>

        <li class="sidebar-item"><i class="fas fa-tachometer-alt" alt="Dashboard"></i></li>
        <li class="sidebar-item"><i class="fas fa-box" alt="Orders"></i></li>
        <li class="sidebar-item"><i class="fas fa-route" alt="Trips"></i></li>
        <li class="sidebar-item"><i class="fas fa-chart-line" alt="Revenue"></i></li>
        <li class="sidebar-item"><i class="fas fa-money-bill-wave" alt="Expenses"></i></li>
        <li class="sidebar-item"><i class="fas fa-truck" alt="Trucks"></i></li>
        <li class="sidebar-item"><i class="fas fa-user-tie" alt="Driver"></i></li>
        <li class="sidebar-item"><i class="fas fa-user" alt="User"></i></li>
        <li class="sidebar-item"><i class="fas fa-wallet" alt="pay"></i></li>
        <li class="sidebar-item"><i class="fas fa-trailer" alt="Trailer"></i></li>
        <li class="sidebar-item"><i class="fas fa-shopping-cart" alt="Checkout"></i></li>
      </ul>
    </div>
  );
};

export default Sidebar;
