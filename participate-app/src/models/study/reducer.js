//-----------  Imports  -----------//

import { STUDY } from './actions'

import { AUTH }  from '@miro/core-ui/lib/models/auth/actions'
import { USER }  from 'models/user/actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : null,
  error     : null,
  attempts  : 0,
  hasLoaded : false,
}

//-----------  Reducers  -----------//

export default function studyReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case STUDY.SUCCESS:
      return { ...state, data, hasLoaded: true }

    case STUDY.FAILURE:
    case USER.FAILURE:
    case AUTH.SIGN_OUT:
      return { ...initialState, error, hasLoaded: true }

    default:
      return state
  }
}
