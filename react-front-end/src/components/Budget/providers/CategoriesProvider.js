// import {createContext, useState, useEffect} from 'react';
// import axios from 'axios'

// // Create a Context
// export const categoriesContext = createContext();

// // Create a Component wrapper from Context.Provider
// export default function CategoriesProvider(props) {

//   const [categories, setCategories] = useState([]);

//   // Get transaction/category info and set state item
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/categories')
//       .then((response) => {
//         setCategories(prev => [...prev, ...response.data]);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const data = {categories};

//   // We can now use this as a component to wrap anything
//   // that needs our state
//   return (
//     <categoriesContext.Provider value={data}>
//       {props.children}
//     </categoriesContext.Provider>
//   );
// };