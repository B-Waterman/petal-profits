import CategoryItem from './CategoryItem';
import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import DropDown from './DropDown';

export default function ExpenseList(props) {

  const { state } = useContext(transactionsContext);

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
      </header>
      <ul>
        {expenseItems}
      </ul>
    </div>
  )
}