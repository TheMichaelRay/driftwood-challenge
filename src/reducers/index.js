import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import MapReducer from './MapReducer'

const config = {
  key: 'root',
  storage,
}

const reducers = {
  map: MapReducer,
}

export default persistCombineReducers(config, reducers)
