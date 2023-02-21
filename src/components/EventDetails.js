import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'


class EventDetails extends Component {
  render () {
    if(!this.props.authedUser)
    {
      return <Redirect 
        to={{
          pathname: '/',
          state: { from: this.props.location.pathname }
        }}
      />
    }
    if(!this.props.isValidPet) {
      return <Redirect  to='/404' />
    }

    const { name, avatar, breed, age, gender, ownerDetails, vaccinationDetails,votes} = this.props.pet

    return (
      <div className='petcare-container'>
        <div className='petcare-text'>
          <p className='aibrf-intro'>
            On the ocassion of <span className='aibrf-intro-highlight'> 6<sup>th</sup> Triennial Conference</span>,
            wherein activities of the organisation <br/>and articles concerning to retirees,
            senior citizens, banking industry and on other relevant<br/> topics are proposed
            to be discussed is scheduled from 24<sup>th</sup> February to 27<sup>th</sup> February, 2023.<br/>
            Delegates and Observers who wish to participate are requested to provide<br/>
            your details through the below registration link</p>
          <div className='about-container'>
            <button className='register-home-btn' onClick={(e)=>this.goToRegister(e)}>Register here</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser,events,users},props) => {
  const {id} = props.match.params
  const isValidPet = events[id] ? true : false
  const pet = isValidPet ? events[id] : null
  return {
    authedUser,
    isValidPet,
    // pet : authedUser && isValidPet ? formatPet(pet,users,authedUser) : null,
    id,
  }
}

export default connect(mapStateToProps)(EventDetails)
