export const RECEIVE_QUESTIONS = 'RECEIVE_USERS';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}