import React, { Component } from 'react';
// import axios from 'axios';
// import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }



  render() {
    return (
      <div className="App">
        <nav className="navBar">
          <span className="logo">
            <img src="" alt=""/>
          </span>
          <div className="Summary">
            <button>Overview</button>
          </div>
          <div className="budget">
            <button>My Budget</button>
          </div>
          <div className="garden">
            <button>My Garden</button>
          </div>
          <div className="Account">
            <button>My Account</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
