//-----------  Imports  -----------//

import styled from 'styled-components';
import variables from '@miro/core-ui/lib/styles/variables';
import { Link } from 'react-router-dom';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.StudyCard = styled(Link)`
  display: block;
  color: #1a0d38;
  box-shadow: ${variables.shadowLight};
  padding: 1.3793rem;
  margin: 0.6207rem;
  flex-basis: 24.5rem;
`;
Styled.CardTitle = styled.h3`
  border-bottom: 2px solid #c1c1c1;
  padding-bottom: 1rem;
`;
Styled.DL = styled.dl``;
// Styled.UL = styled.ul`
//   list-style-type: disc;
// `
Styled.UL = styled.ul`
  list-style-type: disc;
  padding-inline-start: 1.3rem;
`;
Styled.ListItem = styled.div`
  color: #1a0d38;
  margin-top: 1rem;
`;
Styled.ItemTitle = styled.li`
  color: #1a0d38;
  font-weight: bold;
`;

Styled.ItemDescription = styled.div`
  margin-top: 0.6207rem;
`;

// Styled.ListItem = styled.li`
//   color: #1A0D38;
//   margin-top: 1rem;
// `
// Styled.DT = styled.dt`
//   font-weight: bold;
// `
Styled.DD = styled.dd``;
// Styled.DD = styled.dd`
//   margin-inline-start: 0;
//   margin-top: 0.5rem;
// `

//-----------  Exports  ----------- */

export default Styled;
