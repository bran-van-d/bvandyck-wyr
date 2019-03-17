import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class NoRouteMatch extends Component {
  componentDidMount() {
    debugger;
    if(this.props.notLoggedIn) {
      alert('Please log in.')
    }
  }

  render() {
    return (
      <div className="poll-details">
        <h1> 404 -- Page not  found! </h1>  
        <div className="nav-selection flex-row">
          <span className="logout-username"> {this.props.authedUser} </span>
          <NavLink to='/' exact activeClassName='active'>
            Login
          </NavLink>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === '' || authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(NoRouteMatch)