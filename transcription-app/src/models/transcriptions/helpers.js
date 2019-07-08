//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const transcriptionShape = {
  id                 : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  transcriber        : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  audio_source       : PropTypes.string.isRequired,
  transcription_text : PropTypes.string,
  modified           : PropTypes.string,
  created            : PropTypes.string.isRequired,
  is_final           : PropTypes.bool.isRequired,
}
