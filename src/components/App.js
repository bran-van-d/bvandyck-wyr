import React, { Component, Fragment } from 'react'
import '../styles/App.css';
import Login from './Login';
import HomePage from './Homepage';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <Router>
        <Fragment>
          <Nav />
          <Route path='/' exact component={Login} />
          <Route path='/new' exact component={NewPoll} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/leaderboard' exact component={Leaderboard} />
        </Fragment>
      </Router>

    );
  }
}

export default App;
