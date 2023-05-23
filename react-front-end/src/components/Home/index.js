import React from 'react';

import './Home.scss';
import { RemainderIdProvider } from "../RemainderIdContext";
import RecentTransactionsList from './RecentTransactionsList';
import StatusUpdate from './StatusUpdate';
import AccountBalance from './AccountBalance';
import DonutChart from '../DonutChart';

export default function Home(props) {
  return (
    <div className='Home'>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <RemainderIdProvider>
          <StatusUpdate />
        </RemainderIdProvider>
        <DonutChart />
        <AccountBalance />
        <RecentTransactionsList />
      </main>
    </div>
  );
}
