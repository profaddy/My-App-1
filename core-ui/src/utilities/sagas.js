//-----------  Imports  -----------//

import identity from 'lodash/identity';

import { all, take, race, put, call, takeEvery } from 'redux-saga/effects';

import { appName } from 'utilities/constants';

//-----------  DEFINITIONS  -----------//

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const PROMISE = createActionConstant('REDUX-FORM');

//-----------  Helpers  -----------//

export function createActionConstant(base, type) {
  return !!type ? `${appName}/${base}_${type}` : `${appName}/${base}`;
}

//-----------  Action Helpers  -----------//

export function createActionConstants(base, additionalTypes = []) {
  const asyncActions = [REQUEST, SUCCESS, FAILURE];
  const typeArr = [...asyncActions, ...additionalTypes];
  const results = {};

  typeArr.forEach(type => (results[type] = createActionConstant(base, type)));
  return results;
}

export function createFormAction(requestAction, types) {
  const actionMethods = {};
  const action = payload => ({
    type: PROMISE,
    payload,
  });

  // Allow a type prefix to be passed in
  if (typeof requestAction === 'string') {
    requestAction = [REQUEST, SUCCESS, FAILURE].map(status => {
      let actionType = `${requestAction}_${status}`;
      let subAction = (payload, props) => ({
        type: actionType,
        props: props,
        payload: identity(payload),
      });

      // translate specific actionType to generic actionType
      actionMethods[status] = actionType;
      actionMethods[status.toLowerCase()] = subAction;

      return subAction;
    })[0];

    // if (types) payloadCreator = types;

    types = [actionMethods[SUCCESS], actionMethods[FAILURE]];
  }

  if (types.length !== 2)
    throw new Error('Must include two action types: [ SUCCESS, FAILURE ]');

  return Object.assign((data, dispatch, props) => {
    return new Promise((resolve, reject) => {
      dispatch(
        action({
          types,
          request: requestAction(data, props),
          defer: { resolve, reject },
        }),
      );
    });
  }, actionMethods);
}

//-----------  Saga Helpers  -----------//

export function* handleFormActionSaga({ payload }) {
  const { request, defer, types } = payload;
  const { resolve, reject } = defer;
  const [SUCCESS, FAILURE] = types;

  const [{ success, failure }] = yield all([
    race({
      success: take(SUCCESS),
      failure: take(FAILURE),
    }),
    put(request),
  ]);

  if (success)
    yield call(resolve, success && success.payload ? success.payload : success);
  else
    yield call(reject, failure && failure.payload ? failure.payload : failure);
}

export function* actionsWatcherSaga() {
  yield takeEvery(PROMISE, handleFormActionSaga);
}
