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
        <Input addNumber={this._addNumber.bind(this)} />
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

class Input extends Component {
  render() {
    return (
      <form className="InputForm" onChange={this._handleSubmit.bind(this)} >
        <label>This is my input box</label>
        <div className="input-field">
          <input placeholder="Starting Number:" ref={(input) => this._number = input} />
        </div>
        <div className="input-form-actions">
          <button type="submit">
            Submit Number
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    
    let number = this._number;

    this.props.addNumber(number.value);
  }
}

class Output extends Component {
  render() {
    return (
      <div className="App">
        <h2>This is my output: {this.props.startingNumber}</h2>
      </div>
    );
  }
}