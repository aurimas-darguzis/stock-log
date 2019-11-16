import React from 'react';
import Table from '../../shared/components/Table';

export default function AllStockTable() {
  const columns = [
    {
      title: 'Antibiotic',
      field: 'antibiotic',
      lookup: {
        1: 'Amoxicillin 500mg',
        2: 'Co-amoxiclav 500mg',
        3: 'Co-amoxiclav 125mg',
        4: 'Erythromycin 250mg',
      },
    },
    { title: 'Quantity', field: 'quantity', type: 'numeric' },
    {
      title: 'Ordered by',
      field: 'orderedBy',
      lookup: {
        1: 'Dr Adriana',
        2: 'Dr Muller',
        3: 'Dr Alexa',
        4: 'Dr Mike Pukuotukas',
      },
    },
    { title: 'Last order', field: 'lastDate', type: 'date' },
  ];

  const data = [
    {
      antibiotic: 1,
      quantity: '2500ml',
      orderedBy: 4,
      lastDate: '05/05/2019',
    },
  ];
  return <Table columns={columns} data={data} title={'All'} />;
}
