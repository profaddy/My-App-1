//-----------  Imports  -----------//

import { connect }                   from 'react-redux'

import { isLoadingSelector,
         currentAssignmentSelector } from 'models/assignments/selectors'

import AssignmentWrapper             from './AssignmentWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  assignment : currentAssignmentSelector(state),
  isLoading  : isLoadingSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AssignmentWrapper)
