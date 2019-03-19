import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/questions'
import { Redirect } from 'react-router-dom';


class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (optionType, e) => {
    const text = e.target.value;

    if(optionType === 'optionOne') {
      this.setState(() => ({
        optionOne: text
      }))
    } else {
      this.setState(() => ({
        optionTwo: text
      }))
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props

    dispatch(handleAddPoll(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }

  render() {
    const { toHome, optionOne, optionTwo } = this.state;

    if (toHome === true) {
      return <Redirect to='/home' />
    }

    if (this.props.authedUser === '' || this.props.authedUser === null) {
      alert('Please log in.')
      return <Redirect to={{pathname: '/', state: {redirectUrl: '/add'}}} />
    }

    const incompleteEntries = optionTwo === '' || optionOne === '';

    return (
      <div className="new-poll">
        <h1 className="new-poll-header"> Create New Question </h1>

        <div className="new-poll-question flex-column">
          <span> Complete the question:</span>
          <h3> Would you rather ... </h3>

          <form className="new-poll-options" onSubmit={this.handleSubmit}>
            <input onChange={(e) => this.handleChange('optionOne', e)} placeholder="Enter Option One text here"/>
            <span> OR </span>
            <input onChange={(e) => this.handleChange('optionTwo', e)}placeholder="Enter Option Two text here" />
            <button disabled={incompleteEntries} className="submit-poll-btn"> Submit </button>
          </form>

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

export default connect(mapStateToProps)(NewPoll)