import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to De Wet's React App</h2>
        </div>
        <AccountInput addNumber={this._addNumber.bind(this)} />
        <Output startingNumber={this.state.startingNumber} />
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      startingNumber: 0
    }
  }

  _addNumber(number) {
    this.setState({startingNumber: number})
  }
}

export default App;

class AccountInput extends Component {
  render() {
    return (
      <form className="App" onChange={this._handleSubmit.bind(this)} >
        <label>Account Balance</label>
        <div className="input-field">
          <input placeholder="Starting Number:" ref={(input) => this._balance = input} />
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    
    let balance = this._balance;

    this.props.addNumber(balance.value);
  }
}

class Output extends Component {
  render() {
    return (
      <div className="App">
        <h2>Remaining Balance: {this.props.startingNumber}</h2>
      </div>
    );
  }
}