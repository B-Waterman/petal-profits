import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//bring in budget tools
import TransactionItem from "../Budget/TransactionItem";
import { transactionsContext } from "../../TransactionsProvider";
import formatDate from '../Budget/helpers/formatdate';

export default function RecentTransactionsList(props) {
  const { transactions } = useContext(transactionsContext);

  const recentTransactions = transactions.slice(0, 5).map((obj) => {

    const amount = '$' + obj.transaction_amount.toLocaleString()
    const date = formatDate(obj.transaction_date)

    return (
      <TransactionItem
        key={obj.id}
        name={obj.transaction_name}
        amount={amount}
        date={date}
      />
    )
  });

  return (
    <div className="recent">
      <h3>Recent Transactions</h3>
          {recentTransactions}
          <Link to="/transactions">More Transactions</Link>
    </div>
  );
};
