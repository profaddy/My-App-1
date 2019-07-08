//-----------  Imports  -----------//

import styled from 'styled-components';
import { transparentize } from 'polished';

import vars from 'styles/variables';
import { fullBgImg, centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

function rankingColor({ ranking }) {
  switch (ranking) {
    case 1:
      return vars.yellow;
    case 2:
      return vars.orange;
    case 3:
      return vars.blue;
    default:
      return vars.white;
  }
}

//-----------  Avatar  ----------- */

Styled.Avatar = styled.div`
  ${fullBgImg()}

  border-radius : ${p => p.size}rem;
  flex          : 0 0 ${p => p.size}rem;
  height        : ${p => p.size}rem;
  position      : relative;
  width         : ${p => p.size}rem;

  ${p =>
    p.ranking &&
    `
    &::before {
      border        : 1px solid ${rankingColor(p)};
      border-radius : calc(${p.size}rem + 8px);
      box-shadow    : inset 0 0 0 3px ${transparentize(0.8, rankingColor(p))};
      content       : '';
      display       : block;
      height        : calc(${p.size}rem + 8px);
      left          : -4px;
      position      : relative;
      top           : -4px;
      width         : calc(${p.size}rem + 8px);
    }
  `}
`;

Styled.Badge = styled.div`
  bottom     : 4px;
  opacity    : ${p => (!p.ranking ? 0 : 1)};
  position   : absolute;
  right      : 4px;
  transition : ${vars.transition};

  &:before {
    ${centerAlign()}

    background-color : ${p => rankingColor(p)};
    border-radius    : 14px;
    content          : '';
    height           : 14px;
    width            : 14px;
  }

  &:after {
    ${centerAlign()}

    color       : ${vars.white};
    content     : '${p => p.ranking}';
    font-size   : 0.65rem;
    font-weight : ${vars.fontWeightBold};
  }
`;

//-----------  Exports  ----------- */

export default Styled;
