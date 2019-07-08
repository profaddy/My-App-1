//-----------  Imports  -----------//

import Styled      from './styles'
import VolumeIcon  from './VolumeIcon'
import TimeDisplay from './TimeDisplay'

import React       from 'react'
import PropTypes   from 'prop-types'
import ReactPlayer from 'react-player'
import { Link }    from 'react-router-dom'

import VisualRange from 'components/VisualRange'

import vars        from '@miro/core-ui/src/styles/variables'

//-----------  Component  -----------//

class AudioBlock extends React.Component {

  constructor(props){
    super(props)

    this.player = React.createRef()
  }

  state = {
    duration : 0,
    loaded   : 0,
    played   : 0,
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.onKeyDown)
  }

  //-----------  Event Handlers  -----------//

  onKeyDown = ({ code, ctrlKey, ...evt }) => {
    if (!this.props.active || !ctrlKey) return false

    const { played, duration } = this.state
    const seconds = (duration * played)
    let value = null

    if ('Comma' === code)
      value = parseFloat(Math.max(0, seconds - 5) / duration)
    if ('Period' === code)
      value = parseFloat(Math.min(duration, seconds + 5) / duration)
    if ('Slash' === code)
      value = 0

    if (null === value) return false

    this.player.current.seekTo(value)
    this.setState({ played: value })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = (evt) => {
    this.setState({ played: parseFloat(evt.target.value) })
  }

  onSeekMouseUp = (evt) => {
    this.setState({ seeking: false })
    this.player.current.seekTo(parseFloat(evt.target.value))
  }

  onProgress = (state) => {
    if (!this.state.seeking && this.props.playing)
      this.setState(state)
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { id, url, loop, muted, loaded, active, volume, playing, prevUrl, nextUrl, canAdvance, stopPlay, startPlay, togglePlay, toggleMuted, handleVolume } = this.props
    const { played, duration } = this.state

    return (
      <Styled.AudioBlock active={active}>
        <ReactPlayer ref={this.player}
          url='https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3'
          loop={loop}
          muted={muted}
          volume={volume}
          playing={playing}
          onPlay={startPlay}
          onPause={stopPlay}
          onEnded={stopPlay}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onBuffer={() => console.log('onBuffer')}
          onError={e => console.log('onError', e)}
        />

        <Styled.AudioHeader>
          <h6>Audio file: {id}</h6>
          <div>
            {prevUrl && <Link to={prevUrl}><span>←</span></Link>}
            {(nextUrl && canAdvance) && (
              <Link to={nextUrl}><span>→</span></Link>
            )}
            {(nextUrl && !canAdvance) && (
              <a><span>→</span></a>
            )}
          </div>
        </Styled.AudioHeader>

        <Styled.AudioRange>
          <VisualRange value={played} color={vars.blueBright} onChange={this.onSeekChange} onMouseUp={this.onSeekMouseUp} onMouseDown={this.onSeekMouseDown} />
          <TimeDisplay seconds={duration * played} />
          <TimeDisplay seconds={duration * (1 - played)} />
        </Styled.AudioRange>

        <Styled.AudioActions>
          <Styled.PlayIcon onClick={togglePlay} playing={!playing}>
            <span /><span />
          </Styled.PlayIcon>
          <VisualRange value={muted ? 0 : volume} color={vars.grayDark} onChange={handleVolume} />
          <VolumeIcon muted={muted} onClick={toggleMuted} />
        </Styled.AudioActions>
      </Styled.AudioBlock>
    )
  }
}

//-----------  Type Definitions  -----------//

AudioBlock.propTypes = {
  id           : PropTypes.string,
  url          : PropTypes.string,
  loop         : PropTypes.bool.isRequired,
  muted        : PropTypes.bool.isRequired,
  volume       : PropTypes.number.isRequired,
  playing      : PropTypes.bool.isRequired,
  prevUrl      : PropTypes.string,
  nextUrl      : PropTypes.string,
  active       : PropTypes.bool,
  canAdvance   : PropTypes.bool,
  stopPlay     : PropTypes.func.isRequired,
  startPlay    : PropTypes.func.isRequired,
  togglePlay   : PropTypes.func.isRequired,
  toggleMuted  : PropTypes.func.isRequired,
  handleVolume : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default AudioBlock
