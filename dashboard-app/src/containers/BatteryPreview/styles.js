//-----------  Imports  -----------//

import styled from 'styled-components';
import { Form } from 'redux-form';
import Button from '@miro/core-ui/lib/components/Button';
import vars from '@miro/core-ui/lib/styles/variables';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Create Study  ----------- */

Styled.BatteryPreviewForm = styled('div')`
  text-align: left;
`;
Styled.Heading = styled('h2')``;
Styled.CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
Styled.Footer = styled('div')`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;
// Styled.FormSubmit = styled(FormSubmit)`
//   margin-top: 2rem;
// `;
//-----------  Exports  ----------- */

export default Styled;
