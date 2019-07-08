//-----------  Imports  -----------//

import get from 'lodash/get';
import moment from 'moment';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Divider from 'components/Divider';
import Button from '@miro/core-ui/lib/components/Button';

import StatusAccordion from './StatusAccordion';
import Stepper from './Steppers';
import Toolbar from './Toolbar';

import { phoneFormatter } from 'utilities/formatters';
import RouteLoader from '@miro/core-ui/lib/components/RouteLoader';
import ReviewedEligibility from './ReviewedEligibility';
import Modal from '@miro/core-ui/lib/components/Modal';
import DrugTest from './DrugTest';

//-----------  Helpers  -----------//

const birthDateFormatter = mob => {
  const birthYear = moment(mob, 'MMYYYY');
  return `${birthYear.format('MMMM, YYYY')} (${birthYear
    .startOf('month')
    .fromNow()
    .split(' ')
    .slice(0, 2)
    .join(' ')})`;
};

const userKeys = [
  { key: 'mob', label: 'Birth Date', formatter: birthDateFormatter },
  { key: 'email', label: 'Email' },
  { key: 'phone_number', label: 'Phone Number', formatter: phoneFormatter },
];

//-----------  Component  -----------//

class ParticipantDetails extends React.Component {
  componentDidMount() {
    this.props.getParticipant(
      this.props.match.params.studyId,
      this.props.match.params.participantId,
    );
  }

  //-----------  Event Handlers  -----------//

  finalReviewSubmit = values =>
    this.props.requestReviewedEligibility({
      ...values,
      participantId: this.props.participantDetails.id,
      studyId: this.props.match.params.studyId,
    });

  drugTestSubmit = values =>
    this.props.requestDrugTest({
      ...values,
      participantId: this.props.participantDetails.id,
      studyId: this.props.match.params.studyId,
    });
  //-----------  HTML Render  -----------//

  render() {
    const {
      participantDetails,
      reviewedEligibility,
      match,
      drugTestModal,
    } = this.props;
    //-----------  HTML Render  -----------//

    const ticsPath =
      '/' !== match.url.charAt(match.url.length - 1)
        ? match.url + '/tics'
        : match.url + 'tics';

    const ticsScore = get(participantDetails, 'eligibility_test_data.total');
    const drugResult = get(participantDetails, 'drug_test_result.test_result');

    if (participantDetails.isLoading) {
      return <RouteLoader loadingText="Getting Participants" />;
    }
    if (!participantDetails.hasData) return <div />;
    if (participantDetails.error) return <div>Some thing is not Right :(</div>;
    const participantStates = participantDetails.states
      ? participantDetails.states.map(step => step.name)
      : [];

    const nextStepIndex = participantStates.indexOf(
      participantDetails.active_state.state,
    );

    const nextStep =
      nextStepIndex >= 0 && nextStepIndex <= participantStates.length - 2
        ? participantStates[nextStepIndex + 1]
        : 'All Complete';

    const drug_test_result = participantDetails.drug_test_result
      ? participantDetails.drug_test_result
      : {};

    const medicalHistoryData = get(
      participantDetails,
      'eligibility_data',
      [],
    ).filter(f => f.title === 'Medical History')[0];

    const showTics = medicalHistoryData.details !== null;

    return (
      <Styled.ParticipantDetails>
        <Styled.Details>
          <Styled.Toolbar>
            <Styled.UserTitle>{`${participantDetails.first_name} ${
              participantDetails.last_name
            }`}</Styled.UserTitle>
            <Styled.ToolbarActions>
              <Toolbar {...this.props} />
            </Styled.ToolbarActions>
          </Styled.Toolbar>
          <Styled.UserDetailsContainer>
            <Styled.UserDetailsLeft>
              <Styled.LocationAndNextStep>
                <Styled.LocationDiv>
                  {!!participantDetails.enable_drug_screen
                    ? 'In-Person'
                    : 'Remote'}
                </Styled.LocationDiv>

                <Styled.NextStepDiv>
                  {nextStep !== 'All Complete' && (
                    <>
                      <Styled.Dot style={{ backgroundColor: 'orange' }} />
                      Next Step: {nextStep}
                    </>
                  )}
                  {nextStep === 'All Complete' && 'All Complete'}
                </Styled.NextStepDiv>
              </Styled.LocationAndNextStep>

              {userKeys.map(user => (
                <Styled.UserDetails key={user.key}>
                  <Styled.UserDetailsKey>{user.label}</Styled.UserDetailsKey>
                  <Styled.UserDetailsValue>
                    {participantDetails[user.key]
                      ? user.formatter
                        ? user.formatter(participantDetails[user.key])
                        : participantDetails[user.key]
                      : 'Not Provided'}
                  </Styled.UserDetailsValue>
                </Styled.UserDetails>
              ))}
              <Styled.UserDetails>
                <Styled.UserDetailsKey>Enrollment Status</Styled.UserDetailsKey>
                <Styled.UserDetailsValue>
                  {participantDetails.eligibility_status === null
                    ? 'In-Process'
                    : participantDetails.eligibility_status
                    ? 'Eligible'
                    : 'Ineligible'}
                </Styled.UserDetailsValue>
              </Styled.UserDetails>
            </Styled.UserDetailsLeft>
            <Styled.UserDetailsRight>
              <Styled.UserDetails>
                <Styled.UserDetailsKey>TICS Results</Styled.UserDetailsKey>
                <Styled.UserDetailsValue>
                  {ticsScore && showTics ? (
                    <h6>
                      Total Score: {ticsScore}
                      <Link to={ticsPath}>(edit)</Link>
                    </h6>
                  ) : (
                    <Button to={ticsPath} small disabled={!showTics}>
                      Enter
                    </Button>
                  )}
                </Styled.UserDetailsValue>
              </Styled.UserDetails>
              {participantDetails.enable_drug_screen && (
                <Styled.UserDetails>
                  <Styled.UserDetailsKey>Drug Test</Styled.UserDetailsKey>
                  <Styled.UserDetailsValue>
                    {drugResult ? (
                      <h6>
                        <span style={{ textTransform: 'capitalize' }}>
                          {drugResult}
                        </span>
                        <a onClick={this.props.startDrugTest}>(edit)</a>
                      </h6>
                    ) : (
                      <Button
                        onClick={this.props.startDrugTest}
                        small
                        disabled={!ticsScore}
                      >
                        Enter
                      </Button>
                    )}
                  </Styled.UserDetailsValue>
                </Styled.UserDetails>
              )}
            </Styled.UserDetailsRight>
          </Styled.UserDetailsContainer>
        </Styled.Details>
        <Divider />
        <Styled.EligibilityPart>
          <Styled.EligibilityPartHeader>
            <Styled.EligibilityTitle>Eligibility</Styled.EligibilityTitle>
            <div>
              {participantDetails.active_state.state === 'IDVerified' && (
                <Button
                  active
                  style={{ fontSize: '1.2em', marginRight: 20 }}
                  onClick={this.props.startReviewedEligibility}
                >
                  Reviewed Eligibility
                </Button>
              )}
              {participantDetails.authorization_participant && (
                <Button
                  active
                  onClick={() => {
                    this.props.history.push('review');
                  }}
                  style={{ fontSize: '1.2em' }}
                >
                  Review Consent
                </Button>
              )}
            </div>
          </Styled.EligibilityPartHeader>
          <Styled.EligibilityPartBody>
            <Styled.Accordions>
              <StatusAccordion
                data={participantDetails.eligibility_data || []}
              />
            </Styled.Accordions>
            <Styled.Steppers>
              <Stepper
                steps={participantStates}
                activeState={participantDetails.active_state.state}
              />
            </Styled.Steppers>
          </Styled.EligibilityPartBody>
        </Styled.EligibilityPart>
        {reviewedEligibility}
        <Modal
          isOpen={reviewedEligibility}
          onRequestClose={this.props.stopReviewedEligibility}
          label="Reviewed Eligibility"
        >
          <ReviewedEligibility onSubmit={this.finalReviewSubmit} />
        </Modal>

        {participantDetails.enable_drug_screen && (
          <Modal
            isOpen={drugTestModal}
            onRequestClose={this.props.stopDrugTest}
          >
            <DrugTest
              onSubmit={this.drugTestSubmit}
              initialValues={{
                ...drug_test_result,
              }}
            />
          </Modal>
        )}
      </Styled.ParticipantDetails>
    );
  }
}

//-----------  Type Definitions  -----------//

ParticipantDetails.propTypes = {
  participantDetails: PropTypes.object,
};

//-----------  Export  -----------//

export default ParticipantDetails;
