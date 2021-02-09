import { combineReducers } from "redux"
import * as types from "./types"

const initialState = {
  email: "",
  uid: "",
  role: null,
}

// USER REDUCER
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        email: payload.email,
        uid: payload.uid,
      }
    case types.LOGOUT:
      return {
        email: "",
        uid: "",
        role: null,
      }
    case types.ROLE:
      return {
        ...state,
        role: payload.role,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
}

export default combineReducers(reducers)
