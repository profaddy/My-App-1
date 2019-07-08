//-----------  Imports  -----------//

import ConsentSuccessModal,{ form }          from './ConsentSuccessModal'
import { questionnairesAction }              from 'models/questionnaires/actions'
import { connect }                           from 'react-redux'
import { studySelector }                     from 'models/study/selectors'
import { dataSelector }                     from 'models/user/selectors'
import {getFormValues}          from 'redux-form';

//-----------  Exports  -----------//
export const name = form

const mapState = (state) => ({
  study: studySelector(state),
  data: dataSelector(state),
  formStates: getFormValues('signature')(state) 
})

const mapDispatch = (dispatch) => ({
  onSubmit      : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState,mapDispatch)(ConsentSuccessModal)
