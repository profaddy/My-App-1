//-----------  Imports  -----------//

import styled from 'styled-components';
import { Form } from 'redux-form';
import Button from '@miro/core-ui/lib/components/Button';
import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Create Study  ----------- */

Styled.ChooseQuestionnairesForm = styled('div')`
  text-align: left;
`;
Styled.Heading = styled('h3')`
  text-transform: uppercase;
  font-size: 1.4rem;
`;
Styled.Subheading = styled.div`
  padding: .5rem 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${vars.grayDarker};
`;
Styled.CardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
Styled.Footer = styled('div')`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;
//-----------  Exports  ----------- */

export default Styled;
