//-----------  Imports  -----------//

import { ACTIVITY } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function activityReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case ACTIVITY.REQUEST:
      return { ...state, isLoading: true }

    case ACTIVITY.SUCCESS:
      return { ...initialState, data }

    case ACTIVITY.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
