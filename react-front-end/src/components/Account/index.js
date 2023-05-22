import React from 'react';

import './Account.scss';
import AccountSettings from './AccountSettings';
import UserSettings from './UserSettings';



export default function Account(props) {

  return (
    <div className='Account'>
      <header>
        <h1>Account & Settings</h1>
      </header>
      <main>
        <UserSettings />
        <AccountSettings />
        {/* <NotificationSettings /> */}
      </main>
    </div>
  )
};
