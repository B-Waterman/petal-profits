// import Lottie from 'lottie-react-native';
import Lottie from 'react-lottie-player'
import lottieJson from '../plant_animation.json'
import ProgressBar from "./progress-bar";
import buttonPulse from '../button-pulse.json'
import Popup from './Popup';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

export default function Garden(props) {
  const [buttonPopup, setbuttonPopup] = useState(false)

  const testData = [
    { bgcolor: "#6a1b9a", completed: 80 },
    { bgcolor: "#6a1b9a", completed: 30 },
    { bgcolor: "#6a1b9a", completed: 100 },
  ];


  const btnEL = document.querySelectorAll('.inputs');
  btnEL.forEach(btnEL => {
    btnEL.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      btnEL.classList.add('.special');
    })
  })

  return (
    <>
      <div className='page'>
        <div className='banner'>
          My Garden
        </div>
        <div className='container'>

          <div className='plant'>
            {testData.map((item, idx) => (<>
            <div className='goalName'>
              name of goal
            </div>
            <div className='edits'>
              <div>delete</div>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            <FontAwesomeIcon icon="fa-regular fa-trash" />
            </div>
              <Lottie className='plant-img'
                animationData={lottieJson}
                play
                segments={[0, item.completed]}
                loop={false}
                style={{ width: 150, height: 150 }}
              />
              <div className="progressBar">
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
              </div>
              <div className='amounts'>
            <div className='tAmount'>
              tracked amount
            </div>
            <div className='gAmount'>
              goal amount in $
            </div>
            </div>
            </>))}
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
          <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
            <h1 className='popupHeader'> PLANT A GOAL</h1>
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
            <br></br>
            <p>
              <span class="input">
                <input type="text" placeholder="Give your Goal a name" />
                <span></span>
              </span>
            </p>

            <p>
              <span class="input">
                <input type="text" placeholder="how much would you like to save?" />
                <span></span>
              </span>
            </p>
            <br></br>
            <div className='submit'>SUBMIT</div>
            <br></br>


          </Popup>
        </div>
      </div>


    </>
  )
}