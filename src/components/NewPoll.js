import React, { Component } from 'react';

class NewPoll extends Component {
  render() {
    return (
      <div className="new-poll">
        <h1 className="new-poll-header"> Create New Question </h1>

        <div className="new-poll-question flex-column">
          <span> Complete the question:</span>
          <h3> Would you rather ... </h3>
          <input placeholder="Enter Option One text here"/>
          <span> OR </span>
          <input placeholder="Enter Option Two text here" />
          <button className="submit-poll-btn"> Submit </button>
        </div>
        
      </div>
    )
  }
}

export default NewPoll