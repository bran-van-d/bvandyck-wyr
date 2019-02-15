import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Nav extends Component {
  render() {
    if(this.props.notLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <nav className='nav flex-row'>
          <div className="nav-selection">
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </div>

          <div className="nav-selection">
            <NavLink to='/new' exact activeClassName='active'>
              New Question
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

export default Nav