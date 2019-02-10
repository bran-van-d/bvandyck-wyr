import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateVotes } from '../actions/questions';

class PollDetail extends Component {
  state = {
    voteOption: ''
  }

  handleSubmit = (e) => {
      e.preventDefault();

      const { voteOption } = this.state;
      const { dispatch, question } = this.props

      dispatch(updateVotes(question, voteOption));

      this.setState(() => ({
        voteOption: '',
      }))
    }

  handleChange = (e) => {
    const voteOption = e.target.value;

    this.setState(() => ({
      voteOption
    }))
  }

  render() {
    const { user, question, authedUser } = this.props;
    const { id, author, optionOne, optionTwo } = question;

    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;

    const voteTotal = optionOneVotes + optionTwoVotes

    const optionOnePercent = optionOneVotes === 0 ? 0 : (voteTotal / optionOneVotes) * 100;
    const optionTwoPercent = optionTwoVotes === 0 ? 0 : (voteTotal / optionTwoVotes) * 100;

    return (
      <div className="poll-details">
        <div key={id} className="poll poll-vote-detail flex-column">
          <div className="poll-header">
            <h3 className="poll-header--text"> {author} asks: </h3>
          </div>

          <div className="poll-question-group flex-row">
            <div className="poll-avatar">
              <div className="avatar">
                <img
                  src={user.avatarURL}
                  alt="Avatar"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <div className="poll-question poll-question-vote flex-column">
              <h2> RESULTS </h2>
              {user.name === authedUser
              ? <div className="flex-column">
                  <div className="vote-score flex-column">
                    <span> {optionOne.text} </span>
                    <progress max="100" value={optionOnePercent}></progress>
                    <span> {optionOneVotes} out of {voteTotal} votes </span>
                  </div>

                  <div className="vote-score flex-column">
                    <span> {optionTwo.text} </span>
                    <progress max="100" value={optionTwoPercent}></progress>
                    <span> {optionOneVotes} out of {voteTotal} votes </span>
                  </div>
                </div>
              : <div className="flex-column">
                  <h3> Would you rather </h3>
                    <form onSubmit={this.handleSubmit}>
                      <input onChange={this.handleChange} type="radio" name="optionOne" value="optionOne" /> {optionOne.text} <br/>
                      <input onChange={this.handleChange} type="radio" name="optionTwo" value="optionTwo" /> {optionTwo.text} <br/>
                      <button className="view-poll-btn"> Submit </button>
                    </form>

                </div>}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps( { questions, authedUser, users }, props) {
  const { id } = props.match.params;
  const questionMap = Object.values(questions);
  const userMap = Object.values(users);
  const author = questionMap.find((quest) => quest.id === id).author;

  return {
    question: questionMap.find((quest) => quest.id === id),
    user: userMap.find((u) => u.id === author),
    authedUser
  }
}

export default connect(mapStateToProps)(PollDetail)
