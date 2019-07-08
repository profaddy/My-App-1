//-----------  Imports  -----------//

import { connect }                 from 'react-redux'

import MedicalHistoryQuestionnaire from './MedicalHistoryQuestionnaire'
import { form }                    from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(MedicalHistoryQuestionnaire)
