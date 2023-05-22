import './styles.scss';
import React, { useEffect, useRef, useState} from 'react';
import ExpenseList from './ExpenseList';
// import SankeyE from './SankeyE'; -- backup
import Income from './Income';
import Remainder from './Remainder';
import CategoryGoalsProvider from './providers/CategoryGoalsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import Sankey from './Sankey';
import BarChart from './BarChart';
import SankeyE from './SankeyE';


export default function Budget(props) {

  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });

  const [sankey, setSankey] = useState(true)

  const handleToggle = () => {
    if (!sankey) {
     setSankey(true);
    } else {
      setSankey(false)
    }
  };

  return (
      <CategoriesProvider>
        <div className='budget'>
          <h1>{monthName} Summary</h1>
          <h3>Cash Flow</h3>
          <button onClick={() => {handleToggle()}}>CHARTS</button>
          {sankey && <Sankey/>}
          {!sankey && <BarChart month={monthName}/>}
          <Remainder/>
          <Income/>
          <CategoryGoalsProvider>
            <ExpenseList/>
          </CategoryGoalsProvider>
        </div>
      </CategoriesProvider>
  )
}