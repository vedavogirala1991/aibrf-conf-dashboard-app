import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'
import Pets from './Pets'


class Dashboard extends Component {
  state = {
    activeTab : 'Unanswered Questions'
  }
  showTab= (e, tabName) => {
    e.preventDefault()
    this.setState(()=>({
      activeTab : tabName,
    }))
  }
  render() {
    const {petIds,authedUser} = this.props
    const {activeTab} = this.state

    if(!authedUser)
    {
      return <Redirect 
        to={{
          pathname: '/',
          state: { from: '/home' }
        }}
      />

      //return <Redirect  to='/'/>
    }
    return (
      <div className='dashboard-content'>
        <Pets
          id='Unanswered Questions'
          className={activeTab==='Unanswered Questions' ? 'tabcontent active' : 'tabcontent'}
          petIds={petIds}/>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, pets}) => {
  console.log('users :: ',users)
  const petIds = authedUser ? users[authedUser].pets : null
  console.log('authedUser :: ',authedUser)
  console.log('Dashboard petids :: ',petIds)
  return {
    authedUser,
    users,
    petIds,
  }
}


export default connect(mapStateToProps)(Dashboard)
