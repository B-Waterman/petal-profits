import React, { useState } from 'react';

 //change email
export default function EditEmail(event) {

  const [ email, setEmail ] = useState("");

  return (
    <div className="edit">
      <form  autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>Email
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
