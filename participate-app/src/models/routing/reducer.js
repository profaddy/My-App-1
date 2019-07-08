//-----------  Imports  -----------//

import { ROUTING } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  stage : null,
  error : null
}

//-----------  Reducers  -----------//

export default function routingReducer(state = initialState, action){
  const { stage, error } = action

  switch (action.type){

    case ROUTING.SUCCESS:
      return { ...state, stage }

    case ROUTING.FAILURE:
      return { ...state, error }

    default:
      return state
  }
}
