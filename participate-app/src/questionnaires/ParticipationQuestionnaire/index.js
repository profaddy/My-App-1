//-----------  Imports  -----------//

import { connect }                from 'react-redux'

import ParticipationQuestionnaire from './ParticipationQuestionnaire'
import { form }                   from './config'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch, props) => ({})

//-----------  Exports  -----------//

export const name = form

export default connect(mapState, mapDispatch)(ParticipationQuestionnaire)