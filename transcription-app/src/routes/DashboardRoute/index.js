//-----------  Imports  -----------//

import { connect }             from 'react-redux'

import { searchQuerySelector } from '@miro/core-ui/src/models/app/selectors'

import DashboardRoute          from './DashboardRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  completed: searchQuerySelector(state).completed
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DashboardRoute)
