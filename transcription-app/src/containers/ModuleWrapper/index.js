//-----------  Imports  -----------//

import { connect }                            from 'react-redux'

import { nextModuleUrlSelector,
         currentModuleSelector }              from 'models/modules/selectors'
import { currentTranscriptionIdSelector,
         currentTranscriptionTextIdSelector } from 'models/transcriptions/selectors'

import ModuleWrapper                          from './ModuleWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  module           : currentModuleSelector(state),
  nextModuleUrl    : nextModuleUrlSelector(state),
  transciptionId   : currentTranscriptionIdSelector(state),
  hasTranscription : !!currentTranscriptionTextIdSelector(state)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ModuleWrapper)
