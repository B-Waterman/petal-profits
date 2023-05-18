import React, {useContext} from 'react';
import { transactionsContext } from '../../TransactionsProvider';
import TransactionItem from './TransactionItem';
import formatDate from './helpers/formatdate';


export default function ExpenseTransactions(props) {

  const { transactions } = useContext(transactionsContext);


  const expenses = transactions.filter(obj => obj.category !== 'INCOME')

  //loop through the expenses and return an item for each one 
  const transactionItems = expenses.map((obj) => {

    const amount = '$' + obj.transaction_amount.toLocaleString()
    const date = formatDate(obj.transaction_date)

    return (
      <TransactionItem
        key={obj.id}
        name={obj.transaction_name}
        amount={amount}
        date={date}
        type={obj.type}
      />
    )
  });

  return (
    <ul>
      {transactionItems}
    </ul>
  )
}