//-----------  Imports  -----------//

import Styled     from './styles'

import React      from 'react'
import PropTypes  from 'prop-types'
import moment     from 'moment';


import Modal       from '@miro/core-ui/lib/components/Modal'
import Button      from '@miro/core-ui/lib/components/Button'

import PdfViewer   from 'containers/PdfViewer'
import StudyHeader from 'containers/StudyHeader'
import FormSubmit  from '@miro/core-ui/lib/forms/FormSubmit'
import { reduxForm,
        Field}     from 'redux-form'
import Logo        from '@miro/core-ui/lib/components/Logo'
import { contentStyles }    from 'utilities/modal'




export const form = 'consentSuccess'

//-----------  Component  -----------//
class ConsentSuccessModal extends React.Component {

  state = {
    modal: false,
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  render(){
  const {closeModal,handleSubmit,study,data,formStates, ...props } = this.props
  const {modal} = this.state
  const modalStyles = { ...contentStyles, maxWidth: '65rem' }
  const participant_name = formStates.over_18 === 'yes' ? formStates.participant_name : formStates.representative_name
  const signature_time   = moment().format('DD/MM/YYYY HH:MM')

    return (
      <Styled.ConsentModal>
        <Logo />
        <p>Consent Form Summary</p>
        <Styled.Details>
        <h4>RESEARCH PARTICIPANT INFORMED CONSENT AND PRIVACY AUTHORIZATION FORM</h4>
        <p><strong>Protocol Title: </strong></p>
        <p>{data.study.name}</p>
        <p><strong>Application No.: </strong>{data.study.irb_no}</p>
        <p><strong>Sponsor: </strong>{data.study.sponsor}</p>
        <p><strong>Principal Investigator</strong></p>
        <p>{study.PIs[0]}</p>
        <p>{study.address}</p>
        <p>{study.phone}</p>
        <p style={{    borderTop: 'dashed 1px',paddingTop: '1rem'}}>Name of Person Obtaining Consent: {participant_name}</p>
        <p>Signature Date Time: {signature_time}</p>
        <Styled.ModalSwitch onClick={this.openModal}>
            <a>View Consent Form</a>
        </Styled.ModalSwitch>
        </Styled.Details>
        <Modal label='Consent' isOpen={modal} contentStyles={modalStyles} overlayStyles={overlayStyles} onRequestClose={this.closeModal}>
          <Styled.Modal>
            <StudyHeader />
            <PdfViewer />
            <Button onClick={this.closeModal} active>Back</Button>
          </Styled.Modal>
        </Modal>
        <form onSubmit={handleSubmit}>
          {/*<Styled.Button>
          <Button onClick={closeModal} > CANCEL </Button>
          </Styled.Button>*/}
          <Styled.Button>
          <FormSubmit {...props}>
              NEXT
          </FormSubmit>
          </Styled.Button>
        </form>
      </Styled.ConsentModal>
    )
  }
}
//-----------  Type Definitions  -----------//

ConsentSuccessModal.propTypes = {
  attempts   : PropTypes.number,
  closeModal : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default reduxForm({ form })(ConsentSuccessModal)
