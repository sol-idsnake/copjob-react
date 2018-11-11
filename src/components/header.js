import React from 'react';
import '../css/header.scss';

const Header = () => (
  <section className="header">
    <div className="upper">
      <h1>Find a </h1>
      <h1>
        <em>Cop Job</em>
      </h1>
    </div>
    <div className="lower">
      <h1>Currently available in: Florida</h1>
    </div>
  </section>
);

export default Header;
