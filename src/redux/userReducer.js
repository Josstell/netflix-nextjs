import { combineReducers } from "redux"
import * as types from "./types"

const initialState = {
  email: "",
  uid: "",
}

// USER REDUCER
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        email: payload.email,
        uid: payload.uid,
      }
    case types.LOGOUT:
      return {
        user: null,
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
