import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Error from '../pages/Error';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/error" component={Error} />
    <Route
      render={() => (
        <Redirect
          to={{
            pathname: '/error',
          }}
        />
      )}
    />
  </Switch>
);

export default Routes;
