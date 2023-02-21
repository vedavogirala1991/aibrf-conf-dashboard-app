import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'

import authedUser from './authedUser'
import users from './users'
import events from './events'

//Combine Reducers
export default combineReducers({
  authedUser,
  users,
  events,
  loadingBar : loadingBarReducer,
})
