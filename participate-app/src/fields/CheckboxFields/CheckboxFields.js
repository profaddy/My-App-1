//-----------  Imports  -----------//

import get               from 'lodash/get'
import pull              from 'lodash/pull'
import isArray           from 'lodash/isArray'

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'

import FieldWrapper      from '@miro/core-ui/lib/forms/FieldWrapper'
import SelectorWrapper,
       { selectorShape } from 'fields/SelectorWrapper'

import { OTHER }         from 'utilities/constants'

//-----------  Component  -----------//

class CheckboxFields extends React.PureComponent {

  //-----------  Helpers  -----------//

  generateNestedOptions = (option, selection) => {
    if (!isArray(option.options)) return null

    return (
      <Styled.Nested visible={selection.includes(option.value)}>
        {option.options.map(nested => {
          const value = [option.value, nested.value].join('.')

          const selectorProps = {
            type      : 'checkbox',
            id        : [this.props.id, value].join('_'),
            key       : value,
            name      : get(this.props, 'input.name'),
            value     : value,
            label     : nested.label,
            checked   : selection.includes(value),
            onChange  : this.handleSecondaryChange,
            input     : nested.input,
            className : (OTHER ===  nested.value) ? 'miro-other' : ''
          }

          return (
            <SelectorWrapper {...selectorProps} />
          )
        })}
      </Styled.Nested>
    )
  }

  //-----------  Event Handlers  -----------//

  handlePrimaryChange = (evt) => {
    const { input } = this.props
    const selection = evt.target.value

    let values = [ ...input.value ]

    if (values.includes(selection))
      pull(values, selection)
    else
      values.push(selection)

    return input.onChange(values)
  }

  handleSecondaryChange = (evt) => {
    const { input } = this.props
    const selection = evt.target.value

    let values = [ ...input.value ]

    if (values.includes(selection))
      pull(values, selection)
    else
      values.push(selection)

    return input.onChange(values)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { id, input, invalid, options, children, ...props } = this.props

    const selection = get(input, 'value', [])

    return (
      <Styled.CheckboxFields>
        {children}

        {options.map(option => {
          const selectorProps = {
            type     : 'checkbox',
            id       : [id, option.value].join('_'),
            key      : option.value,
            name     : get(input, 'name'),
            value    : option.value,
            label    : option.label,
            checked  : selection.includes(option.value),
            onChange : this.handlePrimaryChange,
            invalid  : invalid,
            input    : option.input,
          }

          return (
            <SelectorWrapper {...selectorProps}>
              {this.generateNestedOptions(option, selection)}
            </SelectorWrapper>
          )
        })}
      </Styled.CheckboxFields>
    )
  }
}

//-----------  Type Definitions  -----------//

CheckboxFields.propTypes = {
  id       : PropTypes.string.isRequired,
  input    : PropTypes.object.isRequired,
  invalid  : PropTypes.bool,
  options  : PropTypes.arrayOf(PropTypes.shape(selectorShape)).isRequired,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default FieldWrapper(CheckboxFields)
