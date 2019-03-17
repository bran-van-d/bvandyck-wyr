import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class Nav extends Component {
  render() {

  return (
      <nav className='nav flex-row'>
          <div className="nav-selection">
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </div>

          <div className="nav-selection">
            <NavLink to='/add' exact activeClassName='active'>
              Add Question
            </NavLink>
          </div>

          <div className="nav-selection">
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </div>

          <div className="nav-selection flex-row">
            <span className="logout-username"> {this.props.authedUser} </span>
            <NavLink to='/' exact activeClassName='active'>
              Logout
            </NavLink>
          </div>
      </nav>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    loading: isEmpty(users) || isEmpty(questions),
    notLoggedIn: authedUser === '',
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)