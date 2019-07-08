//-----------  Imports  -----------//

import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import miroReducers from '@miro/core-ui/lib/models/app/reducers';
import userReducer from '@miro/core-ui/lib/models/user/reducer';

import testsReducer from 'models/tests/reducer';
import studiesReducer from 'models/studies/reducer';
import batteriesReducer from 'models/batteries/reducer';
import editBatteryReducer from 'models/editBattery/reducer';
import participantReducer from 'models/participant/reducer';
import questionnairesReducer from 'models/questionnaires/reducer';
import studyTypesReducer from 'models/studyTypes/reducer';

//-----------  Exports  -----------//

export default function createReducers() {
  return combineReducers({
    ...miroReducers,
    user: userReducer,
    tests: testsReducer,
    toastr: toastrReducer,
    studies: studiesReducer,
    batteries: batteriesReducer,
    editBattery: editBatteryReducer,
    participant: participantReducer,
    questionnaires: questionnairesReducer,
    studyTypes: studyTypesReducer,
  });
}
