// import Lottie from 'lottie-react-native';
import Lottie from 'react-lottie-player'

import buttonPulse from '../button-pulse.json'
import Popup from './Popup';
import { useState, onSubmitForm } from 'react';
import 'font-awesome/css/font-awesome.min.css';


//components
import InputGarden from './inputGarden';

//to not show pop up until pressed
export default function Garden(props) {
  const [goal, setgoal] = useState("")
  const [amount, setamount] = useState("")
  const [buttonPopup, setbuttonPopup] = useState(false)


  //code for post request to the back end.
  const onSubmitForm = async (e) => {
    e.preventDefeault();
    try {
      const body = { goal }
      const response = await fetch("http://localhost/3000/garden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  }

  //to make button in popup stay selected.
  const btnEL = document.querySelectorAll('.innerbutton');
  btnEL.forEach(btnEL => {
    btnEL.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      btnEL.classList.add('special');
    })
  })

  return (
    <>
      <div className='page'>
        <div className='banner'>
          My Garden
        </div>
        <div className='container'>
          <div>
            {/* <InputGarden /> */}

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
          <form onSubmit={onSubmitForm}>
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
                <span className="input">
                  <input type="text" placeholder="Give your Goal a name"
                    value={goal}
                    onChange={e => setgoal(e.target.value)} />
                  <span></span>
                </span>
              </p>

              <p>
                <span className="input">
                  <input type="text" placeholder="how much would you like to save?"
                    value={amount}
                    onChange={e => setamount(e.target.value)} />
                  <span></span>
                </span>
              </p>
              <br></br>
              <div className='submit'>SUBMIT</div>
              <br></br>


            </Popup>
          </form>
        </div>
      </div>


    </>
  )
}