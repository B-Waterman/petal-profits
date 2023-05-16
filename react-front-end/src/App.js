import {useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import logo from './petalprofit.png';
import { Link, BrowserRouter} from 'react-router-dom';


export default function App(props){



 
    return (
      <BrowserRouter>

      <div className="App">
        <nav className="navBar">
          <span className="logo">
            <img src={logo} alt="Petal Profits" />
          </span>
          <div className="navButton">
            {/* <button onClick={axios.get('/')}>Overview</button> */}
              <Link to="/">Overview</Link>
          </div>
          <div className="navButton">
            <Link to="/transactions">My Budget</Link>
          </div>
          <div className="navButton">
            <Link to="/garden">My Garden</Link>
          </div>
          <div className="navButton">
            <Link to="/account">My Account</Link>
          </div>
        </nav>
      </div>
      </BrowserRouter>
    )
};
