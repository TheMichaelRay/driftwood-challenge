import { mapTypes } from '../actions/types'

const {
  SET_CURRENT_LOCATION,
  SET_ERROR,
} = mapTypes

const INITIAL_STATE = {
  currentLocation: null,
  error: '',
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
