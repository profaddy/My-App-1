//-----------  Imports  -----------//

import { EXITED, COMPLETED,
         questionnairesAction,INITIAL } from './actions'

import { AUTH }                 from '@miro/core-ui/lib/models/auth/actions'

//-----------  Definitions  -----------//

export const initialState = {
  form      : null,
  error     : null,
  isDirty   : false,
  isLoading : false,
  hasEula   : false
}

//-----------  Reducers  -----------//

export default function questionnairesReducer(state = initialState, action){
  const { form, error,hasEula } = (action.payload || {})

  switch (action.type){

    case questionnairesAction.SUCCESS:
      return { ...state, form, isDirty: true,hasEula: false }

    case questionnairesAction.FAILURE:
      return { ...state, error }

      case INITIAL:
       return {...state,hasEula: action.payload}

    case COMPLETED:
      return { ...state, isDirty: false, hasEula: false }

    case AUTH.SIGN_OUT:
    case EXITED:
      return initialState

    default:
      return state
  }
}
