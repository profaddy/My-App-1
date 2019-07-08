//-----------  Imports  -----------//

import styled from 'styled-components';
import { Form } from 'redux-form';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Set Password  ----------- */
Styled.SetPasswordForm = styled(Form)`
  text-align: left;
  width: 493px;


  button {
    width: 248px;
  }

  label {
    padding-left: 0px;
  }
`;

Styled.FormSubmit = styled(FormSubmit)`
  margin-top: 2rem;
`;

Styled.VerificationError = styled.div``;
Styled.SetPassword = styled.div``;

//-----------  Exports  ----------- */

export default Styled;
