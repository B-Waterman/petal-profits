import React, { useContext, useState } from 'react';
import AccountItem from './AccountItem';
import { transactionsContext } from '../../hooks/TransactionsProvider';

import './AccountBalance.scss';

export default function AccountBalance(props) {
  const [infoButton, setInfoButton] = useState(false)
  const { accounts } = useContext(transactionsContext);

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
      <div className='title'>
        <h3>Current Balance(s)</h3>
        <div className='info'>
          {infoButton && (
            <p>Check here to keep tabs on your current account balances</p>
          )}
          <button
            onMouseEnter={() => {setInfoButton(true)}}
            onMouseLeave={() => {setInfoButton(false)}}>i</button>
        </div>
      </div>
      <div className='list'>{currentBalances}</div>
    </div>
  );
};
