import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Poll extends Component {
  handleClick(id) {
    debugger;
    this.props.history.push(`question/${id}`);
  }


  render() {
    const { id, author, avatar, questionText } = this.props;
    
    return (
      <div key={id} className="poll flex-column">
        <div className="poll-header">
           <h3 className="poll-header--text"> {author} asks: </h3>
        </div>

        <div className="poll-question-group flex-row">
          <div className="poll-avatar">
            <div className="avatar">
              <img
                src={avatar}
                alt="Avatar"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className="poll-question flex-column">
            <h3> Would you rather </h3>
            <span> ...{questionText}...</span>
            <button onClick={() => this.handleClick(id)} className="view-poll-btn"> View Poll </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Poll)
