import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

// Create a Context
export const transactionsContext = createContext();

// Create a Component wrapper from Context.Provider
export default function DataProvider(props) {

  // Here is our Shared State Object
  const [state, setState] = useState({
    transactions: [],
    categories: []
  });

  // Get transaction/category info and set state item
  useEffect(() => {
    Promise.all ([
      axios.get('http://localhost:8080/api/transactions'),
      axios.get('http://localhost:8080/api/categories')
    ])
      .then((all) => {
        setState(prev => ({ ...prev, transactions: all[0].data, categories: all[1].data}))
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const data = {state};

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <transactionsContext.Provider value={data}>
      {props.children}
    </transactionsContext.Provider>
  );
};