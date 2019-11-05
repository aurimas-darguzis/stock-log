import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducer';
// import {} from '';

const AppContext = createContext();

const productLogs = [
  {
    date: '2/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Amoxicillin 500mg',
    quantity: '15',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Adrian',
  },
  {
    date: '4/9/2019',
    patientsName: 'Zalias Arbuzas',
    antibiotics: 'Co-amoxiclav 500/125mg',
    quantity: '9',
    numberOfDays: '3',
    usage: '2 x 2 per day',
    dispensedBy: 'Dr. Alex',
  },
  {
    date: '6/9/2019',
    patientsName: 'Cukrinis Agurotis',
    antibiotics: 'Erythromycin 250mg',
    quantity: '20',
    numberOfDays: '7',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Edvinas',
  },
  {
    date: '8/9/2019',
    patientsName: 'Sausas Maumenelis',
    antibiotics: 'Amoxicillin 500mg',
    quantity: '15',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Adrian',
  },
  {
    date: '9/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Erythromycin 250mg',
    quantity: '15',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Jordan',
  },
  {
    date: '14/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Erythromycin 250mg',
    quantity: '15',
    numberOfDays: '5',
    usage: '2 x 2 per day',
    dispensedBy: 'Dr. Zariankinas',
  },
  {
    date: '15/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Erythromycin 250mg',
    quantity: '12',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Rodman',
  },
  {
    date: '20/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Amoxicillin 500mg',
    quantity: '25',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Edvinas',
  },
  {
    date: '22/9/2019',
    patientsName: 'Raudonas Baklazanas',
    antibiotics: 'Co-amoxiclav 500/125mg',
    quantity: '20',
    numberOfDays: '5',
    usage: '1 x 3 per day',
    dispensedBy: 'Dr. Alex',
  },
];

const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, {
    productLogs: productLogs,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
