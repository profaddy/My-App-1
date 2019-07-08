//-----------  Imports  -----------//

import { MODALS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  modal   : null,
  props   : {},
  options : {},
}

//-----------  Reducers  -----------//

export default function modalsReducer(state = initialState, action){
  const { modal, props, options } = action

  switch (action.type){

    case MODALS.SHOW:
      return { modal, props: props || {}, options: options || {} }

    case MODALS.HIDE:
      return initialState

    default:
      return state
  }
}
