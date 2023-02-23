import React, { useState } from 'react'
import {connect} from 'react-redux'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { formatTime } from '../utils/helpers'
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
        <div className='user-details-column-staffcd'>{user.staffCode ? user.staffCode : '-' }</div>
        <div className='user-details-column-mobile'>{user.mobile ? user.mobile : '-'}</div>
        <div className='user-details-column-gender'>{user.gender === 'M' ? 'Male' : 'Female'}</div>
        <div className='user-details-column-role'>{user.role ? user.role : '-'}</div>
        <div className='user-details-column-expand'>
          <button className='user-expand-button' onClick={() => setToggle(!toggle)}>
            {!toggle ? <FaPlus/> : <FaMinus/>}
          </button>
          {!toggle ? <span className='expand'> Click to expand</span> : <span className='expand'> Click to close</span>}
        </div>
      </div>
      {toggle && 
        <div className='more-user-details'>
          <div className='more-details-section'>
            <p><b className='bold-details'>PF Number : </b> {user.pfNo ? user.pfNo : 'NA'}</p>
            {user.emergencyDetails ?
              <div className='emergency-details'>
                <p><b className='bold-details'>Emergency Contact : </b>{user.emergencyDetails.ecName}</p>
                <p><b className='bold-details'>Relation : </b>{user.emergencyDetails.ecRelation}</p>
                <p><b className='bold-details'>Emergency Contact Number : </b>{user.emergencyDetails.ecNumber}</p>
              </div> : 
              <div className='emergency-details'>
                <p><b className='bold-details'>Emergency Details : </b>NA</p>
              </div>
            }
          </div>
          <div className='more-details-section'>
            {user.arrivalDetails &&
              <p><b className='bold-details'>Arrival Date & Time : </b>{user.arrivalDetails.arrivalDate} : {formatTime(user.arrivalDetails.arrivalTime)}</p>
            }
            {user.departureDetails &&
              <p><b className='bold-details'>Departure Date & Time : </b>{user.departureDetails.departureDate} : {formatTime(user.departureDetails.departureTime)}</p>
            }
            {user.stayDetails ?
              <p><br/><b className='bold-details'> Hotel Name : </b>{user.stayDetails.hotelName} <br/>
              <b className='bold-details'>Room Number : </b>{user.stayDetails.roomNum} </p> : <p><b className='bold-details'>Stay Details : </b>NA</p>
            }
          </div>
        </div>}
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
