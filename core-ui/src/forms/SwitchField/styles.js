//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Switch Field  ----------- */

Styled.SwitchField = styled.div`
  align-items: center;
  display: flex;
  font-size: 80%;
  justify-content: center;

  > div {
    margin: 0 0.5rem;
  }

  small {
    color: ${vars.blueDark};
  }

  @media (max-width: 575px) {
    margin-top: 0.33rem;
  }
`;

Styled.FieldWrapper = styled.div`
  position: relative;

  .react-switch-bg {
    background: ${p =>
      p.selected ? vars.blueLight : vars.grayLight} !important;
    box-shadow: inset 0.05em 0.05em 0.5em rgba(0, 0, 0, 0.33);
    transform: scale(0.67);
    transform-origin: center center;
  }

  .react-switch-handle {
    box-shadow: 0.05em 0.05em 0.5em rgba(0, 0, 0, 0.33);
    left: 0;
    position: absolute;
  }

  ${p =>
    p.isInvalid &&
    `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`;

Styled.FieldLabel = styled.label`
  color: ${vars.grayDarker};
  font-size: 1.15rem;
  font-weight: ${vars.fontWeightThin};
  margin-right: 2rem;
`;

//-----------  Exports  ----------- */

export default Styled;
