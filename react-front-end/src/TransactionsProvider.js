import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

// Create a Context
export const transactionsContext = createContext();


// Create a Component wrapper from Context.Provider
export default function TransactionsProvider(props) {

  // Here is our Shared State Object
  const [transactions, setTransactions] = useState([]);
  const [accounts, getAccounts] = useState([]);

  //to handle delay
  const [loading, setLoading] = useState(true);

  // Get transaction/category info and set state item
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/transactions'),
      axios.get('http://localhost:8080/api/accounts')
    ])
      .then((all) => {
        setTransactions(all[0].data);
        getAccounts(all[1].data);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      });
  }, []);

  const data = { transactions, accounts };

  if (loading) {
    // You can return a loading indicator here
    return <p>Loading...</p>;
  }

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <transactionsContext.Provider value={data}>
      {props.children}
    </transactionsContext.Provider>
  );
};

