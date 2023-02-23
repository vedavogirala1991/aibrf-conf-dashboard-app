import React from 'react'
import {connect} from 'react-redux'
import { formatEvent } from '../utils/helpers'
import {Link} from 'react-router-dom'

class User extends React.Component {

  user = this.props.user

  viewPoll = (e,id) => {
    e.preventDefault()
    // this.props.history.push(`/event/${id}`)
  }

  render() {
    return (
      <div className='user-short-details'>
        <div className='user-table-header'>
          <div className='user-details-column'>{this.user.name}</div>
          <div className='user-details-column'>{this.user.staffCode}</div>
          <div className='user-details-column-mobile'>{this.user.mobile}</div>
          <div className='user-details-column-gender'>{this.user.gender}</div>
          <div className='user-details-column-role'>{this.user.role}</div>
          <div className='user-details-column'>Expand</div>
        </div>
        <div>Remaining details</div>
      </div>
    )
  }
}

const mapStateToProps = ({users,authedUser,events},props) => {
  console.log('Users Events : ',users)
  console.log('Events events : ',events)
  const id = props.id
  console.log('Single Event : ',props.id)
  //const petIds = petIds ? Object.keys(pets).filter((id) => petIds.includes(id)) : null
  return {
    user :  users[id] ? users[id] : null,
  }
}

export default connect(mapStateToProps)(User)
