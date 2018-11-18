import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from './async/asyncComponent';
import LandingPage from './landingpage';
// import Join from './join';
// import RegistrationForm from './registrationForm';

const AsyncJoin = asyncComponent(() => import('./join'));
const AsyncRegistrationForm = asyncComponent(() => import('./registrationForm'));

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/join" component={AsyncJoin} />
      <Route exact path="/register" component={AsyncRegistrationForm} />
    </div>
  </Router>
);

export default App;
