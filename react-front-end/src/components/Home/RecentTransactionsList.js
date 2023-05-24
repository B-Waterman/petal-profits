import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//bring in budget tools
import TransactionItem from "../Budget/TransactionItem";
import { transactionsContext } from "../../hooks/TransactionsProvider";
import formatDate from '../Budget/helpers/formatdate';

import './RecentTransactionsList.scss';

export default function RecentTransactionsList(props) {
  const [infoButton, setInfoButton] = useState(false)

  const { transactions } = useContext(transactionsContext);

  const recentTransactions = transactions.slice(0, 5).map((obj) => {

    const amount = obj.transaction_amount;
    const date = formatDate(obj.transaction_date);

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
    <div className="recent">
      <div className="header">
        <h3>Recent Transactions</h3>
        <div className='info'>
        {infoButton && (
            <p>Check here to view the last five transactions made across your accounts.</p>
              )}
          <button
            onMouseEnter={() => {setInfoButton(true)}}
            onMouseLeave={() => {setInfoButton(false)}}>i</button>
        </div>
        </div>
          {recentTransactions}
          <Link to="/transactions">More Transactions</Link>
    </div>
  );
};
