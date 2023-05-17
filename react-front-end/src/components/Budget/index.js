import './styles.scss';
import React, { useEffect, useState} from 'react';
import axios from 'axios'
import Sankey from './Sankey';
import CategoryList from './CategoryList';


export default function Budget(props) {
  


  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        //get back array of category objects
        const data = response.data
       
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='budget'>
      <h1>Budget</h1>
      <Sankey />
      <CategoryList/>
    </div>
  )
}