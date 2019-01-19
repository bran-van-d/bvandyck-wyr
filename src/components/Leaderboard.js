import React, { Component } from 'react';

class Leaderboard extends Component {
  render() {
    return (
      // TODO: This needs to be refactored to benefit from a base "card" component or something similar.
      <div className="poll-list flex-column">
        <div className="poll flex-column">
          <div className="poll-header">
            <h3 className="poll-header--text"> Name asks: </h3>
          </div>

          <div className="poll-question-group flex-row">
            <div className="poll-avatar">
              <div className="avatar"> </div>
            </div>

            <div className="leader-board-question-type flex-column">
              <h3> Name </h3>
              <span> Answered Questions: 7 </span>
              <span> Answered Questions: 3 </span>
            </div>

            <div className="leader-board-score">
              <h3 className="score-header"> Score </h3>
              <div className="leader-board-score__bubble"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leaderboard