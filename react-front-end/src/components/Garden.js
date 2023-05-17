// import Lottie from 'lottie-react-native';
import Lottie from 'react-lottie-player'
import lottieJson from '../plant_animation.json'
import ProgressBar from "./progress-bar";
import buttonPulse from '../button-pulse.json'
import Popup from './Popup';
import { useState } from 'react';

export default function Garden(props) {
  const [buttonPopup,setbuttonPopup] = useState(false)

  const testData1 = [
    { bgcolor: "#6a1b9a", completed: 60 },
  ];
  const testData2 = [
    { bgcolor: "#6a1b9a", completed: 50 },
  ];
  const testData3 = [
    { bgcolor: "#6a1b9a", completed: 30 },
  ];


  return (
    <>
      <div className='banner'>
        My Garden
      </div>
      <div className='container'>

        <div>
          <Lottie
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          />
          <div className="App">
            {testData1.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>

        <div>
          <Lottie
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          />
          <div className="App">
            {testData2.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>

        <div>
          <Lottie
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          />
          <div className="App">
            {testData3.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>
        <div className='addNew' onClick={() => setbuttonPopup(true)} setTrigger={setbuttonPopup}>
          <Lottie className='buttonPulse'
            loop
            animationData={buttonPulse}
            play
            style={{ width: 150, height: 150 }}
          /> ADD NEW GOAL
        </div>
      </div>
      <div>
        <Popup trigger={buttonPopup}>
          <h1>PLANT A GOAL</h1>
        <div className='innerbutton'>
          "saving for a big purchase"
        </div>
        <br></br>
        <div className='innerbutton'>
          "Paying off my debt"
        </div>
        <br></br>
        <div className='innerbutton'>
          "Emergency Fund"
        </div>
        <br></br>
        <div className='innerbutton'>
          "Saving for a trip"
        </div>



        </Popup>

      </div>


    </>
  )
}