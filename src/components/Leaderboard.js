import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scorecard from './Scorecard';

class Leaderboard extends Component {
  render() {
    const { users, questions } = this.props;

    return (
      <div>
        {users.map((user) => (
          <div key={user.id} className="poll-list poll-list--leaderboard flex-column">
            <div className="poll flex-column">
              <div className="poll-header">
                <h3 className="poll-header--text"> {user.name} asks: </h3>
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

                <Scorecard
                  user={user}
                  questions={questions}
                />
              </div>
            </div>
          </div>
        ))}

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

export default connect(mapStateToProps)(Leaderboard)
