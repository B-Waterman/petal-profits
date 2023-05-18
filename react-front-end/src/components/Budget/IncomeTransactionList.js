import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import TransactionItem from './TransactionItem';
import formatDate from './helpers/formatdate';
import './IncomeItem.scss';

export default function IncomeTransactionList(props) {

  const { state } = useContext(transactionsContext);


  const income = state.transactions.filter(obj => obj.category === 'INCOME')

  //loop through the income transactions and return an item for each one 
  const transactions = income.map((obj) => {

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
      {transactions}
    </ul>
  )
}