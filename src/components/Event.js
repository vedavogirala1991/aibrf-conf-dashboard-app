import React from 'react'
import {connect} from 'react-redux'
import { formatEvent } from '../utils/helpers'
import {Link} from 'react-router-dom'

class Event extends React.Component {

  event = this.props.event

  viewPoll = (e,id) => {
    e.preventDefault()
    // this.props.history.push(`/event/${id}`)
  }

  render() {
    return (
      <div className='event-low-details'>
        <p className='aibrf-event-intro-highlight'>{this.event.title}</p>
        <p className='aibrf-event-intro-2'>From : 
          <span className='event-aibrf-intro'> {this.event.startDate} </span>
          to :  <span className='event-aibrf-intro'> {this.event.endDate}</span>
        </p>
        <p className='event-short-desc'>
        {this.event.description.length>150 ? this.event.description.substring(0,150) : this.event.description}
        <Link to={`/event/${this.event.id}`}>...view more</Link>
        </p>
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
    event :  formatEvent(events[id]),
  }
}

export default connect(mapStateToProps)(Event)
