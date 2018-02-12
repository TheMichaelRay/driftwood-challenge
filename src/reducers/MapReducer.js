import { mapTypes } from '../actions/types'

const {
  SET_ERROR,
} = mapTypes

const INITIAL_STATE = {
  error: '',
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
