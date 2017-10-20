import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { storeFactory } from 'color-manager-redux'
import logger from 'redux-logger'
import debounce from 'debounce'
import './index.css'
import App from './App'

const initState = localStorage['redux-state'] ?
  JSON.parse(localStorage['redux-state']) : {}

const saveState = debounce(
  () => localStorage['redux-state'] = JSON.stringify(store.getState()),
  1000
)

const store = storeFactory(initState, [logger])
store.subscribe(saveState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
