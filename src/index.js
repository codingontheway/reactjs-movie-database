import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));

