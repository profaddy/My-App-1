//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';

import PageWrapper from 'components/PageWrapper';
import ReviewConsent from 'containers/ReviewConsent';

//-----------  Component  -----------//

class StudyParticipantReviewRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this.props;

    return (
      <PageWrapper
        title="Review Participant Consent"
        breadcrumbs={[
          'Home',
          'Studies',
          'Participant Management',
          'Details',
          'Review Consent',
        ]}
      >
        <ReviewConsent {...this.props} />
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

StudyParticipantReviewRoute.propTypes = {};

//-----------  Export  -----------//

export default StudyParticipantReviewRoute;
