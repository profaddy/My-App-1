//-----------  Imports  -----------//

import styled from 'styled-components';
import { Form } from 'redux-form';
import Button from '@miro/core-ui/lib/components/Button';
import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Create Study  ----------- */

Styled.CreateStudyForm = styled(Form)`
  padding: 2rem;
  margin: -0.5rem 0;
  text-align: left;
`;
Styled.Heading = styled('h2')``;
Styled.Button = styled(Button)`
  margin-right: 1rem;
`;

//-----------  Exports  ----------- */

export default Styled;
