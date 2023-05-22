import React, { useState, createContext } from "react";
const UserContext = createContext()

function saveData() {
  const [ user, setUser ] = useState("");

  transition(SAVING);
  bookInterview(id, interview)
    .then(() => transition(SHOW))
    .catch(error => {
      transition(ERROR_SAVE, true)
    });
}
