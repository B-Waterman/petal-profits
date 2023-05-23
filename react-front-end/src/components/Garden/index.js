// import Lottie from 'lottie-react-native';
import Lottie from 'react-lottie-player'

import buttonPulse from '../../button-pulse.json'
import Popup from '../../hooks/Popup';
import { useState, onSubmitForm } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Submit from './Submit';
import './submit.scss';

//components
import InputGarden from './inputGarden';

//to not show pop up until pressed
export default function Garden(props) {
  const [name, setname] = useState("")
  const [amount, setamount] = useState("")
  const [buttonPopup, setbuttonPopup] = useState(false)


  //code for post request to the back end.
  const onSubmitForm = async (e) => {
    try {
      const body = { name, amount }
      const response = await fetch("/garden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(body)
      window.location = '/'
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
        <h1 className='header'>
          My Garden
        </h1>
        <div className='container'>
          <div>
            <InputGarden />
          </div>

          <div className='addNew' onClick={() => setbuttonPopup(true)} >
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
              {/* <div className='section'>
                <div className='section1'>
                  <div className='innerbutton'>
                    "saving for a big purchase"
                  </div>
                  <div className='innerbutton'>
                    "Paying off my debt"
                  </div>
                </div>
                <div className='section2'>
                  <div className='innerbutton'>
                    "Emergency Fund"
                  </div>
                  <div className='innerbutton'>
                    "Saving for a trip"
                  </div>
                </div>
              </div> */}
              <p>
                <span className="input">
                  <input type="text" placeholder="Give your goal a name"
                    value={name}
                    onChange={e => setname(e.target.value)} />
                  <span></span>
                </span>
              </p>

              <p>
                <span className="input">
                  <input type="number" placeholder="How much would you like to save?"
                    value={amount}
                    onChange={e => setamount(e.target.value)} />
                  <span></span>
                </span>
              </p>
              <br></br>
              <div onClick={(e) => onSubmitForm(e.target.value)}>
                <Submit />
              </div>
              <br></br>


            </Popup>
          </form>
        </div>
      </div>


    </>
  )
}
