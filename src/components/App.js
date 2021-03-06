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
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';
import PollDetail from './PollDetail';
import NoRouteMatch from './NoRouteMatch';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading, notLoggedIn, authedUser } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav notLoggedIn={notLoggedIn} authedUser={authedUser} />
            {loading === true
            ? null
            : <div>
                <Switch>
                  <Route path='/' exact component={Login} />
                  <Route path='/add' exact component={NewPoll} />
                  <Route path='/home' exact component={HomePage} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/question/:id' exact component={PollDetail} />
                  <Route component={NoRouteMatch} />
                </Switch>
            </div>}
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps( { users, questions, authedUser }) {
  return {
    loading: isEmpty(users) || isEmpty(questions),
    notLoggedIn: authedUser === '',
    authedUser
  }
}

export default connect(mapStateToProps)(App)
