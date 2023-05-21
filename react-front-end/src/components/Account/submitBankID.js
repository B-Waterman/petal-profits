import React, { useState } from 'react';

export default function SubmitBankID(event) {

  const [ID, setAccount] = useState("");

  return (
    <div className="add-acct">
      <form autoComplete='off' onSubmit={event => event.preventDefault()}>
        <li>New Account Number:
          <input
            type="text"
            value={ID}
            onChange={(event) => setAccount(event.target.value)}
          />
        </li>
        <input type="submit" value="Submit" />
      </form>
      <section className="submitbtn">
        <button>Save</button>
      </section>
    </div>
  )
};
