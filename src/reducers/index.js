import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducer from './postsReducer'

export default combineReducers({
  routing: routerReducer,
  postsReducer
})