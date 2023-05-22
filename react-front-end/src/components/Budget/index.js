import './styles.scss';
import React from 'react';
import Sankey from './Sankey';
import ExpenseList from './ExpenseList';
import IncomeItem from './IncomeItem';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';

export default function Budget(props) {

  return (
      // <CategoriesProvider>
        <div className='budget'>
          <h1>Budget</h1>
          <Sankey />
          <IncomeItem/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
          <Remainder/>
        </div>
      // {/* </CategoriesProvider> */}
  )
}
