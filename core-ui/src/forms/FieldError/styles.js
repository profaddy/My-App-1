//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { verticalAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Field Error  ----------- */

Styled.FieldError = styled.div`
  box-shadow: ${p => (p.isInvalid && p.isActive ? vars.shadowLight : 'none')};
  display: table;
  opacity: ${p => (p.isInvalid && p.isActive ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  left: ${p => (p.isInvalid && p.isActive ? '-1rem' : 0)};
  top: 50%;
  transition: ${vars.transition};
  z-index: 100;
  transform: translateY(-50%) translateX(-100%);
`;

Styled.Message = styled.div`
  background: ${vars.white};
  border: 1px solid ${p => (p.isInvalid ? vars.red : vars.green)};
  border-radius: ${vars.radius};
  max-width: 12em;
  padding: 0.85em 1.05em 0.85em 1.05em;
  transition: ${vars.transition};
  z-index: 10;

  p {
    color: ${vars.black};
    font-size: 0.8rem;
    font-weight: ${vars.fontWeightBolder};
    letter-spacing: 0;
    line-height: 1.33;
    margin: 0;
    text-align: right;
    text-transform: none !important;
    white-space: pre-wrap;
  }
`;

Styled.ArrowBottom = styled.div`
  ${verticalAlign()}

  border-bottom  : 0.33em solid transparent;
  border-left: 0.4em solid ${p => (p.isInvalid ? vars.red : vars.green)};
  border-top: 0.33em solid transparent;
  content: '';
  height: 0;
  left: 100%;
  pointer-events: none;
  position: absolute;
  transition: ${vars.transition};
  width: 0;
  z-index: 9;
`;

Styled.ArrowTop = styled.div`
  ${verticalAlign()}

  border-bottom  : 0.33em solid transparent;
  border-left: 0.4em solid ${vars.white};
  border-top: 0.33em solid transparent;
  content: '';
  height: 0;
  left: calc(100% - 1.5px);
  pointer-events: none;
  position: absolute;
  transition: ${vars.transition};
  width: 0;
  z-index: 11;
`;

//-----------  Exports  ----------- */

export default Styled;
