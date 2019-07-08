//-----------  Imports  -----------//

import { connect }              from 'react-redux'

import { questionnairesAction } from 'models/questionnaires/actions'

import ConsentRoute             from './ConsentRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  onSubmit: questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ConsentRoute)
