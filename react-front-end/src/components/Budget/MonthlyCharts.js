import { useState } from 'react';
import Sankey from './Sankey';
import BarChart from './BarChart';
import { faK } from '@fortawesome/free-solid-svg-icons';

export default function MonthlyCharts(props) {

  const [sankey, setSankey] = useState(true)
  const [infoButton, setInfoButton] = useState(false)

  const handleToggle = () => {
    if (!sankey) {
     setSankey(true);
    } else {
      setSankey(false);
    }
  };

  // const handleInfoToggle = () => {
  //   if (!infoButton) {
  //     setInfoButton(true);
  //   } else {
  //     setInfoButton(false);
  //   }
  // }

 
  return (
    <div className='charts'>
        {sankey && (
          <>
            <button onClick={() => {handleToggle()}}>See Bar Chart</button>
            <Sankey/>
            <div className='info'>
              <button className='info-button' onMouseEnter={() => {setInfoButton(true)}} onMouseLeave={() => {setInfoButton(false)}}>i</button>
              {infoButton && (
                <p className='info-text'>A Sankey chart is a visual representation that helps you understand how your money flows. By following the paths left to right, you can easily see where your money comes from and where it goes.</p>
              )}
            </div>
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