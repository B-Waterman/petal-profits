import CategoryItem from './CategoryItem';
import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import { FaChevronCircleDown } from "react-icons/fa";

export default function ExpenseList(props) {

  const { state } = useContext(transactionsContext);

  // const income = state.transactions.filter(obj => obj.category === 'INCOME')
  // const expenses = state.transactions.filter(obj => obj.category !== 'INCOME')
  

  // let eSum = 0;
  // const expenseItems = expenses.map((obj) => {
  //   const amount = '$' + obj.transaction_amount.toLocaleString()
  //   eSum += obj.transaction_amount;
  //   return (
  //     <CategoryListItem
  //       key={obj.id}
  //       name={obj.name}
  //       amount={amount}
  //     />
  //   )
  
  // });
  
  // const expenseSum = '$' + eSum.toLocaleString()

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
      <CategoryItem
        key={index}
        name={obj.name}
        amount={amount}
      />
    )
  });
  const totalExpenses = '$' + total.toLocaleString()
  

  return (
    <div className="expense-list">
      <header className="expense-header">
        <h2>Monthly Expenses</h2>
        <h2>{totalExpenses}</h2>
        <FaChevronCircleDown className="dropdown"/>
      </header>
      <ul>
        {expenseItems}
      </ul>
    </div>
  )
}