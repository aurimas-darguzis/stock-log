import React from 'react';
import Dashboard from './global/pages/Dashboard';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

// previously it was: import Routes from './global/routes/Routes';
// return <Routes />

// need to adjust architecture to use HashRouter

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
