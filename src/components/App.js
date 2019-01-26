import React, { Component, Fragment } from 'react'
import '../styles/App.scss';
import Login from './Login';
import HomePage from './Homepage';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import Nav from './Nav';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Login} />
                <Route path='/new' exact component={NewPoll} />
                <Route path='/home' exact component={HomePage} />
                <Route path='/leaderboard' exact component={Leaderboard} />
            </div>}
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps( { users, questions }) {
  return {
    loading: isEmpty(users) || isEmpty(questions)
  }
}

export default connect(mapStateToProps)(App)
