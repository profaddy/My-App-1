//-----------  Imports  -----------//

import { ASSIGNMENTS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : true,
}

//-----------  Reducers  -----------//

export default function assignmentsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case ASSIGNMENTS.ASSIGN:
    case ASSIGNMENTS.REQUEST:
      return { ...state, isLoading: true }

    case ASSIGNMENTS.SUCCESS:
      return { ...initialState, data, isLoading: false }

    case ASSIGNMENTS.FAILURE:
      return { ...state, error, isLoading: false }

    default:
      return state
  }
}
