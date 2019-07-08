//-----------  Imports  -----------//

import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const stageSelector = state => state.routing.stage
export const errorSelector = state => state.routing.error
