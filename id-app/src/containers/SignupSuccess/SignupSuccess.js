//-----------  Imports  -----------//

import Styled from './styles';
import queryString from 'query-string';
import React from 'react';
import * as succeessMsg from './config';
import ResendForm from './ResendForm';
//-----------  Component  -----------//

const SignupSuccess = ({
  location: { search },
  match: { params },
  resend,
  ...props
}) => {
  const { email } = queryString.parse(search);
  return (
    <Styled.SignupSuccess>
      <Styled.Title>
        {params.type && succeessMsg[params.type].title}
      </Styled.Title>
      {params.type &&
        succeessMsg[params.type].msgs.map((msg, index) => (
          <Styled.Message key={index}>
            {msg.replace('EMAIL_PLACEHOLDER', email)}
          </Styled.Message>
        ))}
      <ResendForm {...props} initialValues={{ email }} />
      {/* <Link to={`/${window.location.search}`}>CLOSE</Link> */}
    </Styled.SignupSuccess>
  );
};

//-----------  Type Definitions  -----------//

SignupSuccess.propTypes = {};

//-----------  Export  -----------//

export default SignupSuccess;
