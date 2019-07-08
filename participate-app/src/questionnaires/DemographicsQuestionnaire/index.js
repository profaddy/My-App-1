//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import { over18Selector }        from 'models/user/selectors'

import DemographicsQuestionnaire from './DemographicsQuestionnaire'
import { form }                  from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  over18: over18Selector(state)
})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(DemographicsQuestionnaire)
