import React, {Component} from 'react'
import Events from './Events'
import {connect} from 'react-redux'



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
          <div className='home-container'>
            <div className='home-intro-details'>
              <p className='home-aibrf-intro'>
              All India Bank Retirees' Association <span className='aibrf-home-intro-highlight'>(AIBRF)</span> is the largest Federation for retirees’ 
              associations of all cadres, with a membership of nearly 2.50 lakhs.</p>

              <p className='aibrf-intro-2'>
              AIBRF membership is widely open to retirees from the cadre of subordinate staff to 
              retired top executives of the Bank means from Retired Part Time Sweepers to retired 
              General Managers.<br/>
              As on 30.06.2022 eAndhra Bank retired employees are 13219, out of which 8605 
              are members of ABREA an affiliate of our AIBRF.</p>

              <p className='aibrf-intro-2'>
              Union Bank has retiree strength of 24000 out of which 10515 are members of AIBRF 
              affiliate unit and around 2700 members of AIBPRAC affiliate and other splinter group. 
              This indicates that there are approximately 10785 non-members of all cadres. In UNION 
              BANK OF INDIA the AIBRF affiliated unit is having overwhelming majority and accordingly 
              having a dominating role in joint talks with management. If you take into account the 
              above data it can be said that in the amalgamated entity of UNION-ANDHRA-CORPBANK the 
              AIBRF will play a significant role in shaping things in future of pensioners and Retirees.<br/>
              In present position, AIBRF is expected to continue its dominant role in joint talk in the 
              amalgamated entity.</p>

              <p className='aibrf-intro-2'>
              Achievements so far.....................<br/>
              ✔ Issue of Identity cards to the retirees under VRS also.<br/>
              ✔ Issue of Pension Payment Order to all Pensioners.<br/>
              ✔ Issue of PPO to the family pensioners also.<br/>
              ✔ Loan to all pensioners with clear norms.<br/>
              ✔ Loan facility to make payment of insurance premium.<br/>
              ✔ Increase in ex-gratia payment to the surviving spouses of Pre 1986 retirees.<br/>
              </p>

              <p className='aibrf-intro-2'>
              At all India level, the following issues are taken up:- </p>
                <ol className='aibrf-intro-2' type='i'>
                  <li>100 % neutralization of DA for all pensioners.</li>
                  <li>UPDATION of pension as applicable in Reserve Bank of India.</li>
                  <li>Free IBA Medical Insurance up to a basic Sum of Rs.2 Lakhs to all Retirees.</li>
                </ol>
              <div className='about-container'>
                <button className='services-btn' onClick={(e)=>this.goToAbout(e)}>About AIBRF</button>
              </div>
            </div>
            <div className='home-event-details'>
              <div className='aibrf-events-intro'>
                <Events/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home