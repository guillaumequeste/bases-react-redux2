import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

import App from './components/App'
import API from './components/API'
import APIdeux from './components/APIdeux'
import APIDico from './components/APIDico'
import CounterComponent from './components/CounterComponent'

import './index.css'

const app = (
    <Provider store={store}>
        <App />
        <hr />
        <div className="api">
            <API />
        </div>
        <hr />
        <div className="apideux">
            <APIdeux />
        </div>
        <hr />
        <CounterComponent />
        <hr />
        <div className="apidico">
            <APIDico />
        </div>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

/* yarn add react
    yarn add react-redux
    yarn add redux-logger
    
    yarn add axios --save
    link bootstrap dans public/index.html */