import React, {useContext} from 'react';
import TransactionItem from './TransactionItem';
import formatDate from './helpers/formatdate';
import { transactionsContext } from '../../TransactionsProvider';


export default function CategoryTransactionList(props) {

  const { transactions } = useContext(transactionsContext);

  //loop to find transaction associated with props.category

  const categoryTransactions = transactions.filter(obj => obj.category === props.category)

  //loop through the income transactions and return an item for each one 
  const transactionItems = categoryTransactions.map((obj) => {

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
  })

  return (
    <ul>
      {transactionItems}
    </ul>
  )
}