import { combineReducers } from 'redux'
import filterReducer from './filter/reducer'
import todoReducer from './todos/reducer'

export default combineReducers({
  filter: filterReducer,
  todos: todoReducer,
})