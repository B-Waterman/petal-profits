import React, { useState } from 'react';

//change password
export default function EditPassword(event) {
  const [ password, setPassword ] = useState("");

  return (
    <div className="edit">
      <form  autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>Password
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
