//-----------  Imports  -----------//

import styled from 'styled-components';
import { colors } from '@miro/core-ui/lib/styles/variables';
import { Form } from 'redux-form';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  SignUp  ----------- */

Styled.TOS = styled.div`
  margin-top: 1rem;
  label {
    flex: 1;
  }
  p {
    margin: 0px;
  }
`;

Styled.Qualification = styled.div`
  margin-top: 2rem;
  > div > * {
    text-align: left;
  }
`;

Styled.SupervisorDetails = styled.div``;

Styled.SignUpForm = styled(Form)`
  padding-top: 3rem;
  padding-bottom: 5rem;
  text-align: left;
  width: 400px;

  button {
    width: 248px;
  }

  label {
    padding-left: 0px;
  }
`;

Styled.ResearcherInfo = styled.div``;

Styled.LicensedClinician = styled.div`
  margin-bottom: 2rem;
`;

Styled.FormSubmit = styled(FormSubmit)`
  margin-top: 2rem;
`;

//-----------  Exports  ----------- */

export default Styled;
