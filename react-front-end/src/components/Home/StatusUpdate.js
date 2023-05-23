import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { transactionsContext } from '../../TransactionsProvider';

export default function StatusUpdate(props) {
  // const { idTag } = useContext(RemainderIdContext);

  const { transactions } = useContext(transactionsContext);
  // const { setIdTag } = useContext(RemainderIdContext)

  let income = 0
  let expense = 0
  for (let transaction of transactions) {
    let num = parseFloat(transaction.transaction_amount)
    if (transaction.category === 'INCOME') {
      income += num;
    } else {
      expense += num;
    }

  }
  const remainder = ((income * -1) - expense).toFixed(2)

  if (remainder > 0) {
    return (
      <div className="status">
        <p>
          Great job saving this month!
          <Link to="/">Want to see your Budget Breakdown?</Link>
        </p>
      </div>
    );
  }

  if (remainder <= 0) {
    return (
      <div className="status">
        <p>
          Entering a savings drought!
          <Link to="/">Want to see your Budget Breakdown?</Link>
        </p>
      </div>
    );
  }

  return null;
}
