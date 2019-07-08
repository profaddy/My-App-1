//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import ErrorIcon from 'assets/icons/subjects.failed.svg';

//-----------  Component  -----------//

const ErrorBlock = ({ error, onRetry, ...props }) => (
  <Styled.ErrorBlock>
    <ErrorIcon />
    <div>
      <h6>Whoops, something went wrong:</h6>
      <p>{error.toString()}</p>
      {onRetry && <Button text="Retry Request" onClick={onRetry} error small />}
    </div>
  </Styled.ErrorBlock>
);

//-----------  Type Definitions  -----------//

ErrorBlock.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  onRetry: PropTypes.func,
};

//-----------  Export  -----------//

export default ErrorBlock;
