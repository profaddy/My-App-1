//-----------  Imports  -----------//

import { reset }                from 'redux-form'
import { connect }              from 'react-redux'

import { userActions }          from 'models/user/actions'
import { questionnairesAction } from 'models/questionnaires/actions'

import CapacityRoute            from './CapacityRoute'

import history                  from 'models/history'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onExit    : history.goBack,
  onSubmit  : questionnairesAction,
  onAttempt : (passed) => dispatch(userActions.attempt(passed)),
  resetForm : (form) => dispatch(reset(form))
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(CapacityRoute)
