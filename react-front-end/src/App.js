import {useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import logo from './petalprofit.png';
import { Link } from 'react-router-dom';


export default function App(props){

  const summaryPage = () => {
    axios.get("/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  const budgetPage = () => {
    axios.get("/transactions")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }
  
  const gardenPage = () => {
    axios.get("/garden")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }
  
  const accountPage = () => {
    axios.get("/accounts")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  } 

    // return (
    //   <div className="App">
    //     <nav className="navBar">
    //       <span className="logo">
    //         <img src={logo} />
    //       </span>
    //       <div className="Summary">
    //         <button onClick={summaryPage}>Overview</button>
    //       </div>
    //       <div className="Budget">
    //         <button onClick={budgetPage}>My Budget</button>
    //       </div>
    //       <div className="Garden">
    //         <button onClick={gardenPage}>My Garden</button>
    //       </div>
    //       <div className="Account">
    //         <button onClick={accountPage}>My Account</button>
    //       </div>
    //     </nav>
    //   </div>
    // );

    return (
      <div className="App">
        <nav className="navBar">
        <ul>
          <li className="logo">
            <img src={logo} />
          </li>
          <li className="Summary">
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/transactions">My Budget</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
      </ul>
        </nav>
      </div>
    )
}