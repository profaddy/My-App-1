//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import ReleaseForm from 'forms/ReleaseForm'

//-----------  Component  -----------//

class ReleaseRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { onExit, onSubmit, canConsent, providerInfo } = this.props

    return (
      <Styled.ReleaseRoute title='Clinician Confirmation of Current Health Status'>
        <Styled.Disclaimer>
          <p>We are required to confirm your current health status with your physician in order to include your data in our Study. Please complete the form below to grant permission for your clinician to cofirm your psychiatric or neurological condition(s) and medication(s).</p>
        </Styled.Disclaimer>

        <h3>PHI Release: Request PHI for Study Use</h3>

        <Styled.Disclaimer>
          <h5>Authorization to Release Health Information</h5>
          <p>Your health information is known as “Protected Health Information” or PHI. When you sign this document, you are giving permission to the named providers below to share or ‘release’ your health information to this Study.</p>
        </Styled.Disclaimer>

        <Styled.Disclaimer>
          <h5>We request that your medical provider releases only the following information for Study Use</h5>
          <ul>
            <li>Confirmation of neurological or psychiatric diagnoses</li>
            <li>Date of diagnosis</li>
            <li>Medical history relating to cognitive complaints</li>
            <li>Concomitant medications: dose, indication, and regimen </li>
          </ul>
        </Styled.Disclaimer>

        <ReleaseForm
          canConsent={canConsent}
          onExit={onExit}
          onSubmit={onSubmit}
          initialValues={providerInfo}
        />
      </Styled.ReleaseRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

ReleaseRoute.propTypes = {
  onExit       : PropTypes.func.isRequired,
  onSubmit     : PropTypes.func.isRequired,
  canConsent   : PropTypes.bool,
  providerInfo : PropTypes.object,
}

//-----------  Export  -----------//

export default ReleaseRoute
