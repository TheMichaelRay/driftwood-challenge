import { mapTypes } from './types'

const {
  SET_ERROR,
  SAVE_LOCATION,
  DELETE_LOCATION,
} = mapTypes

export const saveLocation = payload => {
  return {
    type: SAVE_LOCATION,
    payload,
  }
}

export const deleteLocation = payload => {
  return {
    type: DELETE_LOCATION,
    payload,
  }
}
