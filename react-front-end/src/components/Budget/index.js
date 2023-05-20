import './styles.scss';
import React from 'react';
import ExpenseList from './ExpenseList';
// import SankeyE from './SankeyE'; -- backup
import IncomeItem from './IncomeItem';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import Sankey from './Sankey';

export default function Budget(props) {

  return (
      <CategoriesProvider>
        <div className='budget'>
          <h1>Budget</h1>
          {/* <SankeyE /> */}
          <Sankey/>
          <IncomeItem/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
          <Remainder/>
        </div>
      </CategoriesProvider>
  )
}