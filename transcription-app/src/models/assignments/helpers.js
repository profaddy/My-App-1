//-----------  Imports  -----------//

import PropTypes              from 'prop-types'

import { userShape }          from 'models/user/helpers'
import { moduleShape }        from 'models/modules/helpers'
import { subjectShape }       from 'models/subjects/helpers'
import { transcriptionShape } from 'models/transcriptions/helpers'

//-----------  Type Definitions  -----------//

export const assignmentShape = {
  id                : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  subject           : PropTypes.shape(subjectShape),
  reviewer          : PropTypes.shape(userShape),
  transcriber_1     : PropTypes.shape(userShape),
  transcriber_2     : PropTypes.shape(userShape),
  audio_assignments : PropTypes.arrayOf(PropTypes.shape(audioAssignmentShape)),
  complete          : PropTypes.bool.isRequired,
  _createdAt        : PropTypes.any.isRequired,
  _isActionable     : PropTypes.bool,
  _estimatedTime    : PropTypes.number.isRequired,
  _audioFilesCount  : PropTypes.number.isRequired,
}

export const audioAssignmentShape = {
  audio_source            : PropTypes.shape(audioSourceShape),
  reviewer_assigned       : PropTypes.string,
  reviewer_completed      : PropTypes.string,
  transcriber_1_assigned  : PropTypes.string,
  transcriber_1_completed : PropTypes.string,
  transcriber_2_assigned  : PropTypes.string,
  transcriber_2_completed : PropTypes.string,
  transcription_1         : PropTypes.shape(transcriptionShape),
  transcription_2         : PropTypes.shape(transcriptionShape),
  final_transcription     : PropTypes.shape(transcriptionShape),
}

export const audioSourceShape = {
  id         : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  activity   : PropTypes.shape(moduleShape).isRequired,
  audio_file : PropTypes.string.isRequired,
  modified   : PropTypes.string,
  created    : PropTypes.string.isRequired,
}

export const roleShape = {
  text       : PropTypes.string.isRequired,
  assigned   : PropTypes.string.isRequired,
  completed  : PropTypes.string.isRequired,
  isReviewer : PropTypes.bool.isRequired,
}