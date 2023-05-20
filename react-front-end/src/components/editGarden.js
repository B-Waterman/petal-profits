import React, { useState } from 'react';

const EditGarden = ({ open, onClose, goals }) => {
  const [name, newName] = useState(goals[0].name);
console.log(goals[0].name)

  return (
    <>
      <form className="overlay">
        <div className="modalContainer">
          <h1>edit</h1>
          <p>edit the name of the goal</p>
          <input type='text' value={name}></input>
          <p>change the goal amount</p>
          <input type='number'></input>

          <button onClick={onClose} className='closeBtn'>X</button>
        </div>
        <div>
         <button className='btnOutline'> submit </button>
        </div>
      </form>
    </>
  )
}

export default EditGarden;
