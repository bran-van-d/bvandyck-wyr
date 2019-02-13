import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    user: ''
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(''))
  }

  handleChange = (e) => {
    const user = e.target.value;

    this.setState(() => ({
      user
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(user))

    this.setState(() => ({
      user: ''
    }))

    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)

  }

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
          <form className='login-user' onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option value="" defaultValue> Select user </option>
              {this.props.users.map((user) => (
                <option key={user.name}> {user.id} </option>
              ))}
            </select>
            <button 
              className="login-button"
              type="submit">
              Sign in 
            </button>
          </form>
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

export default withRouter(connect(mapStateToProps)(Login))
