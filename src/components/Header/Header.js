import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='header'>
    <div className='logo'>
      RESTy
    </div>
    <nav>
      <ul className='nav-list'>
        <li className='nav-link'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link to='/history'>History</Link>
        </li>
        <li className='nav-link'>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
    </nav>
  </header>;
};

export default Header;