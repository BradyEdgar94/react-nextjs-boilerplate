// Types
export const actionTypes = ({
  EXAMPLE: 'EXAMPLE',
  MENUS: 'MENUS',
})

// Methods
export const example = (value) => {
  return (dispatch, getState) => {
    return dispatch({ type: actionTypes.EXAMPLE, value: value })
  }
}

export const updateMenus = value => {
  return (dispatch, getState) => {
    return dispatch({ type: actionTypes.MENUS, value })
  }
}
