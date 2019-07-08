//-----------  Imports  -----------//

import { RANKINGS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
  hasLoaded : false,
}

//-----------  Reducers  -----------//

export default function rankingsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case RANKINGS.REQUEST:
      return { ...state, isLoading: true }

    case RANKINGS.SUCCESS:
      return { ...initialState, data }

    case RANKINGS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
