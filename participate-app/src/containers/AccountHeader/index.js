//-----------  Imports  -----------//

import { connect }     from 'react-redux'

import { userActions } from 'models/user/actions'

import AccountHeader   from './AccountHeader'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onExit: () => dispatch(userActions.exit()),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AccountHeader)
