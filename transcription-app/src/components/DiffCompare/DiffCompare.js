//-----------  Imports  -----------//

import Styled             from './styles'

import React              from 'react'
import PropTypes          from 'prop-types'
import { defaultMemoize } from 'reselect'
import { diffChars }      from 'diff'

import DiffSelect         from 'components/DiffSelect'
import Button             from '@miro/core-ui/src/components/Button'

//-----------  Helpers  -----------//

export const getContext = (input, count, addTo) => {
  const countBack = (count < 10) ? count : 10
  return (0 === count) ? (
    <p>
      <strong>{input.substring(0, addTo)}</strong>
      {input.substring(addTo, (addTo + 45))}
    </p>
  ) : (
    <p>
      {input.substring((count - countBack), count)}
      <strong>{input.substring(count, (count + addTo))}</strong>
      {input.substring((count + addTo), (count + addTo + 45))}
    </p>
  )
}

export const renderDiffs = defaultMemoize((inputA, inputB) => {
  const diffs = diffChars(inputA, inputB)

  let addToA, addToB
  let children = []
  let diffKeys = []
  let countA = 0
  let countB = 0
  let index = 0

  while (index < diffs.length){
    const current = diffs[index]
    const next    = diffs[index + 1]

    if (!current.added && !current.removed){
      index += 1
      countA += current.count
      countB += current.count

      children.push(
        <span key={index} className='real'>{current.value}</span>
      )
      continue
    }

    if (!next || (!next.added && !next.removed)){
      addToA = (current.removed ? current.count : 0)
      addToB = (current.added ? current.count : 0)
      index += 1

      diffKeys.push(index.toString())
      children.push(
        <DiffSelect
          key={index}
          diffA={current.removed ? current.value : ''}
          diffB={current.added ? current.value : ''}
          contextA={getContext(inputA, countA, addToA)}
          contextB={getContext(inputB, countB, addToB)}
        />
      )

      countA += addToA
      countB += addToB
    } else {
      addToA = (current.removed ? current.count : 0) + (next.removed ? next.count : 0)
      addToB = (current.added ? current.count : 0) + (next.added ? next.count : 0)
      index += 2

      diffKeys.push(index.toString())
      children.push(
        <DiffSelect
          key={index}
          diffA={current.removed ? current.value : next.value}
          diffB={current.added ? current.value : next.value}
          contextA={getContext(inputA, countA, addToA)}
          contextB={getContext(inputB, countB, addToB)}
        />
      )

      countA += addToA
      countB += addToB
    }
  }

  return { children, diffKeys }
})

//-----------  Component  -----------//

class DiffCompare extends React.Component {

  constructor(props){
    super(props)

    const { children, diffKeys } = renderDiffs(props.inputA, props.inputB)
    this.state = { children, diffKeys, focused: diffKeys[0] }
    this.diff = React.createRef()
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('click', this.removeFocus)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('click', this.removeFocus)
  }

  //-----------  Event Handlers  -----------//

  toggleFocus = (key, evt) => {
    if (evt) evt.nativeEvent.stopImmediatePropagation()
    this.setState({ focused: key })
  }

  removeFocus = () => {
    this.setState({ focused: null })
  }

  focusNext = () => {
    const { focused, diffKeys } = this.state
    const index = diffKeys.indexOf(focused)
    const focus = ((index >= 0) && (index < diffKeys.length - 1))
      ? diffKeys[index + 1]
      : diffKeys[0]

    this.setState({ focused: focus })
  }

  focusPrev = () => {
    const { focused, diffKeys } = this.state
    const index = diffKeys.indexOf(focused)
    const focus = (index >= 1)
      ? diffKeys[index - 1]
      : diffKeys[diffKeys.length - 1]

    this.setState({ focused: focus })
  }

  onKeyDown = (evt) => {
    if ('Tab' === evt.code){
      evt.shiftKey ? this.focusPrev() : this.focusNext()
      evt.preventDefault()
    }
  }

  onSubmit = () => {
    const real = this.diff.current.querySelectorAll('.real')
    let text = ''

    real && real.forEach(elem => text += (elem.innerText || elem.innerContent || ''))
    this.props.onSubmit(text)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { focused, children, diffKeys } = this.state
    const { stimuli, disabled, btnText } = this.props

    return (
      <Styled.DiffCompare>
        <Styled.Transcription>
          <Styled.Stimuli>
            <div>
              <strong>Stimuli: </strong>
              <span>{stimuli || 'n/a'}</span>
            </div>
            <Styled.Count>
              {diffKeys.length} Diffs
            </Styled.Count>
          </Styled.Stimuli>
          <Styled.DiffContent innerRef={this.diff}>
            {React.Children.map(children, child => (
              React.cloneElement(child, {
                focus   : !!(child.key == focused) ? true : undefined,
                onClick : ('span' !== child.type) ? (evt) => this.toggleFocus(child.key, evt) : undefined
              })
            ))}
          </Styled.DiffContent>
        </Styled.Transcription>
        <Button onClick={this.onSubmit} disabled={disabled} active>{btnText || 'Save'}</Button>
      </Styled.DiffCompare>
    )
  }
}

//-----------  Type Definitions  -----------//

DiffCompare.propTypes = {
  inputA   : PropTypes.string.isRequired,
  inputB   : PropTypes.string.isRequired,
  stimuli  : PropTypes.string,
  btnText  : PropTypes.string,
  disabled : PropTypes.bool,
  onSubmit : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default DiffCompare
