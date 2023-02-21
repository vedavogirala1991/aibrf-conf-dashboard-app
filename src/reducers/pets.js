import {
  RECIEVE_PETS} from '../actions/pets'

//Pets Reducer
const pets = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_PETS:
      return {
        ...state,
        ...action.pets,
      }
    default:
      return state
  }
}

export default pets
