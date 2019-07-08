//-----------  Imports  -----------//

import styled from 'styled-components';
import { Form } from 'redux-form';
import Button from '@miro/core-ui/lib/components/Button';
import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Create Study  ----------- */

Styled.QuestionnaireDetail = styled('div')`
  padding: 2rem;
  display: flex;
  text-align: left;
`;
Styled.Poster = styled('div')`
  padding: 2rem;
`;
Styled.Content = styled('div')`
  padding: 2rem;
`;
Styled.Definition = styled('div')`
  margin: 2rem 0;
`;
Styled.Footer = styled('div')`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;
Styled.DefinitionTerm = styled('h2')``;
Styled.DefinitionDescription = styled('p')``;

//-----------  Exports  ----------- */

export default Styled;
