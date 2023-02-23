import React, { useState } from 'react'
import {connect} from 'react-redux'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { formatEvent } from '../utils/helpers'
import {Link} from 'react-router-dom'

const User = (props) => {

  const user = props.user
  const [toggle, setToggle] = useState(false)

  const viewPoll = (e,id) => {
    e.preventDefault()
    // this.props.history.push(`/event/${id}`)
  }

  return (
    <div className='user-short-details'>
      <div className='user-details-table-header'>
        <div className='user-details-column-name'>{user.name}</div>
        <div className='user-details-column-staffcd'>{user.staffCode}</div>
        <div className='user-details-column-mobile'>{user.mobile}</div>
        <div className='user-details-column-gender'>{user.gender}</div>
        <div className='user-details-column-role'>{user.role}</div>
        <div className='user-details-column-expand'>
          <button className='user-expand-button' onClick={() => setToggle(!toggle)}>
            {!toggle ? <FaPlus/>: <FaMinus/>}
          </button>
        </div>
      </div>
      {toggle && <div>Remaining details</div>}
    </div>
  )

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
