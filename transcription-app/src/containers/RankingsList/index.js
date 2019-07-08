//-----------  Imports  -----------//

import { connect }           from 'react-redux'

import { errorSelector,
         rankingsSelector,
         isLoadingSelector,
         hasLoadedSelector } from 'models/rankings/selectors'
import { rankingsActions }   from 'models/rankings/actions'

import RankingsList          from './RankingsList'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  rankings  : rankingsSelector(state),
  error     : errorSelector(state),
  isLoading : isLoadingSelector(state),
  hasLoaded : hasLoadedSelector(state)
})

const mapDispatch = (dispatch) => ({
  requestRankings: () => dispatch(rankingsActions.request())
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(RankingsList)
