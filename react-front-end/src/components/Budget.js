import './Budget.scss';
import React, { useEffect, useState} from 'react';
import axios from 'axios'

export default function Budget(props) {
  
  const [state, setState] = useState({
    transactions: [],
    accounts: []
  })

  useEffect(() => {
    axios.get('http://localhost:8080/api/transactions')
      .then(response => {
        console.log(response.data)
        setState(prev => ({ ...prev, transactions: response.data.transactions }));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Budget</h1>
    </>
  )
}