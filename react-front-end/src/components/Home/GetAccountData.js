// import {createContext, useState, useEffect} from 'react';
// import axios from 'axios'

// export const accountsContext = createContext();

// export default function GetAccountData(props) {

//   const [accounts, getAccounts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/accounts')
//       .then((response) => {
//         getAccounts(prev => [...prev, ...response.data]);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const data = { accounts };
//   // console.log(accounts)


//   return (
//     <accountsContext.Provider value={data}>
//       {props.children}
//     </accountsContext.Provider>
//   );
// };
