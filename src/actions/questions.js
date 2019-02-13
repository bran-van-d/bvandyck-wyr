import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion } from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_VOTES = 'UPDATE_VOTES';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function updateVotes(question, voteOption, authedUser) {
  return {
    type: UPDATE_VOTES,
    question,
    voteOption,
    authedUser
  }
}

export function handleAddPoll(optionOneText, optionTwoText, author) {
  return (dispatch, getState) => {
    // const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author,
      optionOneText,
      optionTwoText
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
