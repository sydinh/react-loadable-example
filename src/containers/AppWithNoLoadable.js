import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from '../constants';

import Nav from '../components/Navigation';

import NotFound from './NotFound';
import LandingPage from './Landing';
import AboutPage from './About';
import ContactPage from './Contact';

class AppWithNoLoadable extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route
              exact
              path={routes.LANDING}
              component={LandingPage}
            />
            <Route
              path={routes.ABOUT}
              component={AboutPage}
            />
            <Route
              path={routes.CONTACT}
              component={ContactPage}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default AppWithNoLoadable;
