import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducer';

const AppContext = createContext();

const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, {
    errorMessage: null,
    successMessage: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
