//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { VerificationErrorMsg } from './config';
//-----------  Data  -----------//

//-----------  Component  -----------//

const VerificationError = ({ ...props }) => (
  <Styled.VerificationError>
    <h1>{VerificationErrorMsg.title}</h1>
    <p>{VerificationErrorMsg.msg}</p>
    <p>
      Don't have an account? <Link to={`/signup/pi`}>Sign Up</Link>
    </p>
  </Styled.VerificationError>
);

//-----------  Type Definitions  -----------//

VerificationError.propTypes = {};

//-----------  Export  -----------//

export default VerificationError;
