//-----------  Imports  -----------//

import { combineReducers }        from 'redux'

import { miroReducers }           from '@miro/core-ui'

import userReducer                from 'models/user/reducer'
import activityReducer            from 'models/activity/reducer'
import rankingsReducer            from 'models/rankings/reducer'
import subjectsReducer            from 'models/subjects/reducer'
import assignmentsReducer         from 'models/assignments/reducer'

//-----------  Exports  -----------//

export default function createReducers(){
  return combineReducers({
    ...miroReducers,
    user        : userReducer,
    activity    : activityReducer,
    rankings    : rankingsReducer,
    subjects    : subjectsReducer,
    assignments : assignmentsReducer,
  })
}
