//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { fullBgImg, centerAlign } from 'styles/mixins';
import { themeSwap, isDarkTheme } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Account Header  ----------- */

Styled.AccountHeader = styled.div`
  align-self: center;
  font-size: 0.9em;
  font-weight: 300;
  padding-right: 2rem;
  position: relative;

  svg {
    border-right: 1px solid ${themeSwap(vars.gray, vars.purpleLight)};
    height: 2.5rem;
    margin-right: 1.25rem;
    padding: 0.2rem 1.25rem 0.2rem 0;
    position: relative;
    vertical-align: middle;
    width: auto;

    path {
      stroke: ${themeSwap(vars.blueDark, vars.white)};
    }
  }

  > *:last-child {
    margin-left: 2rem;
  }

  ${({ theme }) =>
    isDarkTheme(theme) &&
    `
    > *:last-child {
      border-color : ${vars.gray};
      color        : ${vars.grayLight};
    }
  `}
`;

Styled.Badge = styled.span`
  left     : 1.6rem;
  position : absolute;
  top      : 1.125rem;

  &::before {
    background-color : ${vars.red};
    border-radius    : 100%;
    content          : '';
    height           : 13px;
    width            : 13px;
  }

  &::after {
    color       : ${vars.white};
    content     : '${p => p.count}';
    font-size   : 0.67rem;
    font-weight : 900;
  }

  &::before, &::after {
    ${centerAlign()}
  }
`;

Styled.Avatar = styled.span`
  ${fullBgImg()}

  background-color : ${vars.grayLight};
  border-radius    : 100%;
  display          : inline-block;
  height           : 40px;
  margin           : 0 1rem;
  vertical-align   : middle;
  width            : 40px;
`;

//-----------  Exports  ----------- */

export default Styled;
