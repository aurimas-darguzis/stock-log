import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import Error from './pages/Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/stock" component={Stock} />
      <Route exact path="/error" component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
