import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import exampleInitialState from './initialState'
import { mainReducer } from './reducers'

// REDUCERS
const rootReducer = combineReducers({
  mainReducer
})

export const initializeStore = (initialState = exampleInitialState) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
