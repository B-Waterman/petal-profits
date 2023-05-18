import React, {useContext} from 'react';
import TransactionItem from './TransactionItem';
import formatDate from './helpers/formatdate';
import { transactionsContext } from '../../TransactionsProvider';


export default function CategoryransactionList(props) {

  const { transactions } = useContext(transactionsContext);

  //loop to find transaction associated with props.category

  // const income = state.transactions.filter(obj => obj.category === 'INCOME')

  //loop through the income transactions and return an item for each one 
  // const transactions = income.map((obj) => {

  //   const amount = '$' + obj.transaction_amount.toLocaleString()
  //   const date = formatDate(obj.transaction_date)

    return (
      <TransactionItem
        key={1}
        name={"transaction example"}
        amount={"10.00"}
        date={"2023-05-01T07:00:00.000Z"}
        type={"chequing"}
      />
    )
 
}