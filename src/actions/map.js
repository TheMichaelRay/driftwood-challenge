import { mapTypes } from './types'
import { Platform, Alert } from 'react-native'
import { Location, Permissions } from 'expo'

const {
  SET_CURRENT_LOCATION,
  SET_ERROR,
} = mapTypes

// Forms
export const getCurrentLocation = () => async dispatch => {
  // adapted from https://docs.expo.io/versions/latest/sdk/location.html
  dispatch({
    type: SET_ERROR,
    payload: '',
  })
  const { status } = await Permissions.askAsync(Permissions.LOCATION)
  if (status !== 'granted') {
    const error = 'Permission for location was not granted'
    Alert.alert(error)
    dispatch({
      type: SET_ERROR,
      payload: error,
    })
  } else {
    const { coords } = await Location.getCurrentPositionAsync({})
    dispatch({
      type: SET_CURRENT_LOCATION,
      payload: coords,
    })
  }
}
