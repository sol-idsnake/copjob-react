import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Join from './join';
import RegistrationForm from './registrationForm';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/register" component={RegistrationForm} />
    </div>
  </Router>
);

export default App;
