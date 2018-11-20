import React from 'react';
import TopNav from './topnav';
import JoinModule from './joinModule';
import '../css/join.scss';
import '../css/paper.scss';

const Join = () => (
  <section className="join">
    <TopNav />
    <JoinModule />
  </section>
);

export default Join;
