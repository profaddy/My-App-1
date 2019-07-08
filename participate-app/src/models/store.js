//-----------  Imports  -----------//

import noop                 from 'lodash/noop'

import { compose,
         createStore,
         applyMiddleware }  from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter,
         routerMiddleware } from 'connected-react-router'
import persistState         from 'redux-localstorage'

import sidebar              from 'data/links'

import history              from './history'
import rootSaga             from './sagas'
import createReducers       from './reducers'

//-----------  Definitions  -----------//

const sagaMiddleware = createSagaMiddleware()

//-----------  Devtools  -----------//

// Connect to Redux Devtools (https://github.com/zalmoxisus/redux-devtools-extension)
const composeEnhancers = (...args) => {
  return (typeof window === 'object'
    // && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...args)
      : compose(...args)
}

//-----------  Redux Store  -----------//

export function configureStore(initialState = {}){
  const rootReducer = connectRouter(history)(createReducers())
  let enhancers

  if ('development' === process.env.NODE_ENV){
    enhancers = composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      ),
    )
  } else {
    enhancers = composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      ),
    )
  }

  const store = createStore(rootReducer, initialState, enhancers)

  //-----------  Hot Module Replacement  -----------//

  // Rerender application state when changes detected in development
  if ('development' === process.env.NODE_ENV && module.hot){
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default()
      return store.replaceReducer(nextRootReducer)
    })
  }

  //-----------  Initialization  -----------//

  store.runSaga = sagaMiddleware.run(rootSaga)
  return store
}

//-----------  Exports  -----------//

export default configureStore({ sidebar })