import './styles.scss';
import React from 'react';
import ExpenseList from './ExpenseList';
import Income from './Income';
import Remainder from './Remainder';
import TopSpending from './TopSpending';
import MonthlyCharts from './MonthlyCharts';

export default function Budget(props) {

  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });



  return (
        <div className='budget'>
          <h1>{monthName} Summary</h1>
          <MonthlyCharts month={monthName}/>
          <Remainder/>
          <TopSpending/>
          <Income/>
          <ExpenseList/>
        </div>
  )
}
