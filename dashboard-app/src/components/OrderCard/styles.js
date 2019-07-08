//-----------  Imports  -----------//

import styled from 'styled-components';
import vars from '@miro/core-ui/lib/styles/variables';
import { Link } from 'react-router-dom';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.OrderCard = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${vars.blueGreyLight};
  border-radius: 0.7rem;
  padding: 0rem;
  margin-bottom: 0.5rem;
  user-select: none;
  ${props => props.isDragging && `
    background: ${vars.blueLighter};
  `}
`;
Styled.name = styled.div`
  font-size: 1.3rem;
  width: 200px;
`;
Styled.index = styled.span`
  font-size: 1.3rem;
  color: ${vars.grayDark};
`;

Styled.duration = styled('p')`
  margin-top: 1rem;
`;

//-----------  Exports  ----------- */

export default Styled;
