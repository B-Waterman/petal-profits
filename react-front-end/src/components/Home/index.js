import React from 'react';

import CategoriesProvider from '../Budget/providers/CategoriesProvider';

import './Home.scss';

export default function Home(props) {

  return (
  <CategoriesProvider>
    <div className='home'>
      <h1>Home</h1>
    </div>
  </CategoriesProvider>
  )
};
