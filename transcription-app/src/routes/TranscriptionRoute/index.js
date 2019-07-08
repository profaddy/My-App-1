//-----------  Imports  -----------//

import { connect }                            from 'react-redux'

import { isLoadingSelector,
         currentRoleSelector }                from 'models/assignments/selectors'
import { currentTranscriptionSelector,
         currentTranscriptionTextIdSelector } from 'models/transcriptions/selectors'
import { transcriptionsActions }              from 'models/transcriptions/actions'

import TranscriptionRoute                     from './TranscriptionRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  role             : currentRoleSelector(state),
  isLoading        : isLoadingSelector(state),
  transcription    : currentTranscriptionSelector(state),
  hasTranscription : !!currentTranscriptionTextIdSelector(state)
})

const mapDispatch = (dispatch) => ({
  onSubmit: (text, isReview) => dispatch(transcriptionsActions.submit(text, isReview))
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(TranscriptionRoute)
