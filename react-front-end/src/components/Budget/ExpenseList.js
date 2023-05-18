import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import CategoryTransactionList from './CategoryTransactionList'
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from "../progress-bar";

export default function ExpenseList(props) {

  const { state } = useContext(transactionsContext);

  const percentage = (20 / 40) * 100;

  //remove income category
  const expenseCats = state.categories.filter(obj => obj.name !== 'INCOME')

  //loop through the expenses categories and return an item for each one 
  //calculate the sum as you loop to be display above
  let total = 0;
  const expenseItems = expenseCats.map((obj, index) => {
    let sum = Number(obj.sum) 
    const amount = '$' + sum.toLocaleString()
    total += sum;
    return (
      <Accordion.Item className="category-item" eventKey={index}>
        <Accordion.Header>
          <h2>{obj.name}</h2>
          <h2>{amount}</h2>
          <h5>Goal: $500</h5>
        </Accordion.Header>
          <ProgressBar bgcolor="green" completed={percentage}/>
        <Accordion.Body>
          <CategoryTransactionList category={obj.name}/>
        </Accordion.Body>
      </Accordion.Item> 
    )
  });
  const totalExpenses = '$' + total.toLocaleString()
  

  return (
    <div className="expense-list">
      <header className="expense-header">
        <h2>Monthly Expenses</h2>
        <h2>{totalExpenses}</h2>
      </header>
      <ul>
      <Accordion>
        {expenseItems}
      </Accordion>
      </ul>
    </div>
  )
}