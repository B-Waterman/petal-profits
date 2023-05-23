import React, { useState } from 'react';
import './App.scss';
import logo from './petalprofit.png';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Budget from './components/Budget';
import Home from './components/Home';
import Garden from './components/Garden';
import Account from './components/Account';
import PlantGoal from './components/Garden/PlantGoal';
import TransactionsProvider from './TransactionsProvider';
import { RemainderIdProvider } from './components/RemainderIdContext';

export default function App(props) {
  const [idTag, setIdTag] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navBar">
          <span className="logo">
            <img src={logo} alt="Petal Profits" />
          </span>
          <div className="navButton">
            <Link to="/">HOMEPAGE</Link>
          </div>
          <div className="navButton">
            <Link to="/transactions">MY BUDGET</Link>
          </div>
          <div className="navButton">
            <Link to="/garden">MY GARDEN</Link>
          </div>
          <div className="navButton">
            <Link to="/account">MY ACCOUNT</Link>
          </div>
        </nav>

        <TransactionsProvider>
          <RemainderIdProvider value={{ idTag, setIdTag }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Budget />} />
              <Route path="/garden" element={<Garden />} />
              <Route path="/account" element={<Account />} />
              <Route path="/plantgoals" element={<PlantGoal />} />
            </Routes>
          </RemainderIdProvider>
        </TransactionsProvider>
      </div>
    </BrowserRouter>
  );
}
