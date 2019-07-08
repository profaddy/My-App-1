//-----------  Imports  -----------//

import Styled            from './styles'

import React                from 'react'
import PropTypes            from 'prop-types'

import Modal                from '@miro/core-ui/lib/components/Modal'
import Button               from '@miro/core-ui/lib/components/Button'
import PdfViewer            from 'containers/PdfViewer'
import StudyHeader          from 'containers/StudyHeader'

import SignatureForm        from 'forms/SignatureForm'
import HipaaContent         from 'components/HipaaContent'
import BillOfRightsContent  from 'components/BillOfRightsContent'

import TabbedStepper        from './TabbedStepper'
import { contentStyles,overlayStyles }    from 'utilities/modal'

//-----------  Component  -----------//

function getPaticipantSteps() {
  return ['Age','Signature','Selfie', 'I.D.Photo', 'HIPAA','Bill of Rights'];
}

function getGuardianSteps() {
  return ['Age', 'Legal Guardian' ,'Signature','Selfie', 'I.D.Photo', 'HIPAA','Bill of Rights'];
}

class SignatureRoute extends React.Component {

  state = {
    modal: false,
    activeStep:0,
    tabbedStep:0
  }

  //-----------  Event Handler  -----------//

  handleNext = () => {
    const {activeStep,tabbedStep} = this.state
    if(activeStep === 0 && this.props.canConsent === true){
      this.setState({activeStep : activeStep + 2})
    }else{
      this.setState({activeStep : activeStep + 1})
    }
    this.setState({tabbedStep : tabbedStep + 1})
  }

  handleBack = () => {
    const {activeStep,tabbedStep} = this.state
    if(activeStep === 2 && this.props.canConsent === true){
      this.setState({activeStep: activeStep - 2})
    }else{
      this.setState({activeStep: activeStep - 1})
    }
    if(this.props.canConsent === false){
      this.setState({activeStep: activeStep - 1})
    }
      this.setState({tabbedStep: tabbedStep - 1})
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  //-----------  HTML Render  -----------//

  render(){

    const stepVerificationMap = {
      0: { component: 'Age'},
      1: { component: 'LegalGuardian'},
      2: { component: 'Signature'},
      3: { component: 'TakeSelfie'},
      4: { component: 'TakeIdPhoto', caption: 'Verify Birthdate'},
      5: { component: 'Hipaa', caption: 'Signature'},
      6: { component: 'BillOfRights', caption: 'Signature'},
    };

    const { onExit, onSubmit, canConsent, formStates } = this.props
    const { modal,activeStep,tabbedStep } = this.state

    const steps = canConsent === false ? getGuardianSteps() : getPaticipantSteps()
    const modalStyles = { ...contentStyles, maxWidth: '65rem' }
    const activeModal = stepVerificationMap[activeStep].component
    let isNext = true

    switch(activeModal){

      case 'Age':
      isNext = formStates && !!formStates.over_18  && formStates.agree && (formStates.over_18 === 'no' ? !!formStates.participant_name : true );
      break;

      case 'Signature':
        if(formStates.over_18 === 'yes'){
          isNext = !!formStates.participant_signature
        }else{
          isNext = !!formStates.representative_signature
        }
        break;

      case 'Hipaa':
        if (formStates.over_18 === 'yes'){
          isNext = !!formStates.Hipaa_participant_signature
        }else{
          isNext = !!formStates.Hipaa_representative_signature
        }
        break;

      case 'TakeSelfie':
        isNext = !!formStates.participant_selfie
        break;

      case 'TakeIdPhoto':
        isNext = !!formStates.participant_govid
        break;
    }

    return (
      <Styled.SignatureRoute title='CONSENT SIGNATURE'>
        <TabbedStepper
          data={steps}
          activeIndex={tabbedStep}
          style={{ marginBottom: 30 }}
        />
        <SignatureForm
          canConsent={canConsent}
          openModal={this.openModal}
          onExit={onExit}
          onSubmit={onSubmit}
          activeModal={stepVerificationMap[activeStep].component}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          formStates={formStates}
          isNext={isNext}
        />
        {stepVerificationMap[activeStep].component === 'Signature' &&
        <Modal label='Consent' isOpen={modal} contentStyles={modalStyles} overlayStyles={overlayStyles} onRequestClose={this.closeModal}>
          <Styled.Modal>
            <Button onClick={this.closeModal} active>Back to Signature</Button>
            {/*<StudyHeader /> */}
            <PdfViewer />
            <br/>
            <Button onClick={this.closeModal} active>Back to Signature</Button>
          </Styled.Modal>
        </Modal>}
        {stepVerificationMap[activeStep].component === 'Hipaa' &&
        <Modal label='Consent' isOpen={modal} contentStyles={modalStyles} overlayStyles={overlayStyles} onRequestClose={this.closeModal}>
          <Styled.Modal>
            <HipaaContent formStates={formStates} />
            <Button onClick={this.closeModal} active>Back</Button>

          </Styled.Modal>
        </Modal>}
        {stepVerificationMap[activeStep].component === 'BillOfRights' &&
        <Modal label='Consent' isOpen={modal} contentStyles={modalStyles} overlayStyles={overlayStyles} onRequestClose={this.closeModal}>
          <Styled.Modal>
          <BillOfRightsContent />
          <Button onClick={this.closeModal} active>Back</Button>
          </Styled.Modal>
        </Modal>}

      </Styled.SignatureRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

SignatureRoute.propTypes = {
  onExit     : PropTypes.func.isRequired,
  onSubmit   : PropTypes.func.isRequired,
  canConsent : PropTypes.bool,
}

//-----------  Export  -----------//

export default SignatureRoute
