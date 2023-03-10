import {
  getInitialData} from '../utils/api'
import {
  recieveUsers} from './users'
import {
    recieveEvents} from './events'
import {setAuthedUser} from './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading-bar'

//Initial auth user based on logon
const AUTHED_ID = '3'


//Handles initial Data for App
export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users,events}) => {
        dispatch(recieveUsers(users))
        dispatch(recieveEvents(events))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
    })
  }
}
