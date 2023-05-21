import React, { useState } from "react";


export default function UserSettings(props) {
  const [ first_name, setFirstName ] = useState("");
  const [ last_name, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

//edit username, first name
  const editFirstName = function(event) {
    event.preventDefault();

    return (
      <div className="edit">
      <form onSubmit={editFirstName}>
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

  //edit username, last name
  const editLastName = (event) => {
    event.preventDefault();
    return (
      <div className="edit">
      <form onSubmit={editLastName}>
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
  }

  //change email
  const editUserEmail = function(event) {
    event.preventDefault();
    return (
      <div className="edit">
      <form onSubmit={editUserEmail}>
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

  //change password
  const editUserPassword = function(event) {
    event.preventDefault();
    return (
      <div className="edit">
      <form onSubmit={editUserPassword}>
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

  return (
    <div>
      <editFirstName />
      <editLastName />
      <editUserEmail />
      <editUserPassword />
    </div>
  );
};
