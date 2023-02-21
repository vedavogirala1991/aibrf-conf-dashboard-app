import React from 'react'
import {connect} from 'react-redux'
import { formatEvent } from '../utils/helpers'

const Event = (props) => {

  const event = props.event
  console.log('Single event details : ',event)
  return (
    <div>
      <p className='aibrf-home-intro-highlight'>{event.title}</p>
      <p className='aibrf-event-intro-2'>From : 
        <span className='event-aibrf-intro'> {event.startDate} </span>
        to :  <span className='event-aibrf-intro'> {event.endDate}</span>
      </p>
      {event.description}
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
    event :  formatEvent(events[id]),
  }
}

export default connect(mapStateToProps)(Event)
