/* Want page flow to be:
- Page title
- User Settings
  - Set user name
  - link (or edit link) bank account
  - add new?
  -
- Notification Settings
  -
  -
- Accessibility Settings
  - Colour palette
    - R/G colourblind
    - B/Y colourblind
    - Monochrome
  - Hide icons from screenreaders
  - Enable outlines for focusable elements: Allow outlines on buttons, links and similar content
  -
*/
import React from 'react';

import './Account.scss';

import AccountDetails from './AccountDetails';
import UserSettings from './UserSettings';

export default function Account(props) {

  return (
    <div className='Account'>
      <header>
        <h1>Account & Settings</h1>
      </header>
      <main>
        <AccountDetails />
        <UserSettings />
      </main>
    </div>
  )
};
