import './styles.scss';
import React from 'react';
import Sankey from './Sankey';
import ExpenseList from './ExpenseList';
import DataProvider from './DataProvider';
import IncomeItem from './IncomeItem';
import Remainder from './Remainder';

export default function Budget(props) {

  return (
    <DataProvider>
      <div className='budget'>
        <h1>Budget</h1>
        <Sankey />
        <IncomeItem/>
        <ExpenseList/>
        <Remainder/>
      </div>
    </DataProvider>
  )
  
}