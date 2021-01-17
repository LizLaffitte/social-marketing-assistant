import React from 'react'
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { CookiesProvider } from 'react-cookie';


const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
document.addEventListener('turbolinks:load', () => {
  render(
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});