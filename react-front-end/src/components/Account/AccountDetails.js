import React, { useState } from "react";

export default function AccountDetails(props) {

  const [ID, setAccount] = useState("");

  //submit new bank details, account ID
  const submitBankID = (event) => {
    event.preventDefualt();

    return (
      <div className="add-acct">
        <form onSubmit={submitBankID}>
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

  return (
    <div>
      <submitBankID />
    </div>
  );

};
