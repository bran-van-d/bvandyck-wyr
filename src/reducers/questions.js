import { RECEIVE_QUESTIONS, UPDATE_VOTES, ADD_QUESTION } from '../actions/questions';


export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state;
    case UPDATE_VOTES:
      const { question, voteOption, authedUser } = action;

      return {
        ...state,
        [question.id]: {
          ...state[question.id],
          [question[voteOption]]: [
            state[question.id][voteOption].text,
            state[question.id][voteOption].votes = state[question.id][voteOption].votes.concat([authedUser.name])
          ]
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
  }
}
