import React from 'react';
import Table from '../../shared/components/Table';

export default function AntibioticsTable() {
  const columns = [
    { title: 'Date', field: 'date', type: 'date' },
    { title: 'Patient', field: 'patient' },
    {
      title: 'Antibiotics',
      field: 'antibiotics',
      lookup: {
        1: 'Amoxicillin 500mg',
        2: 'Co-amoxiclav 500mg',
        3: 'Co-amoxiclav 125mg',
        4: 'Erythromycin 250mg',
      },
    },
    { title: 'Quantity', field: 'quantity', type: 'numeric' },
    { title: 'Number of days', field: 'numberOfDays', type: 'numeric' },
    {
      title: 'Usage',
      field: 'usage',
      lookup: {
        1: '1 time per day',
        2: '2 times per day',
        3: '3 times per day',
      },
    },
    {
      title: 'Dispensed by',
      field: 'dispensedBy',
      lookup: {
        1: 'Dr Adriana',
        2: 'Dr Muller',
        3: 'Dr Alexa',
        4: 'Dr Mike Pukuotukas',
      },
    },
  ];
  const data = [
    {
      date: '09/05/19',
      patient: 'Brian Adams',
      antibiotics: 1,
      quantity: 15,
      numberOfDays: '5 days',
      usage: 3,
      dispensedBy: 1,
    },
    {
      date: '11/05/19',
      patient: 'Joana Merfield',
      antibiotics: 2,
      quantity: 15,
      numberOfDays: '5 days',
      usage: 2,
      dispensedBy: 2,
    },
    {
      date: '04/05/19',
      patient: 'Brian Cox',
      antibiotics: 3,
      quantity: 15,
      numberOfDays: '5 days',
      usage: 1,
      dispensedBy: 3,
    },
  ];
  return <Table columns={columns} data={data} title={'Client prescriptions'} />;
}
