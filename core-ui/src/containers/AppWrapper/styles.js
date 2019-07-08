//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { verticalAlign } from 'styles/mixins';
import { themeSwap } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  App Wrapper  ----------- */

Styled.AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

Styled.ContentWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: ${p => p.minWidth || 78}rem;
`;

Styled.Spacer = styled.div`
  display: flex;
  max-width: 24rem;
  min-width: 17rem;
  position: relative;
  width: 30%;
`;

Styled.GlobalSearch = styled.div`
  border-right: 1px solid ${themeSwap(vars.grayLight, vars.purpleLight)};
  display: flex;
  max-width: 24rem;
  min-width: 17rem;
  position: relative;
  width: 30%;

  svg {
    ${verticalAlign()}

    height : auto;
    left: 6%;
    width: 1.9rem;

    path {
      fill: ${themeSwap(vars.blueDark, vars.blueLighter)};
    }
  }

  input {
    align-self: center;
    background-color: ${themeSwap(vars.white, vars.purpleDark)};
    border: none;
    color: ${themeSwap(vars.grayDarker, vars.white)};
    font-size: 1rem;
    padding-left: 20%;

    &::placeholder {
      color: ${themeSwap(vars.grayDark, vars.purpleLight)};
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
