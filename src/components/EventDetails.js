import React,{Component} from 'react'
// import {connect} from 'react-redux'
// import {Redirect,Link,useParams} from 'react-router-dom'
// import { formatEvent } from '../utils/helpers'
// import Events from './Events'


class EventDetails extends Component {
  
  render () {
    return (
      <div className='event-details-page'>
        <div className='event-details-container'>
          <div className='event-details-flex'>
            <div className='event-schedule-details'>Event Details</div>
            <div className='event-users-registered'>Event Users</div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetails
