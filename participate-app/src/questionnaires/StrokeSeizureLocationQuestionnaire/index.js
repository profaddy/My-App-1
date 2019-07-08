//-----------  Imports  -----------//

import { connect }                        from 'react-redux'

import { brianConditionsSelector }        from 'models/questionnaires/selectors'

import StrokeSeizureLocationQuestionnaire from './StrokeSeizureLocationQuestionnaire'
import { form }                           from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  conditions: brianConditionsSelector(state)
})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(StrokeSeizureLocationQuestionnaire)
