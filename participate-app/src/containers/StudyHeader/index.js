//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import { studySelector } from 'models/study/selectors'
import { dataSelector }  from 'models/user/selectors'

import StudyHeader       from './StudyHeader'


//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  study: studySelector(state),
  data: dataSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(StudyHeader)
