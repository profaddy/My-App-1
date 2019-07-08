//-----------  Imports  -----------//

import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

const loading = keyframes`
  0% { width: 0; }
  2% { width: 40%; }
  5% { width: 65%; }
  9% { width: 80%; }
  15% { width: 90%; }
  40% { width: 95%; }
  60% { width: 97%; }
  75% { width: 98%; }
  99% { width: 99%; }
`;

const loadingDone = keyframes`
  0% { width: auto; }
  80% { width: 100%; }
  90% { width: 100%; transform: translateY(0%); opacity: 1; }
  95% { width: 100%; transform: translateY(-50%); opacity: 0.5; }
  100% { width: 100%; transform: translateY(-100%); opacity: 0; }
`;

//-----------  Loading Bar  ----------- */

Styled.LoadingBar = styled.div`
  left: 0;
  overflow: hidden;
  padding-bottom: 0.15rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

Styled.Progress = styled.div`
  animation: ${loading} 30s;
  background-color: ${({ error }) => (error ? vars.red : vars.blue)};
  float: left;
  height: 0.15rem;
  position: relative;
  transition-timing-function: linear;
  width: 0;
  z-index: 1;

  ${({ complete }) =>
    complete &&
    `
    animation : ${loadingDone} 0.75s;
    left      : 0;
    position  : absolute;
    right     : 0;
  `}

  &::after {
    background-color: ${({ error }) =>
      error ? rgba(vars.red, 0.4) : rgba(vars.blue, 0.4)};
    box-shadow: 0 0 15px 1px
      ${({ error }) => (error ? rgba(vars.red, 0.4) : rgba(vars.blue, 0.4))};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
