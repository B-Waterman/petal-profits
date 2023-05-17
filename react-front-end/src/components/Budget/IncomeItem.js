import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import { FaChevronCircleDown } from "react-icons/fa";

export default function IncomeItem(props) {

  const { state } = useContext(transactionsContext);

  //pull out income category
  const income = state.categories.filter(obj => obj.name === 'INCOME')

  //figure out why you needs to loop
  const incomeCat = income.map((obj, index) => {
    let sum = Number(obj.sum) 
    const amount = '$' + sum.toLocaleString()
    return (
      <div className="income-item" key={index}>
        <h2>Monthly Income</h2>
        <h2>{amount}</h2>
        <FaChevronCircleDown className="dropdown"/>
      </div> 
    )
  });


  return (
    <header className="income">
      {incomeCat}
    </header>
  )
}