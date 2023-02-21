import React from 'react'
import {connect} from 'react-redux'
import Event from './Event'

const Events = (props) => {
  const eventIds = props.eventIds
  console.log('Event ID : ',eventIds)
    
  if(!eventIds || eventIds.length===0) {
    let emptyText = 'There are no planned upcoming events'
    return (
      <div className='empty-question'>
        <span>{emptyText}</span>
      </div>
    )
  }
  
  return (
    <div className=''>
      Upcoming Events with <span className='aibrf-intro-highlight'>AIBRF</span>
      <ul className='question'>
          {eventIds &&
            eventIds.map((id) =>(
            <li key={id}>
              {<Event id={id}/>}
            </li>
          ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({users,authedUser,events}) => {
  console.log('Users Events : ',users)
  console.log('Events events : ',events)
  //const petIds = petIds ? Object.keys(pets).filter((id) => petIds.includes(id)) : null
  return {
    eventIds :  events ? Object.keys(events) : null,
  }
}

export default connect(mapStateToProps)(Events)
