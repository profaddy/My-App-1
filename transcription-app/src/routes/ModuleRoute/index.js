//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import { currentModuleSelector } from 'models/modules/selectors'

import ModuleRoute               from './ModuleRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  module: currentModuleSelector(state)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ModuleRoute)
