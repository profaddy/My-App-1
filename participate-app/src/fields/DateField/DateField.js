//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'
import DatePicker   from 'react-datepicker'

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper'

import CalendarIcon from '@miro/core-ui/dist/assets/icons/calendar.svg'

//-----------  Component  -----------//

const DateField = ({ input, invalid, children, ...props }) => {

  return (
    <Styled.DateField isInvalid={invalid}>
      {children}
      <DatePicker selected={input.value} onChange={input.onChange} dateFormat={'D MMM YYYY'} {...props} />
      <Styled.Icon>
        <CalendarIcon />
      </Styled.Icon>
    </Styled.DateField>
  )
}

//-----------  Type Definitions  -----------//

DateField.propTypes = {
  input    : PropTypes.object.isRequired,
  invalid  : PropTypes.bool,
  children : PropTypes.node
}

//-----------  Export  -----------//

export default FieldWrapper(DateField)
