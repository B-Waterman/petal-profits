import React, { useContext } from 'react';
import AccountItem from './AccountItem';
import { transactionsContext } from '../../hooks/TransactionsProvider';

export default function AccountBalance(props) {
  const { accounts } = useContext(transactionsContext); // Update variable name back to accounts

  const currentBalances = accounts.map((obj) => {
    const balance = '$' + obj.current_balance.toLocaleString();

    return (
      <AccountItem
        key={obj.id}
        type={obj.type}
        balance={balance}
      />
    );
  });

  return (
    <div className="account-balance">
      <h3>Current Balance(s)</h3>
      <span>{currentBalances}</span>
    </div>
  );
};
