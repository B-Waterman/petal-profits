import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

// Create a Context
export const transactionsContext = createContext();


// Create a Component wrapper from Context.Provider
export default function TransactionsProvider(props) {

  // Here is our Shared State Object
  const [transactions, setTransactions] = useState([]);

  // Get transaction/category info and set state item
  useEffect(() => {
    axios.get('http://localhost:8080/api/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const data = { transactions };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <transactionsContext.Provider value={data}>
      {props.children}
    </transactionsContext.Provider>
  );
};