import React from 'react';
import './App.scss';
import { Link, BrowserRouter} from 'react-router-dom';


export default function App(props){


    return (
      <>
        <BrowserRouter>
      <div className='banner'>
        garden
      </div>
      <div className='container'>
        body 
      </div>
      </BrowserRouter>
      </>
    )
};
