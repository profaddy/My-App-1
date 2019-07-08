//-----------  Imports  -----------//
import React from 'react';
import { Link } from 'react-router-dom';

import Styled from './styles';
import { ForgotPasswordSuccessMsg } from './config';

//-----------  Validation  -----------//

//-----------  Component  -----------//

const ForgotPasswordSuccess = ({ ...props }) => (
  <Styled.ForgotPasswordSuccess>
    <h3>{ForgotPasswordSuccessMsg.title}</h3>
    <p>{props.location.search.split('=')[1]}</p>
    {ForgotPasswordSuccessMsg.msgs.map((msg, i) => (
      <p key={i}>{msg}</p>
    ))}
    <p>
      {/* Back to <Link to={`/${window.location.search}`}>Sign in</Link> */}
      <Link to={`/${window.location.search}`}>CLOSE</Link>
    </p>
  </Styled.ForgotPasswordSuccess>
);

//-----------  Type Definitions  -----------//

ForgotPasswordSuccess.propTypes = {};

//-----------  Export  -----------//

export default ForgotPasswordSuccess;
