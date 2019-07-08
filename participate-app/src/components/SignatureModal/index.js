//-----------  Imports  -----------//

import SignatureModal,{ form }          from './SignatureModal'
import { questionnairesAction }         from 'models/questionnaires/actions'
import { connect }                      from 'react-redux'
import {formValueSelector}                  from 'redux-form';



//-----------  Exports  -----------//
export const name = form
const eulasignatureFormSelector = formValueSelector('eulasignature');

const mapState = (state) => ({
  participantSignature: eulasignatureFormSelector(state, 'participant_signature'),
})

const mapDispatch = (dispatch) => ({
  onSubmit      : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState,mapDispatch)(SignatureModal)
