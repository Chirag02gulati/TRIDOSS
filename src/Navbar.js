import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
function Navigation() {
  return (
    
    <nav className='yy'>
      <h1 className='hhh'>TRIDOSS</h1>
      <ul className='kk'>
      
        <li className='jj'><Link to="/HomePage">Home</Link></li>
        <li className='jj'><div className="dropdown">
      <button className="dropbtn">About</button>
      <div className="dropdown-content">
        <Link to="/Eduction">Education</Link>
        <Link to="/Health">Healthcare</Link>
        <Link to="/Enviourment">Enviourment</Link>
        <Link to="/Community">Community Development</Link>
      </div>
    </div></li>
        <li className='jj'><Link to="/contact">Sign in</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
