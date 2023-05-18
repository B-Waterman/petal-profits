import React, {useContext} from 'react';
import CategoryTransactionList from './CategoryTransactionList'
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from "../progress-bar";
import { categoriesContext } from './CategoriesProvider';
import './ExpenseList.scss'

export default function ExpenseList(props) {

  const { categories } = useContext(categoriesContext);

  const percentage = (20 / 40) * 100;

  //remove income category
  const expenseCats = categories.filter(obj => obj.name !== 'INCOME')

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
          <h4>{obj.name}</h4>
          <h4>{amount}</h4>
        </Accordion.Header>
          <h5>Goal: $500</h5>
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
        <h3>Monthly Expenses</h3>
        <h3>{totalExpenses}</h3>
      </header>
      <ul>
      <Accordion>
        {expenseItems}
      </Accordion>
      </ul>
    </div>
  )
}