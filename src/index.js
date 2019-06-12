import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './components/App'
import API from './components/API'
import './index.css'

const app = (
    <Provider store={store}>
        <App />
        <div className="api">
            <API />
        </div>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

/* yarn add react
    yarn add react-redux
    yarn add redux-logger */