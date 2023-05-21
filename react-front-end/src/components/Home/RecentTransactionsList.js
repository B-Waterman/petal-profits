import React, { useContext } from "react";

//bring in budget tools
import TransactionItem from "../Budget/TransactionItem";
import { transactionsContext } from "../../TransactionsProvider";
import formatDate from './helpers/formatdate';

export default function RecentTransactionsList(props) {
  const { transactions } = useContext(transactionsContext);

  const recentTransactions = transactions.map((obj) => {

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
        <span>{recentTransactions}</span>
    </div>
  );
};
