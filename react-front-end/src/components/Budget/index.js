import './styles.scss';
import React from 'react';
import ExpenseList from './ExpenseList';
import SankeyE from './Sankey';
import IncomeItem from './IncomeItem';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import Sankey2 from './Sankey2';

export default function Budget(props) {

  return (
      <CategoriesProvider>
        <div className='budget'>
          <h1>Budget</h1>
          {/* <SankeyE /> */}
          <Sankey2/>
          <IncomeItem/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
          <Remainder/>
        </div>
      </CategoriesProvider>
  )
}