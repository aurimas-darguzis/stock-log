import React from 'react';
import FullWidthTabs from '../../shared/components/FullWidthTabs';
import AntibioticsTable from './AntibioticsTable';
import AllStockTable from './AllStockTable';

export default function StockLog() {
  return (
    <div>
      <FullWidthTabs tabs={[<AntibioticsTable />, <AllStockTable />]} />
    </div>
  );
}
