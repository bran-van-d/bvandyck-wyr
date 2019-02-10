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
      debugger;
      return {
        ...state,
        [action.id]: {
          [action.option]: state[action.id].option.concat([action.user])
        }
      }
  }
}
