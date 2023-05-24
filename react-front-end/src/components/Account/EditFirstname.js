import React, { useState } from 'react';
import Lottie from 'react-lottie-player'

import buttonPulse from '../../button-pulse.json'
import Popup from '../../hooks/Popup';


//edit username, first name
export default function EditFirstName(event) {

  const [buttonPopup, setbuttonPopup] = useState(false)
  const [ first_name, setFirstName ] = useState("");

  const onSubmitForm = async (e) => {
    try {
      const body = { first_name }
      const response = await fetch("/account", {
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

  const btnEL = document.querySelectorAll('.innerbutton');
  btnEL.forEach(btnEL => {
    btnEL.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      btnEL.classList.add('special');
    })
  })

  return (
    <div className="edit">
      <form  autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>First Name
          <input
            type="text"
            value={first_name}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </li>
        <input type="submit" value="Submit" />
      </form>
      <section className="submitbtn">
        <button>Save</button>
      </section>
    </div>
  );
};
