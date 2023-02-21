import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
//React Redux loading bar
import LoadingBar from 'react-redux-loading-bar'
//Action Creators
import {
  handleInitialData
} from '../actions/shared'
//UI components
import About from './About'
import Register from './Register'
import Login from './Login'
import EventDetails from './EventDetails'
import PageNotFound from './PageNotFound'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div>
            <Nav/>
            {this.props.loading === true
              ? null
              : <div className='app-contents'>
                  <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/signin' exact component={Login}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/event/:id' exact component={EventDetails}/>
                    <Route path='/404' component = {PageNotFound}/>
                    <Route component={Home} />
                  </Switch>
                </div>
            }
            <Footer />
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({users,authedUser,events}) => {
  const loading = Object.keys(users).length === 0 ? true : false
  return {
    loading,
    authedUser,
    events,
  }
}

export default connect(mapStateToProps)(App)
