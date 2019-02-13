import React, { Component } from 'react';

class Scorecard extends Component {
  render() {
    const { user, questions } = this.props;

    const currentUser = user.id;
    const createdQuestions = user.questions.length;

    const answeredQuestions = questions.filter((question) => {
      const votedOne = question.optionOne.votes.includes(currentUser);
      const votedTwo = question.optionTwo.votes.includes(currentUser);

      return votedOne || votedTwo;
    }).length;

    const score = answeredQuestions + createdQuestions;

    debugger;

    return (
      <div className="score-card flex-row">
        <div className="leader-board-question-type flex-column">
          <h3> Name </h3>
          <span> Answered Questions: {answeredQuestions} </span>
          <span> Created Questions: {createdQuestions} </span>
        </div>

        <div className="leader-board-score">
          <h3 className="score-header"> Score </h3>
          <div className="leader-board-score__bubble">
          {score}
          </div>
        </div>
      </div>

    )
  }
}




export default Scorecard
