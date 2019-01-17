import React, { Component } from 'react';

class Poll extends Component {
  render() {
    return (
      <div className="poll flex-column">
        <div className="poll-header">
           <h3 className="poll-header--text"> Name asks: </h3>
        </div>

        <div className="poll-question-group flex-row">
          <div className="poll-avatar"> 
            <div className="avatar"> </div>
          </div>
          <div className="poll-question flex-column">
            <h3> Would you rather </h3>
            <span> ...the question... </span>
            <button className="view-poll-btn"> View Poll </button>
          </div>
        </div>

      </div>
    )
  }
}

export default Poll