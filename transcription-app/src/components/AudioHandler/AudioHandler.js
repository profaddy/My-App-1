//-----------  Imports  -----------//

import get                      from 'lodash/get'
import findIndex                from 'lodash/findIndex'

import Styled                   from './styles'

import React                    from 'react'
import PropTypes                from 'prop-types'
import { Link }                 from 'react-router-dom'
import Artyom                   from 'artyom.js'

import AudioBlock               from 'components/AudioBlock'

import { audioAssignmentShape } from 'models/assignments/helpers'

//-----------  Helper  -----------//

const hasSpeechAPI = () => {
  if (typeof window === 'undefined') return false

  const anyAPI = window.webkitSpeechRecognition ||
                 window.mozSpeechRecognition ||
                 window.msSpeechRecognition ||
                 window.oSpeechRecognition ||
                 window.SpeechRecognition

  return (typeof anyAPI !== 'undefined')
}

let stashId = null

//-----------  Component  -----------//

class AudioHandler extends React.Component {

  constructor(props){
    super(props)

    stashId = props.currentId

    if (hasSpeechAPI()){
      this.artyom = new Artyom()
      this.artyom.addCommands([{
        indexes : ['play'],
        action  : () => {
          if (!this.state.playing)
            this.startPlay()
        }
      },{
        indexes : ['pause'],
        action  : () => {
          if (this.state.playing)
            this.stopPlay()
        }
      }])
      this.artyom.initialize({
        lang       : 'en-US',
        continuous : true,
        soundex    : true,
        debug      : true,
        listen     : true,
        mode       : 'quick',
      }).then(() => {
        console.log('Artyom has been succesfully initialized')
      }).catch((err) => {
        console.error('Artyom ran into an error: ', err)
      })
    }
  }

  state = {
    loop    : false,
    muted   : false,
    playing : false,
    volume  : 0.8,
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.onKeyDown)
    this.artyom.fatality()
  }

  static getDerivedStateFromProps(props, state){
    if (props.currentId != stashId){
      stashId = props.currentId
      return { ...state, playing: false }
    } else {
      return null
    }
  }

  //-----------  Helpers  -----------//

  renderNextModuleLink = () => {
    const { nextUrl, canAdvance } = this.props

    if (!nextUrl) return (
      <Link to='/'><span>Back to Dashboard <strong>→</strong></span></Link>
    )
    if (canAdvance) return (
      <Link to={nextUrl}><span>Next Module <strong>→</strong></span></Link>
    )
    return (
      <a><span>Next Module <strong>→</strong></span></a>
    )
  }

  //-----------  Event Handlers  -----------//

  onKeyDown = ({ code, ctrlKey, ...evt }) => {
    switch (code){
      case 'Space' : return ctrlKey && this.togglePlay()
      case 'KeyM'  : return ctrlKey && this.toggleMuted()
    }
  }

  stopPlay = () => {
    this.setState({ playing: false })
  }

  startPlay = () => {
    this.setState({ playing: true })
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleVolume = (evt) => {
    this.setState({ volume: parseFloat(evt.target.value) })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { currentId, audioFiles, canAdvance } = this.props
    const { playing, ...state } = this.state

    const currentIndex = findIndex(audioFiles, { id: currentId })

    return (!audioFiles || !audioFiles.length) ? null : (
      <Styled.AudioHandler count={audioFiles.length}>
        <Styled.RouteSlider currentIndex={currentIndex}>
          {audioFiles.map(({ id, audio_source }, index) => {
            const prevUrl = get(audioFiles, `${(index - 1)}.id`)
            const nextUrl = get(audioFiles, `${(index + 1)}.id`)
            const active  = (id === currentId)

            return (
              <AudioBlock
                key={id}
                id={id}
                active={active}
                prevUrl={prevUrl}
                nextUrl={nextUrl}
                canAdvance={canAdvance}
                url={audio_source.audio_file}
                playing={active && playing}
                stopPlay={this.stopPlay}
                startPlay={this.startPlay}
                togglePlay={this.togglePlay}
                toggleMuted={this.toggleMuted}
                handleVolume={this.handleVolume}
                {...state}
              />
            )
          })}
          {this.renderNextModuleLink()}
        </Styled.RouteSlider>
        <Styled.Cover />
      </Styled.AudioHandler>
    )
  }
}

//-----------  Type Definitions  -----------//

AudioHandler.propTypes = {
  nextUrl    : PropTypes.string,
  currentId  : PropTypes.string,
  audioFiles : PropTypes.arrayOf(PropTypes.shape(audioAssignmentShape)),
  canAdvance : PropTypes.bool
}

//-----------  Export  -----------//

export default AudioHandler
