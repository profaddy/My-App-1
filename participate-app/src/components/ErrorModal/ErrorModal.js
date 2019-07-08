//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

import DeskImage from 'assets/images/desk.svg'

//-----------  Component  -----------//

const ErrorModal = ({ error, title, subtitle, message }) => (
  <Styled.ErrorModal>
    <div>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {(error && error.detail) && <Styled.Error>{error.detail}</Styled.Error>}
      {message && <p>{message}</p>}
    </div>
    <DeskImage />
  </Styled.ErrorModal>
)

//-----------  Type Definitions  -----------//

ErrorModal.propTypes = {
  error    : PropTypes.any,
  title    : PropTypes.string,
  message  : PropTypes.string,
  subtitle : PropTypes.string,
}
//-----------  Export  -----------//

export default ErrorModal
