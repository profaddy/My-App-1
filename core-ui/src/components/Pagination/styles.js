//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Pagination  ----------- */

Styled.Pagination = styled.div``;

Styled.Progess = styled.a`
  position: relative;

  &::before {
    ${centerAlign()}

    background-color : ${p => (p.disabled ? vars.gray : vars.blue)};
    border-radius    : 10rem;
    content          : '';
    height           : 16px;
    transition       : ${vars.transition};
    width            : 16px;
    z-index          : 0;
  }

  &::after {
    ${centerAlign()}

    color       : ${vars.white};
    font-size   : 1.15em;
    font-weight : ${vars.fontWeightBold};
    margin-top  : -0.5px;
    transition  : ${vars.transition};
    z-index     : 1;
  }

  &:first-child {
    margin-right: 1em;

    &::after {
      content: '‹';
    }
  }

  &:last-child {
    margin-left: 1em;

    &::after {
      content     : '›';
      margin-left : 1px;
    }
  }
`;

Styled.PageNum = styled.a`
  color: ${p => (p.selected ? vars.blue : vars.grayDark)};
  font-size: 1.15em;
  margin: 0 0.5rem;
  position: relative;
  vertical-align: text-top;
`;

//-----------  Exports  ----------- */

export default Styled;
