//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class DiffSelect extends React.Component {

  state = {
    input    : '',
    decided  : false,
    selected : (this.props.diffA > this.props.diffB) ? 'a' : 'b',
  }

  //-----------  Helpers  -----------//

  getDisplayText = () => {
    const { input, selected } = this.state
    const { diffA, diffB } = this.props

    switch (selected){
      case 'c' : return input
      case 'a' : return diffA
      default  : return diffB
    }
  }

  //-----------  Event Handlers  -----------//

  selectVersion = (selected, evt) => {
    evt.nativeEvent.stopImmediatePropagation()
    this.setState({ selected, decided: true })
    this.props.onClick()
  }

  handleInput = (evt) => {
    this.setState({ input: evt.target.value, decided: true })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { focus, contextA, contextB, onClick } = this.props
    const { input, decided, selected } = this.state

    return (
      <Styled.DiffSelect>
        <Styled.Display decided={decided} onClick={onClick} className='real'>
          {this.getDisplayText()}
        </Styled.Display>

        <Styled.Selector focus={focus}>
          <Styled.Selection onClick={(evt) => this.selectVersion('a', evt)} color='red'>
            <div>
              <small>1st Transcription</small>
              {contextA}
            </div>
            <div>
              <Styled.RadioButton selected={('a' === selected)} />
            </div>
          </Styled.Selection>
          <Styled.Selection onClick={(evt) => this.selectVersion('b', evt)} color='green'>
            <div>
              <small>2nd Transcription</small>
              {contextB}
            </div>
            <div>
              <Styled.RadioButton selected={('b' === selected)} />
            </div>
          </Styled.Selection>
          <Styled.Selection onClick={(evt) => this.selectVersion('c', evt)} color='blueBright'>
            <div>
              <small>Alternate Transcription</small>
              <textarea placeholder='Enter your own text here...' value={input} onChange={this.handleInput} tabIndex='-1' />
            </div>
            <div>
              <Styled.RadioButton selected={('c' === selected)} />
            </div>
          </Styled.Selection>
        </Styled.Selector>
      </Styled.DiffSelect>
    )
  }
}

//-----------  Type Definitions  -----------//

DiffSelect.propTypes = {
  focus    : PropTypes.bool,
  diffA    : PropTypes.string.isRequired,
  diffB    : PropTypes.string.isRequired,
  contextA : PropTypes.node.isRequired,
  contextB : PropTypes.node.isRequired,
  onClick  : PropTypes.func
}

//-----------  Export  -----------//

export default DiffSelect
