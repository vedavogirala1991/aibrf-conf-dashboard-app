import React,{Component} from 'react'
import {connect} from 'react-redux'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nv = styled.nav`
background: #161616;
height: 150px;
display: flex;
justify-content: space-between;
/*padding: 0.2rem calc((100vw - 1000px) / 2);*/
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

const NvLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
width: 80px;
cursor: pointer;
margin-top: 25px;
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


const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: 90px;
margin-right: -24px;
white-space: nowrap;
// @media screen and (max-width: 768px) {
// 	display: none;
// }
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
        <div className='top-nav-section2'>
          Home
        </div>
        <div className='top-nav-section2'>
          About 
        </div>
        <div className='top-nav-section2'>
          Register for Events
        </div>
        <div className='top-nav-section3'>
          {this.props.username==null ?
            <Link className='user-logout' to='/' exact activeClassName='active'>
            Sign in 
            </Link> : 
            <div>
              <span className='username'>{username}</span>
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
  console.log('Nav :: users',users)
  console.log('Nav :: authedUser',authedUser)
  return {
    username: authedUser
      ? users[authedUser].name
      : null,
  }
}

export default connect(mapStateToProps)(Nav)
