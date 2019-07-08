//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';

import PageWrapper from 'components/PageWrapper';
import ParticipantView from 'containers/ParticipantView';

//-----------  Component  -----------//

class StudyParticipantsRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { match, studies } = this.props;

    return (
      <PageWrapper
        title="Study Participants"
        breadcrumbs={['Home', 'Studies', 'Participant Management']}
      >
        <ParticipantView {...this.props} />
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

StudyParticipantsRoute.propTypes = {};

//-----------  Export  -----------//

export default StudyParticipantsRoute;
