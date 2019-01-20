import React, { Component, Fragment } from 'react'
import '../styles/App.scss';
import Login from './Login';
import HomePage from './Homepage';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import Nav from './Nav';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (

      <Router>
        <Fragment>
          <Nav />
          <Route path='/login' exact component={Login} />
          <Route path='/new' exact component={NewPoll} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/leaderboard' exact component={Leaderboard} />
        </Fragment>
      </Router>

    );
  }
}

export default connect()(App)

