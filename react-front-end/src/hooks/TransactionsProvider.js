import {createContext, useState, useEffect} from 'react';
import Popup from './Popup';

import axios from 'axios'

// Create a Context
export const transactionsContext = createContext();


// Create a Component wrapper from Context.Provider
export default function TransactionsProvider(props) {

  // Here is our Shared State Object
  const [transactions, setTransactions] = useState([]);
  const [accounts, getAccounts] = useState([]);
  const [categories, setCategories] = useState([]); ///tell Broooke about this line
  const [categoryGoals, setCategoryGoals] = useState([]); ///tell Broooke about this line

  //to handle delay
  const [loading, setLoading] = useState(true);
  const [buttonPopup, setbuttonPopup] = useState(false)

  // Get transaction/category info and set state item
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/transactions'),
      axios.get('http://localhost:8080/api/accounts'),
      axios.get('http://localhost:8080/api/categories'), ///tell Broooke about this line
      axios.get('http://localhost:8080/api/category-goals') ///tell Broooke about this line
    ])
      .then((all) => {
        setTransactions(all[0].data);
        getAccounts(all[1].data);
        setCategories(all[2].data); ///tell Broooke about this line
        setCategoryGoals(all[3].data) ///tell Broooke about this line
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      });
  }, []);

  const data = { transactions, accounts, categories, categoryGoals, setCategoryGoals }; ///tell Broooke about this line

  if (loading) {
    return (
      <Popup>
        <h1 className='popupHeader'>One Moment Please</h1>
        <p>Loading...</p>
      </Popup>
    );
  }

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <transactionsContext.Provider value={data}>
      {props.children}
    </transactionsContext.Provider>
  );
};

