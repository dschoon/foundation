import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Foundation</h1>
        </header>
        <p className="App-intro">
          We're just getting started!
        </p>
      </div>
    );
  }
}

export default Home;
