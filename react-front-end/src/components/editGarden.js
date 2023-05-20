import React, { useState } from 'react';

const EditGarden = ({ open, onClose, goal }) => {
  const [name, newName] = useState(goal.name);
  const [target, newTarget] = useState(goal.target_amount)

//
const update = async(e) => {
  e.preventDefault()
try {
  const body = { name, target }
  const response = await fetch(`/garden/${goal.id}`, {
  method: "PUT",
  header: {"Content-type": "application/json"},
  body: JSON.stringify(body)
  
  })

} catch (err) {
  console.error(err.message)
}
}


  return (
    <>
      <form className="overlay">
        <div className="modalContainer" id={`id$(goals.id)`}>
          <h1>edit</h1>
          <button onClick={onClose} className='closeBtn' >X</button>
          <p>edit the name of the goal</p>
          <input type='text' value={name} onChange={e => e.target.value}></input>
          <p>change the goal amount</p>
          <input type='number' value={target} onChange={e => e.target.value}></input>

        </div>
        <div>
         <button 
         className='btnOutline'
         data-target={`id$(goals.id)`}
         onClick={e => update(e)}
         > 
         submit 
         </button>
        </div>
      </form>
    </>
  )
}

export default EditGarden;
