import { combineReducers } from 'redux'
import { Auth } from './auth'

export const reducers = combineReducers({
  authReducer: Auth.reducer,
})