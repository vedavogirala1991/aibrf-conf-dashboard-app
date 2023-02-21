import React, {Component} from 'react'

class PaymentDetails extends Component {
  login = (e) => {
    e.preventDefault()
    this.props.history.push(`/signin`)
  }

  state = {
    paymentRef : '',
    amountPaid : '',
    paymentDate : '',
  }

  handlepaymentRefInput = (e) => {
    const paymentRef = e.target.value
    this.setState(()=>({
      paymentRef,
    }))
  }

  handleAmountInput = (e) => {
    const amountPaid = e.target.value
    this.setState(()=>({
      amountPaid,
    }))
  }

  handleDateInput = (e) => {
    const paymentDate = e.target.value
    this.setState(()=>({
      paymentDate,
    }))
  }

  render() {
    return (
      <div className='register-input-container'>
        <p className='register-input'>Payment Reference Number :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.paymentRef}
            onChange={this.handlepaymentRefInput}
            placeholder='Enter here'
          />
        </p>
        <p className='register-input'>Payment Date :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.paymentDate}
            onChange={this.handleDateInput}
            placeholder='Enter here'
          />
        </p>
        <p className='register-input'>Amount paid :
          <input
            className='register-input-entry'
            type='text'
            value={this.state.amountPaid}
            onChange={this.handleAmountInput}
            placeholder='Enter here'
          />
        </p>
      </div>
    )
  }
}

export default PaymentDetails
