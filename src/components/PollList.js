import React, { Component } from 'react';
import Poll from './Poll';

class PollList extends Component {
  render() {
    return (
      <div className="poll-list flex-column">
        <div className="question-header flex-row">
          <div className="question-type question-type--active"> Unanswered Questions </div>
          <div className="question-type"> Answered Questions </div>
        </div>

        <div className="poll-group">
          <Poll />
          <Poll />
          <Poll />
          <Poll />
          <Poll />
          
        </div>

        
      </div>
    )
  }
}

export default PollList