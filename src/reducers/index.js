import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
  key: 'root',
  storage,
}

const reducers = {
}

export default persistCombineReducers(config, reducers)
