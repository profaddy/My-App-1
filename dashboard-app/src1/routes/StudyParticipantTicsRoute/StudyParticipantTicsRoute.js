//-----------  Imports  -----------//

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import Styled from './styles';
import RouteLoader from '@miro/core-ui/lib/components/RouteLoader';
import React from 'react';
import PropTypes from 'prop-types';

import TicsTest from 'containers/TicsTest';
// import MocaTest from 'containers/MocaTest';
import PageWrapper from 'components/PageWrapper';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Component  -----------//

class StudyParticipantTicsRoute extends React.Component {
  componentDidMount() {
    if (!this.props.participantDetails.hasData) {
      console.log('this.props.getParticipant called');
      const { studyId, participantId } = this.props.match.params;
      studyId &&
        participantId &&
        this.props.getParticipant(studyId, participantId);
    }
  }
  //-----------  HTML Render  -----------//

  render() {
    const { match, onSubmitSuccess, participantDetails } = this.props;

    const previousData = get(
      participantDetails,
      'eligibility_test_data.data',
      [],
    );

    if (participantDetails.isLoading && isEmpty(previousData)) {
      return <RouteLoader loadingText="Getting TICS data" />;
    }

    const notes = get(participantDetails, 'eligibility_test_data.notes', '');
    const initialValues = previousData.reduce(
      (res, item) => ({ ...res, [item.item]: `${item.score}` }),
      { ...match.params },
    );

    initialValues.notes = notes;

    const medicalHistoryData = get(
      participantDetails,
      'eligibility_data',
      [],
    ).filter(f => f.title === 'Medical History')[0];

    const showTics = medicalHistoryData && medicalHistoryData.details !== null;

    if (!showTics) {
      return (
        <PageWrapper title="TICS: Telephone Interview for Cognitive Status">
          <Styled.StudyParticipantTicsRoute>
            <h3>Screening for this Participant is Incomplete</h3>
            <Button
              large
              active
              onClick={() => {
                this.props.history.push(match.url.replace('/tics', ''));
              }}
              style={{ fontSize: '1.2em' }}
            >
              Go to Participant's Details
            </Button>
            <PageWrapper.FullWidth />
          </Styled.StudyParticipantTicsRoute>
        </PageWrapper>
      );
    }

    return (
      <PageWrapper
        title="TICS: Telephone Interview for Cognitive Status"
        breadcrumbs={[
          'Home',
          'Studies',
          'Participant Management',
          'Details',
          'TICS',
        ]}
      >
        <Styled.StudyParticipantTicsRoute>
          <h3>TICS: Telephone Interview for Cognitive Status</h3>

          <PageWrapper.FullWidth>
            <TicsTest
              back={match.url.replace('/tics', '')}
              initialValues={initialValues}
              onSubmitSuccess={onSubmitSuccess}
            />
          </PageWrapper.FullWidth>
        </Styled.StudyParticipantTicsRoute>
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

StudyParticipantTicsRoute.propTypes = {
  match: PropTypes.object.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  participantDetails: PropTypes.object,
};

//-----------  Export  -----------//

export default StudyParticipantTicsRoute;
