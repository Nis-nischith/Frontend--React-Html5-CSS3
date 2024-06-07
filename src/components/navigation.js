import React from 'react';
// import './Navigation.css'; // Import CSS file for styling (optional)

class Navigation extends React.Component {
  render() {
    return (
      <span className="navigation-container">
        <input type="text" className="search-bar" placeholder="Search" />
        <span className="expand-option"> <select placeholder="...">...</select></span>
      </span> 
    );
  }
}
export default Navigation;