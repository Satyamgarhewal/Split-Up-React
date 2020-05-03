import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './navbar.css';
import SplitUpStrings from '../../utils/splitUpStrings';
const {
  MENU_STRING_INDIVIDUAL,
  MENU_STRING_GROUPS,
  MENU_STRING_ACTIVITIES,
} = SplitUpStrings;
function Navbar() {
  return (
    <div>
      <ul className="navbarContainer">
        <Link to="/individual">
          <li className="navbarList">{MENU_STRING_INDIVIDUAL}</li>
        </Link>

        <Link to="/groups">
          <li className="navbarList">{MENU_STRING_GROUPS}</li>
        </Link>

        <Link to="/activities">
          <li className="navbarList">{MENU_STRING_ACTIVITIES}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
