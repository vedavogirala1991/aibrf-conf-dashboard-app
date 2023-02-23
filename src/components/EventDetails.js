import React,{Component} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import { formatEvent } from '../utils/helpers'
import User from './User'
// import Events from './Events'


class EventDetails extends Component {
  
  render () {
    return (
      <div className='event-details-page'>
        <div className='event-details-container'>
          <div className='event-details-flex'>
            <div className='event-schedule-details'>
              <h2 className='aibrf-event-intro-highlight'>{this.props.event.title}</h2>
              <h4 className='aibrf-event-intro-2'>From : 
                <span className='event-aibrf-intro'> {this.props.event.startDate} </span>
                to :  <span className='event-aibrf-intro'> {this.props.event.endDate}</span>
              </h4>
              <h4 className='event-short-desc'>
                {this.props.event.description}
              </h4>
              <div className='event-users-registered'>
                <h4 className='reg-user-heading'>Registered Users</h4>
                <div className='user-table-header'>
                  <div className='user-details-column'>Name</div>
                  <div className='user-details-column'>Staff Number</div>
                  <div className='user-details-column'>Mobile Number</div>
                  <div className='user-details-column'>Gender</div>
                  <div className='user-details-column'>Role</div>
                  <div className='user-details-column-exhead'></div>
                </div>
                <ul className='question'>
                  {this.props.regUserIds &&
                    this.props.regUserIds.map((id) =>(
                    <li key={id}>
                      {<User id={id}/>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({users,authedUser,events},props) => {
  console.log('Users Events : ',users)
  console.log('Events events : ',events)
  const {id} = useParams()
  console.log('Event id : ',id)
  const regUserIds = events[id].registeredUsers
  console.log('regUserIds id : ',regUserIds)
  return {
    event : events[id] ? formatEvent(events[id]) : null,
    regUserIds,
  }
}

export default connect(mapStateToProps)(EventDetails)
