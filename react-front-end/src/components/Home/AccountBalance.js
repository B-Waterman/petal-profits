// import {createContext, useState, useEffect} from 'react';
// import axios from 'axios'

// export const categoriesContext = createContext();

// export default function AccountBalance(props) {
//   const [balance, setBalance] = useState([]);

//   useEffect(()=>{
//     axios.get('http://localhost:8080/api/accounts')
//     .then((response) => {
//       (prev => [...prev, ...response.data]);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   return (
//     <categoriesContext.Provider value={data}>
//       {props.children}
//     </categoriesContext.Provider>
//   );

//   return (
//     <div className="account-balance">
//       <h3>Current Balance(s)</h3>
//       <span>{balance}</span>
//     </div>
//   );
// };
