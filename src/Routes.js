import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  // ProductList as ProductListView,
  // UserList as UserListView,
  // Typography as TypographyView,
  // Icons as IconsView,
  // Account as AccountView,
  // Settings as SettingsView,
  // SignUp as SignUpView,
  // SignIn as SignInView,
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
        component={() => <div>users</div>}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={() => <div>list</div>}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={() => <div>timesheets</div>}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={() => <div>books</div>}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={() => <div>account</div>}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={() => <div>settings</div>}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={() => <div>sign up</div>}
        exact
        layout={MainLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={() => <div>sign in</div>}
        exact
        layout={MainLayout}
        path="/sign-in"
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
