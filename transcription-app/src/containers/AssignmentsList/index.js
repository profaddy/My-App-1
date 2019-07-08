//-----------  Imports  -----------//

import { connect }             from 'react-redux'

import { errorSelector,
         isLoadingSelector,
         assignmentsSelector } from 'models/assignments/selectors'
import { assignmentsActions }  from 'models/assignments/actions'

import AssignmentsList         from './AssignmentsList'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  error       : errorSelector(state),
  isLoading   : isLoadingSelector(state),
  assignments : assignmentsSelector(state),
})

const mapDispatch = (dispatch) => ({
  requestAssignments: () => dispatch(assignmentsActions.request())
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AssignmentsList)
