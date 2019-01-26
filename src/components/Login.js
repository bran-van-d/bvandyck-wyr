import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div className="login-box flex-column">
        <div className="login-box__welcome-header">
          <div className="welcome-header__welcome-message">
            <h3> Welcome to the Would You Rather App! </h3>
            <p> Please sign in to continue </p>
          </div>
        </div>

        <div className="login-box__select-user flex-column">
          <img src="/images/react-redux-icon.jpg" alt="Cannot find" height="200" width="200" className="react-redux-logo" />

          <h3 className="login-text"> Sign in</h3>
          <select>
            <option value="" disabled defaultValue> Select user </option>
            {this.props.users.map((user) => (
              <option key={user.name}> {user.name} </option>
            ))}
          </select>
          <button className="login-button"> Sign in </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  console.log(Object.values(users))
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)
