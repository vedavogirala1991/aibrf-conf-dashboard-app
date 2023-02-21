import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Navigate } from 'react-router-dom'
import {formatPet} from '../utils/helpers'


class EventDetails extends Component {
  render () {
    if(!this.props.authedUser)
    {
      return <Navigate 
        to={{
          pathname: '/',
          state: { from: this.props.location.pathname }
        }}
      />
    }
    if(!this.props.isValidPet) {
      return <Navigate  to='/404' />
    }

    const { name, avatar, breed, age, gender, ownerDetails, vaccinationDetails,votes} = this.props.pet

    return (
      <div className='question-page'>
        <form className='question-page-details'>
          <div className='ques-page-author'>
              <span>Name : {name}</span>
          </div>
          <div className='ques-page-avatar'>
            <img
              src={avatar}
              alt={`Avatar of ${name}`}
              className='avatar'
            />
          </div>
          <div className='ques-page-peek'>
            <span>Breed : {breed}</span>
            <span>Age : {age}</span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser,pets,users},props) => {
  const {id} = props.match.params
  const isValidPet = pets[id] ? true : false
  const pet = isValidPet ? pets[id] : null
  return {
    authedUser,
    isValidPet,
    pet : authedUser && isValidPet ? formatPet(pet,users,authedUser) : null,
    id,
  }
}

export default connect(mapStateToProps)(EventDetails)
