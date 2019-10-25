import { actionTypes } from './actions'
import exampleInitialState from './initialState'

export const mainReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE:
      return Object.assign({}, state, {
        example: action.value
      })
    case actionTypes.MENUS:
      return Object.assign({}, state, {
        menus: action.value
      })
    default: return state
  }
}
