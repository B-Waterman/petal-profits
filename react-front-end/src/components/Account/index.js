import React from 'react';

import './Account.scss';

import CategoriesProvider from '../Budget/providers/CategoriesProvider';

export default function Account(props) {

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

  return (
    <CategoriesProvider>
    <div className='Account'>
      <body>
        <header>
          <h1>Account & Settings</h1>
        </header>
        <main>
          <div className='account-details'>
            <h2>Account Details</h2>
            <div className='box'></div>
          </div>
          <div className='notifications'>
            <h2>Notification Settings</h2>
          </div>
          <div className='user-preferences'>
            <h2>User Preferences</h2>
          </div>
        </main>
        <footer>
          <div className='links'>
            <span className='report'>
            </span>
            <span></span>
            <span></span>
          </div>
        </footer>
      </body>
    </div>
    </CategoriesProvider>
  )
};
