import React from 'react';

import './Home.scss';

import RecentTransactionsList from './RecentTransactionsList';
import StatusUpdate from './StatusUpdate';
import AccountBalance from './AccountBalance';
import DonutChart from './DonutChart';

export default function Home(props) {
  return (
    <div className='Home'>
      <header>
        <h1>Let's Get Growing!</h1>
      </header>
        <StatusUpdate />
        <DonutChart />
        <AccountBalance />
        <RecentTransactionsList />
    </div>
  );
}
