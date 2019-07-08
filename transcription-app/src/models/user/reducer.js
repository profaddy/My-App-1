//-----------  Imports  -----------//

import { USER } from './actions'
import { AUTH } from '@miro/core-ui/src/models/auth/actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : null,
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function userReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case AUTH.SUCCESS:
      return { ...state, isLoading: true }

    case USER.SUCCESS:
      return { ...initialState, data }

    case USER.FAILURE:
      return { ...initialState, error: error }

    case AUTH.FAILURE:
      return initialState

    default:
      return state
  }
}
