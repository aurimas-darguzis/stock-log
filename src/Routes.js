import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Stock as StockView,
  // Suppliers as TSuppliersView,
  // Orders as Orders,
  // Account as AccountView,
  // HumanResources as HumanResourcesView,
  // Authentication as AuthenticationView,
  // Settings as SettingsView,
  // NotFound as NotFoundView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={StockView}
        exact
        layout={MainLayout}
        path="/stock"
      />
      <RouteWithLayout
        component={() => <div>suppliers</div>}
        exact
        layout={MainLayout}
        path="/suppliers"
      />
      <RouteWithLayout
        component={() => <div>orders</div>}
        exact
        layout={MainLayout}
        path="/orders"
      />
      <RouteWithLayout
        component={() => <div>account</div>}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={() => <div>human resources</div>}
        exact
        layout={MainLayout}
        path="/human-resources"
      />
      <RouteWithLayout
        component={() => <div>authentication</div>}
        exact
        layout={MainLayout}
        path="/authentication"
      />
      <RouteWithLayout
        component={() => <div>settings</div>}
        exact
        layout={MainLayout}
        path="/settings"
      />

      <RouteWithLayout
        component={() => <div>not found</div>}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
