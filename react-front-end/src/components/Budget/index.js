import './styles.scss';
import React from 'react';
import ExpenseList from './ExpenseList';
// import SankeyE from './SankeyE'; -- backup
import Income from './Income';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import Sankey from './Sankey';

export default function Budget(props) {

  return (
      <CategoriesProvider>
        <div className='budget'>
          <h1>Monthly Summary</h1>
          <h3>Cash Flow</h3>
          {/* <SankeyE /> */}
          <Sankey/>
          <Remainder/>
          <Income/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
        </div>
      </CategoriesProvider>
  )
}