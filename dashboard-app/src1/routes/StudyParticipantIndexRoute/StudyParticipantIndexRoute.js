//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';

import PageWrapper from 'components/PageWrapper';
import ParticipantDetails from 'containers/ParticipantDetails';

//-----------  Component  -----------//

class StudyParticipantIndexRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this.props;

    return (
      <PageWrapper
        title="Participant Details"
        breadcrumbs={['Home', 'Studies', 'Participant Management', 'Details']}
      >
        <ParticipantDetails {...this.props} />
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

StudyParticipantIndexRoute.propTypes = {};

//-----------  Export  -----------//

export default StudyParticipantIndexRoute;
