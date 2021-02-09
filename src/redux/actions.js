import * as types from "./types"

// SIGN IN
export const signIn = ({ uid, email }) => ({
  type: types.LOGIN,
  payload: { uid, email },
})

// SIGN OUT
export const signout = () => ({ type: types.LOGOUT })

// SIGN OUT
export const role = ({ role }) => ({
  type: types.ROLE,
  payload: { role },
})
