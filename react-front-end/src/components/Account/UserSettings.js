import React from 'react';
import EditFirstName from './EditFirstname';
import EditLastName from './EditLastname';
import EditEmail from './EditEmail';
import EditPassword from './EditPassword';

export default function UserSettings(props) {

  return (
    <div>
      <EditFirstName />
      <EditLastName />
      <EditEmail />
      <EditPassword />
    </div>
  );
};
