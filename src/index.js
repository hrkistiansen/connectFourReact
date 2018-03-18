import React from 'react'
import { render } from 'react-dom'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import App from './App'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
