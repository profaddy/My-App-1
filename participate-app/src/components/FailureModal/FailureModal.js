//-----------  Imports  -----------//

import Styled     from './styles'

import React      from 'react'
import PropTypes  from 'prop-types'

import Button     from '@miro/core-ui/lib/components/Button'

import FailedIcon from 'assets/icons/failed.svg'

//-----------  Component  -----------//

const FailureModal = ({ attempts, closeModal }) => (
  <Styled.FailureModal>
    <FailedIcon />
    <h2>Sorry... try again</h2>
    <h4>You have <strong>{attempts}</strong> more {(1 === attempts) ? 'chance' : 'chances'} to pass the test</h4>
    <p>Read through the consent text again to get a better understanding of what you're agreeing to.</p>
    <Button onClick={closeModal} active>Review the Consent Again</Button>
  </Styled.FailureModal>
)

//-----------  Type Definitions  -----------//

FailureModal.propTypes = {
  attempts   : PropTypes.number,
  closeModal : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default FailureModal
