//-----------  Imports  -----------//

import Styled                 from './styles'
import validation             from './validation'

import React                  from 'react'
import PropTypes              from 'prop-types'

import CapacityForm, { name } from 'forms/CapacityForm'

//-----------  Component  -----------//

class CapacityRoute extends React.Component {

  //-----------  Event Handler  -----------//

  handleSubmit = (data, dispatch, props) => {
    const { onAttempt, onSubmit, resetForm } = this.props

    onAttempt(validation(data))

    return onSubmit(data, dispatch, props).then(() => resetForm(name))
  }

  //-----------  HTML Render  -----------//

  render(){
    const { onExit } = this.props

    return (
      <Styled.CapacityRoute title='STUDY QUIZ'>
        <Styled.Instructions>
          Instructions: To enroll in this study, please answer the following questions:
        </Styled.Instructions>

        <CapacityForm onExit={onExit} onSubmit={this.handleSubmit} />
      </Styled.CapacityRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

CapacityRoute.propTypes = {
  onExit    : PropTypes.func.isRequired,
  onSubmit  : PropTypes.func.isRequired,
  onAttempt : PropTypes.func.isRequired,
  resetForm : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default CapacityRoute
