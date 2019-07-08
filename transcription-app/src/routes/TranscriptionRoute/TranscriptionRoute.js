//-----------  Imports  -----------//

import get                      from 'lodash/get'
import isEmpty                  from 'lodash/isEmpty'
import Styled                   from './styles'

import React                    from 'react'
import PropTypes                from 'prop-types'

import Button                   from '@miro/core-ui/src/components/Button'
import DiffCompare              from 'components/DiffCompare'

import { roleShape,
         audioAssignmentShape } from 'models/assignments/helpers'

//-----------  Component  -----------//

class TranscriptionRoute extends React.Component {

  state = {
    text         : get(this.props, `transcription.${this.props.role.text}.transcription_text`, ''),
    isLoading    : this.props.isLoading,
    isSubmitting : false,
  }

  static getDerivedStateFromProps(props, state){
    return (state.isLoading && !props.isLoading) ? {
      text      : get(props, `transcription.${props.role.text}.transcription_text`, ''),
      isLoading : false,
    } : null
  }

  //-----------  Event Handlers  -----------//

  handleChange = (evt) => {
    this.setState({ text: evt.target.value })
  }

  submitTranscription = () => {
    this.setState({ isSubmitting: true })
    this.props.onSubmit(this.state.text, false)
  }

  submitReview = (text) => {
    this.setState({ isSubmitting: true })
    this.props.onSubmit(text, true)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { role, isLoading, transcription, hasTranscription } = this.props
    const { text, isSubmitting } = this.state

    const btnText = (isSubmitting ? 'Saving...' : hasTranscription ? 'Update' : 'Save')

    return (isLoading || !transcription) ? null : (
      <Styled.TranscriptionRoute>
        {role.isReviewer ? (
          <DiffCompare
            inputA={get(transcription, 'transcription_1.transcription_text', '')}
            inputB={get(transcription, 'transcription_2.transcription_text', '')}
            btnText={btnText}
            disabled={isSubmitting}
            onSubmit={this.submitReview}
          />
        ) : (
          <Styled.Transcription>
            <Styled.Stimuli>
              <strong>Stimuli: </strong>
              <span>n/a</span>
            </Styled.Stimuli>
            <Styled.TextArea
              key={transcription.id}
              value={text}
              onChange={this.handleChange}
              disabled={isSubmitting}
              autoFocus
            />
          </Styled.Transcription>
        )}

        {!role.isReviewer && (
          <Button
            active
            text={btnText}
            disabled={isSubmitting || isEmpty(text)}
            onClick={this.submitTranscription}
          />
        )}
      </Styled.TranscriptionRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

TranscriptionRoute.propTypes = {
  role             : PropTypes.shape(roleShape),
  isLoading        : PropTypes.bool,
  transcription    : PropTypes.shape(audioAssignmentShape),
  hasTranscription : PropTypes.bool,
  onSubmit         : PropTypes.func,
}

//-----------  Export  -----------//

export default TranscriptionRoute
