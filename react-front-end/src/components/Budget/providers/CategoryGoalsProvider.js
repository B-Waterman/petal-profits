import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

// Create a Context
export const categoryGoalsContext = createContext();

// Create a Component wrapper from Context.Provider
export default function CategoryGoalsProvider(props) {

  const [categoryGoals, setCategoryGoals] = useState([]);

  // Get transaction/category info and set state item
  useEffect(() => {
    axios.get('http://localhost:8080/api/category-goals')
      .then((response) => {
        setCategoryGoals(prev => [...prev, ...response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const data = {categoryGoals, setCategoryGoals};

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <categoryGoalsContext.Provider value={data}>
      {props.children}
    </categoryGoalsContext.Provider>
  );
};
