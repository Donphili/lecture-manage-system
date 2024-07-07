import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
