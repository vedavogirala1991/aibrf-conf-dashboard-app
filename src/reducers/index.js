import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'

import authedUser from './authedUser'
import users from './users'
import pets from './pets'

//Combine Reducers
export default combineReducers({
  authedUser,
  users,
  pets,
  loadingBar : loadingBarReducer,
})
