import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomLoadable from '../components/CustomLoadable';
import * as routes from '../constants';
import Nav from '../components/Navigation';
import NotFound from './NotFound';

const LoadableLandingPage = CustomLoadable({
  loader: () => import('./Landing'),
});

const LoadableAboutPage = CustomLoadable({
  loader: () => import('./About'),
});

const LoadableContactPage = CustomLoadable({
  loader: () => import('./Contact'),
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Nav />
          <Switch>
            <Route
              exact
              path={routes.LANDING}
              component={LoadableLandingPage}
            />
            <Route
              path={routes.ABOUT}
              component={LoadableAboutPage}
            />
            <Route
              path={routes.CONTACT}
              component={LoadableContactPage}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
