import React, { useState } from 'react';
import Lottie from 'react-lottie-player'

import buttonPulse from '../../button-pulse.json'
import Popup from '../../hooks/Popup';

export default function SubmitBankID(event) {
  const [buttonPopup, setbuttonPopup] = useState(false)
  const [ID, setAccount] = useState("");

  return (
    <div className="add-acct">
      <form autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>New Account Number:
          <input
            type="text"
            value={ID}
            onChange={(event) => setAccount(event.target.value)}
          />
        </li>
        <input type="submit" value="Submit" />
      </form>
      <section className="submitbtn" onClick={() => setbuttonPopup(true)} >
      <Lottie className='buttonPulse'
          loop
          animationData={buttonPulse}
          play
          style={{ width: 150, height: 150 }}
        /> Save
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>
        <h1 className='popupHeader'> PLANT A GOAL</h1>
      </section>
    </div>
  )
};
