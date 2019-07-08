//-----------  Imports  -----------//

import { connect }                     from 'react-redux'

import { orderedModulesSelector }      from 'models/modules/selectors'
import { currentAssignmentIdSelector } from 'models/assignments/selectors'

import AssignmentRoute                 from './AssignmentRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  modules      : orderedModulesSelector(state),
  assignmentId : currentAssignmentIdSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AssignmentRoute)
