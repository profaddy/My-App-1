//-----------  Imports  -----------//

import get                from 'lodash/get'
import identity           from 'lodash/identity'

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const modalSelector   = state => state.modals.modal
export const propsSelector   = state => state.modals.props
export const optionsSelector = state => state.modals.options

//-----------  Selectors  -----------//

export const afterCloseSelector = createSelector([optionsSelector], afterCloseFunc)

//-----------  Functions  -----------//

export function afterCloseFunc(options){
  return get(options, 'afterClose', identity)
}