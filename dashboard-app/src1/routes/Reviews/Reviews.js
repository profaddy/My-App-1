//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import ReviewsComp from 'containers/Reviews';

//-----------  Component  -----------//

class Reviews extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    const { props, state } = this;

    return (
      <Styled.Reviews>
        <ReviewsComp {...props} />
      </Styled.Reviews>
    );
  }
}

//-----------  Type Definitions  -----------//

Reviews.propTypes = {};

//-----------  Export  -----------//

export default Reviews;
