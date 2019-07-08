//-----------  Imports  -----------//

import { connect }                from 'react-redux'

import { errorSelector,
         subjectsSelector,
         isLoadingSelector }      from 'models/subjects/selectors'
import { hasAssignmentsSelector } from 'models/assignments/selectors'
import { assignmentsActions }     from 'models/assignments/actions'
import { subjectsActions }        from 'models/subjects/actions'

import SubjectsList               from './SubjectsList'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  subjects       : subjectsSelector(state),
  error          : errorSelector(state),
  isLoading      : isLoadingSelector(state),
  hasAssignments : hasAssignmentsSelector(state)
})

const mapDispatch = (dispatch) => ({
  assignSubject   : (id) => dispatch(assignmentsActions.assign(id)),
  requestSubjects : () => dispatch(subjectsActions.request())
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(SubjectsList)
