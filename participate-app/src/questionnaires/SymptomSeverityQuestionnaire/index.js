//-----------  Imports  -----------//

import { connect }                   from 'react-redux'

import { medicalConditionsSelector } from 'models/questionnaires/selectors'

import SymptomSeverityQuestionnaire  from './SymptomSeverityQuestionnaire'
import { form }                      from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  conditions: medicalConditionsSelector(state)
})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(SymptomSeverityQuestionnaire)
