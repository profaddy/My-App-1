//-----------  Imports  -----------//

import Styled             from './styles'

import consents           from 'data/consents/eula'

import React              from 'react'
import PropTypes          from 'prop-types'
import { reduxForm }      from 'redux-form'

import Button             from '@miro/core-ui/lib/components/Button'
import ScrollBlock        from '@miro/core-ui/lib/components/ScrollBlock'
import FormSubmit         from '@miro/core-ui/lib/forms/FormSubmit'
import ContentWalkthrough from 'components/ContentWalkthrough'

//-----------  Definitions  -----------//

export const form = 'eula'

//-----------  Component  -----------//

class EulaForm extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { onExit, handleSubmit, ...props } = this.props

    return (
      <Styled.EulaForm noValidate onSubmit={handleSubmit}>
        <h5>Terms of Service</h5>
        <ScrollBlock limited={32}>
          <Styled.EulaText>
            <p><strong>Date of Last Revision: December 04, 2018.</strong></p>
            <br />
            <ContentWalkthrough sections={consents} onCompletion={this.handleCompleted} />
            <em>This agreement was written in English (US). To the extent any translated version of this agreement conflicts with the English version, the English version controls.</em>
          </Styled.EulaText>
        </ScrollBlock>

        <Styled.Actions>
          <Button onClick={onExit} disabled={props.submitting} small>
            Disagree
          </Button>
          <Button type='submit' disabled={props.submitting} small>
            Agree
          </Button>
        </Styled.Actions>
      </Styled.EulaForm>
    )
  }
}

//-----------  Type Definitions  -----------//

EulaForm.propTypes = {
  onExit   : PropTypes.func.isRequired,
  onSubmit : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({ form })(EulaForm)
