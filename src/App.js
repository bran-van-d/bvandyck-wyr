import React, { Component } from 'react';
import './App.css';
import { _getUsers } from './_DATA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }


  componentDidMount() {
    console.log(_getUsers());

    this.setState(() => ({
      users: _getUsers()
    }))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
