//-----------  Imports  -----------//

import { connect }           from 'react-redux'

import { errorSelector,
         activitySelector,
         isLoadingSelector,
         hasLoadedSelector } from 'models/activity/selectors'
import { activityActions }   from 'models/activity/actions'

import ActivityList          from './ActivityList'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  activity  : activitySelector(state),
  error     : errorSelector(state),
  isLoading : isLoadingSelector(state),
  hasLoaded : hasLoadedSelector(state)
})

const mapDispatch = (dispatch) => ({
  requestActiviy: () => dispatch(activityActions.request())
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ActivityList)
