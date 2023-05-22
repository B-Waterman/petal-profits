import './styles.scss';
import React from 'react';
import ExpenseList from './ExpenseList';
import Income from './Income';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import TopSpending from './TopSpending';
import MonthlyCharts from './MonthlyCharts';

export default function Budget(props) {

  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });



  return (
      // <CategoriesProvider>
        <div className='budget'>
          <h1>{monthName} Summary</h1>
          <h3>Cash Flow</h3>
          <MonthlyCharts month={monthName}/>
          <Remainder/>
          <TopSpending/>
          <Income/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
        </div>
      // {/* </CategoriesProvider> */}
  )
}
