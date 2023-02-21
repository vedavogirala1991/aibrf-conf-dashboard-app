import React, {Component} from 'react'
import PaymentDetails from './PaymentDetails'
import TravelDetails from './TravelDetails'

class Register extends Component {
  login = (e) => {
    e.preventDefault()
    this.props.history.push(`/signin`)
  }

  state = {
    userId : '',
    bank : 'select',
    name : '',
    gender : '',
    phone : '',
    spouse : 'N',
    travel : 'N',
    email : '',
    role : '',
  }

  handleNameInput = (e) => {
    const name = e.target.value
    this.setState(()=>({
      name,
    }))
  }

  handlePhoneInput = (e) => {
    const phone = e.target.value
    this.setState(()=>({
      phone,
    }))
  }

  handleTravelInput = (e) => {
    const travel = e.target.value
    this.setState(()=>({
      travel,
    }))
  }

  handleGenderInput = (e) => {
    const gender = e.target.value
    this.setState(()=>({
      gender,
    }))
  }

  handleRoleInput = (e) => {
    const role = e.target.value
    this.setState(()=>({
      role,
    }))
  }

  handleSpouseInput = (e) => {
    const spouse = e.target.value
    this.setState(()=>({
      spouse,
    }))
  }

  handleMailInput = (e) => {
    const email = e.target.value
    this.setState(()=>({
      email,
    }))
  }

  handleBankInput = (e) => {
    const bank = e.target.value
    this.setState(()=>({
      bank,
    }))
  }

  render() {
    return (
      <div className='pphomepage'>
        <div className='welcomepp'>
          <h1 className='register-text-heading'>Please fill the details below:</h1>
          <p className='pp-intro'>Event : 6<sup>th</sup> Triennial Conference - 24<sup>th</sup> to 27<sup>th</sup> February, 2023</p>
          <div className='register-input-container'>
            <label>
              Retired from :
              <select className='register-input-entry' value={this.state.bank} onChange={this.handleBankInput}>
               <option value="select">- Select -</option>
                <option value="andhrabank">Andhra Bank</option>
                <option value="vijayabank">Vijaya Bank</option>
              </select>
            </label>
            <p className='register-input'>Name :
              <input
                className='register-input-entry'
                type='text'
                value={this.state.name}
                onChange={this.handleNameInput}
                placeholder='Enter here'
              />
            </p>
            <div className='register-input' onChange={this.handleGenderInput}> Gender :
              <input className='register-input-entry' type="radio" value="Male" name="gender" /> Male
              <input className='register-input-entry' type="radio" value="Female" name="gender" /> Female
            </div>
            <p className='register-input'>Mobile Number :
              <input
                className='register-input-entry'
                type='text'
                value={this.state.phone}
                onChange={this.handlePhoneInput}
                placeholder='Enter here'
              />
            </p>
            <p className='register-input'>E-mail ID :
              <input
                className='register-input-entry'
                type='text'
                value={this.state.email}
                onChange={this.handleMailInput}
                placeholder='Enter here'
              />
            </p>
            <div className='register-input' onChange={this.handleRoleInput}> Participating as :
              <input className='register-input-entry' type="radio" value="delegate" /> Delegate
              <input className='register-input-entry' type="radio" value="observer" /> Observer
            </div>
            <div className='register-input' onChange={this.handleSpouseInput}> Is your spouse accompanying :
              <input className='register-input-entry' type="radio" value="Y" />Yes
              <input className='register-input-entry' checked={this.state.spouse === "N"} type="radio" value="N" />No
            </div>
            {this.state.spouse === "Y" && <PaymentDetails/>}
            <div className='register-input' onChange={this.handleTravelInput}> Are you travelling from other city :
              <input className='register-input-entry' type="radio" value="Y"/>Yes
              <input className='register-input-entry' checked={this.state.travel === "N"} type="radio" value="N"/>No
            </div>
            {this.state.travel === "Y" && <TravelDetails/>}
            <button type='submit' className='register-btn'>Register</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
