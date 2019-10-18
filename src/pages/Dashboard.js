import React from 'react';
import App from '../App';
import Drawer from '../shared/components/Drawer';
import PagesList from '../shared/components/PagesList';

export default function Dashboard() {
  return (
    <>
      <Drawer title="Stock Log" left={[<PagesList />]} content={[<App />]} />
    </>
  );
}
