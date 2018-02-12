import { mapTypes } from '../actions/types'

const {
  SET_ERROR,
  SAVE_LOCATION,
  DELETE_LOCATION,
} = mapTypes

const INITIAL_STATE = {
  locations: [],
  error: '',
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case SAVE_LOCATION:
      return {
        ...state,
        locations: [
          ...state.locations,
          payload,
        ]
      }
    case DELETE_LOCATION:
      const locations = state.locations.filter(el => el !== payload)
      return {
        ...state,
        locations,
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
