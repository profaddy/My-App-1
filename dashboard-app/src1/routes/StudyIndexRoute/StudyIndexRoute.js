//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

//-----------  Component  -----------//

class StudyIndexRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    const { match } = this.props;

    return <Redirect to={`${match.url}/participants`} />;
  }
}

//-----------  Type Definitions  -----------//

StudyIndexRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

//-----------  Export  -----------//

export default StudyIndexRoute;
