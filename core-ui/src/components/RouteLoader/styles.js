//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Route Loader  ----------- */

Styled.RouteLoader = styled.div`
  background: transparent;
  background-image: radial-gradient(
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 40%
  );
  bottom: 0;
  left: 0;
  margin: 0 !important;
  position: absolute;
  right: 0;
  top: 0;
`;

Styled.Center = styled.div`
  ${centerAlign()}

  color          : ${vars.grayDark};
  font-size      : 0.8em;
  text-align     : center;
  text-transform : uppercase;

  svg {
    display : block;
    height  : auto;
    margin  : 0 auto 0.5rem;
    width   : 4rem;

    path {
      fill: ${vars.blueBright};
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
