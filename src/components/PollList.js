import React, { Component } from 'react';
import Poll from './Poll';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PollList extends Component {
  state = {
    activeTab: 'UNANSWERED',
    sortByTimeStamp: function(a, b) {
      return b.timestamp - a.timestamp
    }
  }

  changeTab(tabName) {
    this.setState(() => ({
      activeTab: tabName,
     }))
  }

  render() {
    const { questions, authedUser } = this.props;
    const { activeTab, sortByTimeStamp } = this.state;

    if (authedUser === '' || authedUser === null) {
      alert('Please log in.')
      return <Redirect to={{ pathname: '/', state: { redirectUrl: '/home' } }} />
    }

    let answers = [];
    let noAnswer = [];

    questions.forEach((question) => {
      const votedOne = question.optionOne.votes.includes(authedUser);
      const votedTwo = question.optionTwo.votes.includes(authedUser);

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
            className={activeTab === 'UNANSWERED' ? "question-type question-type--active" : "question-type"  }
            > Unanswered Questions 
            </div>

          <div 
            onClick={() => this.changeTab('ANSWERED')} 
            className={activeTab === 'ANSWERED' ? "question-type question-type--active" : "question-type"}
            > Answered Questions 
          </div>
        </div>

        <div className="poll-group">
          {activeTab === 'ANSWERED'
          ? answers.sort(sortByTimeStamp).map((question) => (
            <Poll
              key={question.id}
              id={question.id}
              author={question.author}
              avatar={this.props.users.find((user) => user.id === question.author).avatarURL}
              questionText={question.optionOne.text}
              />
          ))
          : noAnswer.sort(sortByTimeStamp).map((question) => (
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
