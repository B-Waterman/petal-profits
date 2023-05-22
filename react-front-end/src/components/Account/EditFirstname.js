import React, { useState } from 'react';

//edit username, first name
export default function EditFirstName(event) {

  const [ first_name, setFirstName ] = useState("");

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