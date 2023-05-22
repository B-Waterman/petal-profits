import React, { useState } from 'react';
import Submit from './Submit';
import './submit.scss';
import Garden from './Garden';


const EditGarden = ({ open, onClose, goal, reFetch }) => {
  const [name, newName] = useState(goal.name);
  const [target, newTarget] = useState(goal.target_amount)

  //
  const update = async (e) => {
    try {
      const body = { name, target }
      console.log(body)
      const response = await fetch(`http://localhost:8080/garden/1`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)

      })
      reFetch(response, ...body);
    } catch (err) {
      console.error(err.message)
    }
  }


  return (
    <>
      <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <div className="modalContainer" id={`id$(goals.id)`}>
          <h1 className='popupHeader'>edit</h1>
          <button onClick={onClose} className='closeBtn' >X</button>
          <p></p>
          <input type='text' value={name} onChange = {(event) => newName(event.target.value)}></input>
          <p></p>
          <input type='number' value={target} onChange={(event) => newTarget(event.target.value)}></input>
          <div>
            <button
              data-target={`id$(goals.id)`}
              onClick={e => update(e)}
            >
              <Submit />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditGarden;
