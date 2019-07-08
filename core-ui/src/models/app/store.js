//-----------  Imports  -----------//

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import sagas from './sagas';
import reducers from './reducers';
import history from './history';

import userReducer from 'models/user/reducer';

//-----------  Definitions  -----------//

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all(sagas);
}

//-----------  Devtools  -----------//

// Connect to Redux Devtools (https://github.com/zalmoxisus/redux-devtools-extension)
const composeEnhancers = (...args) => {
  return typeof window === 'object' &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...args)
    : compose(...args);
};

//-----------  Redux Store  -----------//

function configureStore(initialState = {}) {
  const rootReducer = connectRouter(history)(
    combineReducers({ user: userReducer, ...reducers }),
  );
  const middlewares = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  );
  const enhancers = composeEnhancers(middlewares);

  const store = createStore(rootReducer, initialState, enhancers);

  //-----------  Hot Module Replacement  -----------//

  // Rerender application state when changes detected in development
  if ('development' === process.env.NODE_ENV && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default();
      return store.replaceReducer(nextRootReducer);
    });
  }

  //-----------  Initialization  -----------//

  store.runSaga = sagaMiddleware.run(rootSaga);
  return store;
}

//-----------  Exports  -----------//

export default configureStore();
