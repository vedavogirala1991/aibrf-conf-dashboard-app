import React,{Component} from 'react'
import {connect} from 'react-redux'

import {handleSetAuthUser} from '../actions/authedUser'

class Login extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleSetAuthUser(''))
  }

  state = {
    userId : '',
  }
  handleUserLogin = (e) => {
    e.preventDefault()
    //Dispatch the set user action
    this.props.dispatch(handleSetAuthUser(this.state.userId))
    if(this.props.history.location.state)
    {
      const from = this.props.history.location.state.from
      this.props.history.push(from)
    }
    else {
      this.props.history.push(`/home`)
    }

  }
  handleUserInput = (e) => {
    const userId = e.target.value
    this.setState(()=>({
      userId,
    }))
  }
  render () {
    const {userIds,users} = this.props
    const from = this.props.history.location.state
    const displayError = from!=null && this.state.userId===''

    return (
      <div className='user-login'>
        <form className='login-form' onSubmit={this.handleUserLogin}>
          <h2 className='signin-h2'>Find your ideal pet and pet needs from the comfort of your home by signing in</h2>
          <div className='login-contents'>
            <div className='login-input-container'>
              <p className='input-email'>Email or mobile number</p>
              <p className='input-email'>
                <input
                  type='text'
                  value={this.state.userId}
                  onChange={this.handleUserInput}
                  placeholder='Enter here'
                />
              </p>
              <button type='submit' className='signin-btn' disabled= {this.state.userId===''}>Next</button>
              <div className='input-only-styling'> </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    userIds : Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(Login)
