import React, { useState } from 'react';
import Submit from './Submit';
import './submit.scss';


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
      reFetch();
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
          <span className='input'>
          <input type='text' value={name} onChange = {(event) => newName(event.target.value)}></input>
          </span>
          <p></p>
          <span className='input'>
          <input type='number' value={target} onChange={(event) => newTarget(event.target.value)}></input>
          </span>
          <div className=''>
            <button className='outerBTN'
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
