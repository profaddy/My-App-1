//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

import Button    from 'components/Button'

//-----------  Component  -----------//

class AccountHeader extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { onExit } = this.props

    return (
      <Styled.AccountHeader>
        <Button text='Exit' onClick={onExit} small />
      </Styled.AccountHeader>
    )
  }
}

//-----------  Type Definitions  -----------//

AccountHeader.propTypes = {
  onExit: PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default AccountHeader
