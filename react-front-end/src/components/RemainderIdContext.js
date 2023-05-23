import React, { createContext, useState } from 'react';

//creates a context for Budget's Remainder id tag, for use on the homepage
export const RemainderIdContext = createContext();

export const RemainderIdProvider = ({ children }) => {
  const [idTag, setIdTag] = useState('');

  return (
    <RemainderIdContext.Provider value={{ idTag, setIdTag }}>
      {children}
    </RemainderIdContext.Provider>
  );
};
