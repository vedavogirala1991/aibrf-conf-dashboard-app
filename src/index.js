import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import middleware from './middleware'

//Creating the initial store
const store = createStore(reducers,middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
