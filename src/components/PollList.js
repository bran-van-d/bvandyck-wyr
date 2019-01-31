import React, { Component } from 'react';
import Poll from './Poll';
import { connect } from 'react-redux';

class PollList extends Component {
  render() {
    return (
      <div className="poll-list flex-column">
        <div className="question-header flex-row">
          <div className="question-type question-type--active"> Unanswered Questions </div>
          <div className="question-type"> Answered Questions </div>
        </div>

        <div className="poll-group">
          {this.props.questions.map((question) => (
            <Poll
              key={question.id}
              id={question.id}
              author={question.author}
              avatar={this.props.users.find((user) => user.id === question.author).avatarURL}
              questionText={question.optionOne.text}
              />
          ))}
        </div>
      </div>
    )
  }
}


function mapStateToProps({ questions, users }) {
  return {
    questions: Object.values(questions),
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(PollList)
