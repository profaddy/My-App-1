//-----------  Imports  -----------//

import { connect }         from 'react-redux'

import { isDirtySelector } from 'models/questionnaires/selectors'

import AppWrapper          from './AppWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  dirty: isDirtySelector(state)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
