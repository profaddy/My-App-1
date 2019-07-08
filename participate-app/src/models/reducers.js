//-----------  Imports  -----------//

import { combineReducers }   from 'redux'

import miroReducers          from '@miro/core-ui/lib/models/app/reducers'

import participantReducer    from 'models/user/reducer'
import studyReducer          from 'models/study/reducer'
import modalsReducer         from 'models/modals/reducer'
import routingReducer        from 'models/routing/reducer'
import questionnairesReducer from 'models/questionnaires/reducer'
import userReducer           from '@miro/core-ui/lib/models/user/reducer';

//-----------  Exports  -----------//

export default function createReducers(){
  return combineReducers({
    ...miroReducers,
    participant    : participantReducer,
    user           : userReducer,
    study          : studyReducer,
    modals         : modalsReducer,
    routing        : routingReducer,
    questionnaires : questionnairesReducer,
  })
}
