//-----------  Imports  -----------//

import { SUBJECTS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function subjectsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case SUBJECTS.REQUEST:
      return { ...state, isLoading: true }

    case SUBJECTS.SUCCESS:
      return { ...initialState, data }

    case SUBJECTS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
