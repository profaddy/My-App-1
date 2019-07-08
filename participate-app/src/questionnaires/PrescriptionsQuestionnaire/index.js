//-----------  Imports  -----------//

import { connect }                        from 'react-redux'

import { medicalConditionsSelector,
         conditionPrescriptionsSelector } from 'models/questionnaires/selectors'

import PrescriptionsQuestionnaire         from './PrescriptionsQuestionnaire'
import { form }                           from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  conditions    : medicalConditionsSelector(state),
  prescriptions : conditionPrescriptionsSelector(state),
})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(PrescriptionsQuestionnaire)
