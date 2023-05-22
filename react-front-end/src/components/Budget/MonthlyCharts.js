import { useState } from 'react';
import Sankey from './Sankey';
import BarChart from './BarChart';

export default function MonthlyCharts(props) {

  const [sankey, setSankey] = useState(true)

  const handleToggle = () => {
    if (!sankey) {
     setSankey(true);
    } else {
      setSankey(false)
    }
  };

  return (
    <div className='charts'>
        {sankey && (
          <>
            <button onClick={() => {handleToggle()}}>See Bar Chart</button>
            <Sankey/>
          </>
      )}
      {!sankey && (
          <>
            <button onClick={() => {handleToggle()}}>See Sankey</button>
            <BarChart month={props.month}/>
          </>
      )}
    </div>
  )

}