//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import { userSelector } from '@miro/core-ui/src/models/user/selectors'

import DashboardWrapper from './DashboardWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  user: userSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DashboardWrapper)
