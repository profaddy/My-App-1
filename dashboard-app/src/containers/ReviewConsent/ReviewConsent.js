//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'components/Divider';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'components/InputFields';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import { reduxForm, Field } from 'redux-form';
import RepresentativeSignature from 'components/SignatureField';
import TabbedStepper from './TabbedStepper';
import { birthMonthFormatter } from 'utilities/formatters';
import vars from '@miro/core-ui/lib/styles/variables';
import LoadingBlock from '@miro/core-ui/lib/components/LoadingBlock';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Name', 'Photo', 'Signature', 'Birth-date', 'Signature'];
}
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

class ReviewConsent extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  componentDidMount() {
    if (!this.props.participantDetails.hasData) {
      const { studyId, participantId } = this.props.match.params;
      studyId &&
        participantId &&
        this.props.getParticipant(studyId, participantId);
    }
  }
  //-----------  HTML Render  -----------//

  render() {
    const { participantDetails, classes, handleSubmit } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    if (participantDetails.isLoading) {
      return <LoadingBlock />;
    }

    if (!participantDetails.hasData) {
      return <div>Something went wrong :(</div>;
    }

    if (
      participantDetails.hasData &&
      !participantDetails.authorization_participant
    ) {
      return <div>User has not Authorized</div>;
    }

    const generateCheckBoxDiv = (label, name, type) => (
      <Styled.CheckboxDiv>
        <RadioButton
          content={{
            id: name,
            options: [
              { label: `Accept`, value: true },
              { label: `Reject`, value: false },
            ],
          }}
          {...this.props}
        />
      </Styled.CheckboxDiv>
    );

    const nameVerification = (
      <>
        {generateCheckBoxDiv('Verify Name', 'pi_verifyname')}
        <Styled.GovtDiv>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Stated Name</span>
            <Styled.GovtDivName>
              <div>
                {`${participantDetails.first_name} ${
                  participantDetails.last_name
                }`}
              </div>
            </Styled.GovtDivName>
          </Styled.GovtDivParticipantName>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Name on the I.D.</span>
            <Styled.GovtPicDiv>
              <img
                src={
                  participantDetails.authorization_participant.participant_govid
                }
                alt="Participant Selfie"
                style={{ height: '100%', width: '100%' }}
              />
            </Styled.GovtPicDiv>
          </Styled.GovtDivParticipantName>
        </Styled.GovtDiv>
      </>
    );

    const selfieVerification = (
      <>
        {generateCheckBoxDiv('Verify Selfie', 'pi_verifyphoto')}
        <Styled.GovtDiv>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Photo</span>
            <Styled.Selfie>
              <img
                src={
                  participantDetails.authorization_participant
                    .participant_selfie
                }
                alt="Participant Selfie"
                style={{ height: '100%', width: '100%' }}
              />
            </Styled.Selfie>
          </Styled.GovtDivParticipantName>

          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Photo on the I.D.</span>
            <Styled.GovtPicDiv>
              <img
                src={
                  participantDetails.authorization_participant.participant_govid
                }
                alt="Participant Selfie"
                style={{ height: '100%', width: '100%' }}
              />
            </Styled.GovtPicDiv>
          </Styled.GovtDivParticipantName>
        </Styled.GovtDiv>
      </>
    );

    const signatureVerification = (
      <>
        {generateCheckBoxDiv('Verify Signature', 'pi_verifysignature')}
        <Styled.GovtDiv>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Signature</span>
            <Styled.Signature>
              <img
                src={
                  participantDetails.authorization_participant
                    .participant_signature
                }
                alt="Participant Selfie"
                style={{ marginLeft: 20, height: '80%', width: '80%' }}
              />
            </Styled.Signature>
          </Styled.GovtDivParticipantName>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Signature on the I.D.</span>
            <Styled.GovtPicDiv>
              <img
                src={
                  participantDetails.authorization_participant.participant_govid
                }
                alt="Participant Selfie"
                style={{ height: '100%', width: '100%' }}
              />
            </Styled.GovtPicDiv>
          </Styled.GovtDivParticipantName>
        </Styled.GovtDiv>
      </>
    );
    const birthDate = (
      <>
        {generateCheckBoxDiv('Verify Birthdate', 'pi_verifydob')}
        <Styled.GovtDiv>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Birthdate</span>
            <Styled.GovtDivName>
              <div>{birthMonthFormatter(participantDetails.mob)}</div>
            </Styled.GovtDivName>
          </Styled.GovtDivParticipantName>
          <Styled.GovtDivParticipantName>
            <span style={{ marginBottom: 20 }}>Birthdate on the I.D.</span>
            <Styled.GovtPicDiv>
              <img
                src={
                  participantDetails.authorization_participant.participant_govid
                }
                alt="Participant Selfie"
                style={{ height: '100%', width: '100%' }}
              />
            </Styled.GovtPicDiv>
          </Styled.GovtDivParticipantName>
        </Styled.GovtDiv>
      </>
    );
    const representativeSignature = (
      <div style={{ minHeight: 350 }}>
        <Styled.Bold>Coordinator Signature</Styled.Bold>
        <Styled.GovtDiv style={{ marginTop: 45 }}>
          <Field
            component={RepresentativeSignature}
            name="representative_signature"
            required
            validate={[required]}
            {...this.props}
          />
        </Styled.GovtDiv>
      </div>
    );

    const stepVerificationMap = {
      0: { component: nameVerification, caption: 'Verify Name' },
      1: { component: selfieVerification, caption: 'Verify Photo' },
      2: { component: signatureVerification, caption: 'Verify Signature' },
      3: { component: birthDate, caption: 'Verify Birthdate' },
      4: { component: representativeSignature, caption: 'Signature' },
    };

    return (
      <Styled.ReviewConsentContainer>
        <form onSubmit={handleSubmit}>
          <Styled.ReviewConsent>
            {/* <Styled.ReviewConsentHeader>
              Review and Signature
            </Styled.ReviewConsentHeader> */}
            <Styled.ReviewConsentBody>
              <Styled.BolderAndCaps>
                {stepVerificationMap[activeStep].caption}
              </Styled.BolderAndCaps>
              <TabbedStepper
                data={steps}
                activeIndex={activeStep}
                style={{ marginBottom: 30 }}
              />

              {stepVerificationMap[activeStep].component}

              <Divider
                style={{
                  marginTop: 30,
                  border: `.5px solid ${vars.grayLighter}`,
                }}
              />
              <div style={{ marginTop: 30 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>

                  {activeStep === steps.length - 1 ? (
                    <FormSubmit {...this.props} canReset>
                      Finish
                    </FormSubmit>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
              {/* <Styled.DashedBorder /> */}
            </Styled.ReviewConsentBody>
          </Styled.ReviewConsent>
        </form>
      </Styled.ReviewConsentContainer>
    );
  }
}

ReviewConsent = withStyles(styles)(ReviewConsent);

//-----------  Type Definitions  -----------//

ReviewConsent.propTypes = {
  participantDetails: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default reduxForm({
  form: 'reviewConsent',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ReviewConsent);
