import React from 'react'
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'

const store = createStore(userReducer, compose(applyMiddleware(thunk)))
document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});