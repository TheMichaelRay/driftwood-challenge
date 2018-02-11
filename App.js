import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'

import { Spinner } from './src/components/common'
import Main from './src/Main'

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    const persistor = persistStore(store)
    const onBeforeLift = () => {
    }

    return (
      <Provider store={store}>
        <PersistGate
          loading={<Spinner/>}
          onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <Main/>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
