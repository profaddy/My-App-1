//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
// import { loadDelay } from 'utilities/constants';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Auth Portal  ----------- */

Styled.SignInForm = styled.form`
  text-align: left;
  width: 400px;

  button {
    width: 248px;
  }

  label {
    padding-left: 0px;
  }
`;

Styled.AuthTitle = styled.div`
  h3 {
    text-transform: uppercase;
  }

  p {
    font-size: 1em;
  }
`;

Styled.ErrorBlock = styled.div`
  border: 1px solid ${vars.red};
  color: ${vars.red};
  padding: 1rem;
  border-radius: ${vars.radius};
  float: right;
`;

Styled.PasswordField = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

Styled.ShowPasswordToggle = styled.span`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 2.9rem;
  color: ${vars.blue};
  font-size: 0.9rem;
  user-select: none;
`;


//-----------  Exports  ----------- */

export default Styled;
