import React from 'react';
import TopNav from './topnav';
import Login from './login';
import Register from './register';
import '../css/join.scss';
import '../css/paper.scss';

const Join = () => (
  <section className="join">
    <TopNav />
    <div className="paper">
      <Login />
      <hr />
      <Register />
    </div>
  </section>
);

export default Join;
