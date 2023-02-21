import {
  getInitialData} from '../utils/api'
import {
  recieveUsers} from './users'
import {
    recievePets} from './pets'
//import {setAuthedUser} from './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading-bar'

//Initial auth user based on logon
//const AUTHED_ID = ''


//Handles initial Data for App
export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users,pets}) => {
        dispatch(recieveUsers(users))
        dispatch(recievePets(pets))
        //dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
    })
  }
}
