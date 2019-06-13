import { combineReducers } from 'redux'
import apple from './apple'
import other from './other'
import CounterReducer from './CounterReducer'

export default combineReducers({
  apple,
  other,
  counter: CounterReducer
})