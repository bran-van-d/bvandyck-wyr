export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_VOTES = 'UPDATE_VOTES'

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
