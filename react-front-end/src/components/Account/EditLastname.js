import React, { useState } from "react";

//edit username, last name
export default function EditLastName(event) {

  const [ last_name, setLastName ] = useState("");

  return (
    <div className="edit">
      <form  autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>First Name
          <input
            type="text"
            value={last_name}
            onChange={(event) => setLastName(event.target.value)}
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
