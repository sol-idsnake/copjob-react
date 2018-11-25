import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from './async/asyncComponent';
import LandingPage from './landingpage';

const AsyncJoin = asyncComponent(() => import('./join'));

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/join" component={AsyncJoin} />
    </div>
  </Router>
);

export default App;
