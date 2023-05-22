import { useState } from 'react';
import Sankey from './Sankey';
import BarChart from './BarChart';
import SankeyE from './SankeyE';

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
      <button onClick={() => {handleToggle()}}>CHARTS</button>
        {!sankey && <Sankey/>}
        {sankey && <BarChart month={props.month}/>}
    </div>
  )

}