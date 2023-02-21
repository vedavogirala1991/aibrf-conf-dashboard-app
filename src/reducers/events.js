import {
  RECIEVE_EVENTS} from '../actions/events'

//Pets Reducer
const events = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_EVENTS:
      return {
        ...state,
        ...action.events,
      }
    default:
      return state
  }
}

export default events
