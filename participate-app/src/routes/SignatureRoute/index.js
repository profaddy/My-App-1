//-----------  Imports  -----------//

import { connect }              from 'react-redux'
import {getFormValues}          from 'redux-form';


import { userActions }          from 'models/user/actions'
import { canConsentSelector }   from 'models/user/selectors'
import { questionnairesAction } from 'models/questionnaires/actions'

import SignatureRoute           from './SignatureRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  canConsent: canConsentSelector(state),
  formStates: getFormValues('signature')(state) 
})

const mapDispatch = (dispatch) => ({
  onExit   : () => dispatch(userActions.exit()),
  onSubmit : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(SignatureRoute)
