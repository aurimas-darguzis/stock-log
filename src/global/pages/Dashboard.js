import React from 'react';
import StockLog from '../../features/stock-log/components/StockLog';
import Drawer from '../components/Drawer';
import PagesList from '../components/PagesList';

export default function Dashboard() {
  return (
    <>
      <Drawer
        title="Stock Log"
        left={[<PagesList />]}
        content={[<StockLog />]}
      />
    </>
  );
}
