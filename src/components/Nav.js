import React,{Component} from 'react'
import {connect} from 'react-redux'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const NvLink = styled(Link)`
color: #808080;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
font-size: 20px;
&.active {
  color: #fff;
  font-weight: bold;
}
&:hover {
	transition: all 0.2s ease-in-out;
  font-weight: bold;
}
`;

class Nav extends Component {
  render () {
    const {username} = this.props
    return (
      <div className='top-nav'>
        <div className='top-nav-sections'>
          <div className='aibrf-logo-and-title'>
            <p className='aibrf-title'>AIBRF</p>
            <p className='aibrfconf-title'>Conference Dashboard</p>
          </div>
        </div>
        <div className='top-nav-empty-section'></div>
        <div className='top-nav-empty-section'></div>
        <div className='top-nav-section2'>
          <NvLink
          to='/home'
            activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}>
          Home
          </NvLink>
        </div>
        <div className='top-nav-section2'>
          <NvLink
          to='/about'
          activeStyle={{
            fontWeight: 'bold',
            color: 'white'
          }}>
          About 
          </NvLink>
        </div>
        <div className='top-nav-section2'>
          <NvLink
            to='/register'
            activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}>
          Register for Events
          </NvLink>
        </div>
        <div className='top-nav-section3'>
          {this.props.username==null ?
            <div className='sign-in-user-section'>
              <Link className='nav-sign-in-btn' to='/signin' exact activeClassName='active'>
                Sign in 
              </Link> 
            </div> : 
            <div className='logged-in-user'>
              <p>Logged in as <span className='username'>{username}</span> </p>
              <Link className='user-logout' to='/' exact activeClassName='active'>
                Logout
              </Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  return {
    username: authedUser
      ? users[authedUser].name
      : null,
  }
}

export default connect(mapStateToProps)(Nav)
