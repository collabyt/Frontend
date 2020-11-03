import "./assets/bootstrap/css/bootstrap.min.css";
import './assets/css/styles.css'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
