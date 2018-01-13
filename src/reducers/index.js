import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducer from './postsReducer'
import searchImageReducer from './searchImageReducer'

export default combineReducers({
  routing: routerReducer,
  postsReducer,
  searchImageReducer
})