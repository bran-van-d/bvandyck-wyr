import { RECEIVE_QUESTIONS } from '../actions/questions';
import { UPDATE_VOTES } from '../actions/questions';

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
          voteOption: [
            state[question.id][voteOption].text,
            state[question.id][voteOption].votes = state[question.id][voteOption].votes.concat([authedUser.name])
          ]
        }
      }
  }
}
