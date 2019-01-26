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
            <div key={question.id} className="poll flex-column">
              <div className="poll-header">
                 <h3 className="poll-header--text"> {question.author} asks: </h3>
              </div>

              <div className="poll-question-group flex-row">
                <div className="poll-avatar">
                  <div className="avatar"> </div>
                </div>
                <div className="poll-question flex-column">
                  <h3> Would you rather </h3>
                  <span> ...{question.optionOne.text}...</span>
                  <button className="view-poll-btn"> View Poll </button>
                </div>
              </div>

            </div>

          ))}
        </div>
      </div>
    )
  }
}


function mapStateToProps({ questions }) {
  return {
    questions: Object.values(questions)
  }
}

export default connect(mapStateToProps)(PollList)
