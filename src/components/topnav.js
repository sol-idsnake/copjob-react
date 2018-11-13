import React from 'react';
import { Link } from 'react-router-dom';
import '../css/topnav.scss';

const TopNav = () => (
  <div className="top">
    <div className="logo">
      <h4>CopJob</h4>
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/join">Login</Link>
    </nav>
  </div>
);

export default TopNav;
