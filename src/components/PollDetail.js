import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollDetail extends Component {
  render() {
    const { id, author, avatar, optionOne, optionTwo } = this.props.question;
    
    return (
      <div className="poll-details">
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
              <form>
                <input type="radio" name="optionOne" value={optionOne.text} /> {optionOne.text} <br/>
                <input type="radio" name="optionTwo" value={optionTwo.text} /> {optionTwo.text} <br/>
              </form>

              

              <button className="view-poll-btn"> Submit </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps( { questions, authedUser }, props) {
  const { id } = props.match.params;
  const questionMap = Object.values(questions);

  return {
    question: questionMap.find((quest) => quest.id === id)
  }
}

export default connect(mapStateToProps)(PollDetail)
