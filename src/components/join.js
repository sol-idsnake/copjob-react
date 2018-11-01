import React from 'react';
import { Link } from 'react-router-dom';
import '../css/join.scss';

const Join = props => (
  <section className="join">
    <div className="top">
      <div className="logo">
        <h4>CopJob</h4>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  </section>
);

export default Join;
