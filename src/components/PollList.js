import React, { Component } from 'react';
import Poll from './Poll';
import { connect } from 'react-redux';

class PollList extends Component {
  state = {
    activeTab: 'UNANSWERED'
  }

  changeTab(tabName) {
    this.setState(() => ({
      activeTab: tabName
    }))
  }

  render() {
    const { questions } = this.props;
    const currentUser = 'sarahedo';

    const answers = [];
    const noAnswer = [];

    questions.forEach((question) => {
      const votedOne = question.optionOne.votes.includes(currentUser);
      const votedTwo = question.optionTwo.votes.includes(currentUser);

      if(votedOne || votedTwo) {
        answers.push(question);
      }
      else {
        noAnswer.push(question);
      }
    });

    return (
      <div className="poll-list flex-column">
        <div className="question-header flex-row">
          <div 
            onClick={() => this.changeTab('UNANSWERED')} 
            className={this.state.activeTab === 'UNANSWERED' ? "question-type question-type--active" : "question-type"  }
            > Unanswered Questions 
            </div>

          <div 
            onClick={() => this.changeTab('ANSWERED')} 
            className={this.state.activeTab === 'ANSWERED' ? "question-type question-type--active" : "question-type"}
            > Answered Questions 
          </div>
        </div>

        <div className="poll-group">
          {this.state.activeTab === 'ANSWERED'
          ? answers.map((question) => (
            <Poll
              key={question.id}
              id={question.id}
              author={question.author}
              avatar={this.props.users.find((user) => user.id === question.author).avatarURL}
              questionText={question.optionOne.text}
              />
          ))
          : noAnswer.map((question) => (
            <Poll
              key={question.id}
              id={question.id}
              author={question.author}
              avatar={this.props.users.find((user) => user.id === question.author).avatarURL}
              questionText={question.optionOne.text}
            />
          ))}
          
        </div>
      </div>
    )
  }
}


function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.values(questions),
    users: Object.values(users),
    authedUser
  }
}

export default connect(mapStateToProps)(PollList)
