import React, {Component} from 'react'

class TravelDetails extends Component {
  login = (e) => {
    e.preventDefault()
    this.props.history.push(`/signin`)
  }

  state = {
    arrivalMode : 'select',
    arrivalTime : '',
    arrivalModeNum : '',
    departureMode : 'select',
    departureTime : '',
    departureModeNum : '',
    hotelName : '',
    hotelRoomNum : '',
  }

  handleArrivalModeInput = (e) => {
    const arrivalMode = e.target.value
    this.setState(()=>({
      arrivalMode,
    }))
  }

  handleArrivalTimeInput = (e) => {
    const arrivalTime = e.target.value
    this.setState(()=>({
      arrivalTime,
    }))
  }

  handleArrivalModeNumInput = (e) => {
    const arrivalModeNum = e.target.value
    this.setState(()=>({
      arrivalModeNum,
    }))
  }

  handleDepartureModeInput = (e) => {
    const departureMode = e.target.value
    this.setState(()=>({
      departureMode,
    }))
  }

  handleDepartureTimeInput = (e) => {
    const departureTime = e.target.value
    this.setState(()=>({
      departureTime,
    }))
  }

  handleDepartureModeNumInput = (e) => {
    const departureModeNum = e.target.value
    this.setState(()=>({
      departureModeNum,
    }))
  }

  handleHotelNameInput = (e) => {
    const email = e.target.value
    this.setState(()=>({
      email,
    }))
  }

  handleRoomNumInput = (e) => {
    const bank = e.target.value
    this.setState(()=>({
      bank,
    }))
  }

  render() {
    return (
      <div className='register-input-container'>
        <p>
        <label>
          Arrival Travel Mode :
          <select className='register-input-entry' value={this.state.arrivalMode} onChange={this.handleArrivalModeInput}>
            <option value="select">- Select -</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </label>
        </p>
        {this.state.arrivalMode !== 'select' &&
        <div>
        <p className='register-input'>Arrival {this.state.arrivalMode === 'train' ? "Train" : "Bus"} Number :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.arrivalModeNum}
            onChange={this.handleArrivalModeNumInput}
            placeholder='Enter here'
          />
        </p>
        <p className='register-input'>Arrival Date & Time :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.arrivalTime}
            onChange={this.handleArrivalTimeInput}
            placeholder='Enter here'
          />
        </p>
        </div>}
        <label>
          Departure Travel Mode :
          <select className='register-input-entry' value={this.state.departureMode} onChange={this.handleDepartureModeInput}>
            <option value="select">- Select -</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </label>
        {this.state.departureMode !== 'select' &&
        <div>
        <p className='register-input'>Departure {this.state.departureMode === 'train' ? "Train" : "Bus"} Number :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.departureModeNum}
            onChange={this.handleDepartureModeNumInput}
            placeholder='Enter here'
          />
        </p>
        <p className='register-input'>Departure Date & Time :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.departureTime}
            onChange={this.handleDepartureTimeInput}
            placeholder='Enter here'
          />
        </p>
        </div>}
        <p className='register-input'>Hotel Name :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.phone}
            onChange={this.handlePhoneInput}
            placeholder='Enter here'
          />
        </p>
        <p className='register-input'>Hotel Room Number :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.hotelRoomNum}
            onChange={this.handleRoomNumInput}
            placeholder='Enter here'
          />
        </p>
      </div>
    )
  }
}

export default TravelDetails
