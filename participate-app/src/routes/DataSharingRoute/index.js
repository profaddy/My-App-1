//-----------  Imports  -----------//

import { connect }              from 'react-redux'
import { formValueSelector }    from 'redux-form'

import { questionnairesAction } from 'models/questionnaires/actions'
import { canConsentSelector }   from 'models/user/selectors'
import { userActions }          from 'models/user/actions'

import { form, share }          from 'forms/DataSharingForm/config'
import DataSharingRoute         from './DataSharingRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  willShare  : ('yes' === formValueSelector(form)(state, share)),
  canConsent : canConsentSelector(state)
})

const mapDispatch = (dispatch) => ({
  onExit    : () => dispatch(userActions.exit()),
  onSubmit : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DataSharingRoute)
