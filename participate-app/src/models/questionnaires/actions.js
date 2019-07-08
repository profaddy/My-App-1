//-----------  Imports  -----------//

import { createFormAction } from '@miro/core-ui/lib/utilities/sagas'

//-----------  Definitions  -----------//

export const QUESTIONNAIRES = 'QUESTIONNAIRES'
export const COMPLETED      = 'COMPLETED'
export const EXITED         = 'EXITED'
export const INITIAL        = 'INITIAL'

//-----------  Exports  -----------//

export const questionnairesAction = createFormAction(QUESTIONNAIRES)

export const completedAction = () => ({ type: COMPLETED })
export const exitiedAction   = () => ({ type: EXITED })
export const initialaction   = (data) => ({type: INITIAL,payload:data})