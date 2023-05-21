import React from 'react';

import './Account.scss';
import PleaseWork from './AccountDetails';



export default function Account(props) {

  return (
    <div className='Account'>
      <header>
        <h1>Account & Settings</h1>
      </header>
      <PleaseWork />
      {/* <main>
      </main> */}
    </div>
  )
};
