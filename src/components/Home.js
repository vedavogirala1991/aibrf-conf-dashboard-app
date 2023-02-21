import React, {Component} from 'react'



class Home extends Component {
  login = (e) => {
    e.preventDefault()
    this.props.history.push(`/signin`)
  }

  goToAbout = (e) => {
    e.preventDefault()
    this.props.history.push(`/about`)
  }

  goToRegister = (e) => {
    e.preventDefault()
    this.props.history.push(`/register`)
  }

  render() {
    return (
      <div className='pphomepage'>
        <div className='welcomepp'>
          <h1 className='aibrf-care-text'>Welcome to <span className='rainbow-pets'>AIBRF News Corner!!</span></h1>
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
                <button className='services-btn' onClick={(e)=>this.goToAbout(e)}>About AIBRF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
