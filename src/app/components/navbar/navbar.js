import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './navbar.css';
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/splitup/individual">
          <li>Individual</li>
        </Link>

        <Link to="/splitup/groups">
          <li>Groups</li>
        </Link>

        <Link to="/splitup/activities">
          <li>Activities</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
