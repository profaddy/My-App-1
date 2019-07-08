//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Montreal Cognitive Assessment  ----------- */

Styled.MocaTest = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  > div {
    align-items: center;
    border-bottom: 1px solid ${vars.grayLighter};
    display: flex;
    flex: 0 0 50%;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 1.5rem 0 1.5rem 5%;

    input {
      border-radius: ${vars.radiusLg};
      position: relative;
      text-align: center;
      width: 8rem;

      &[type='number']::-webkit-inner-spin-button,
      *[type='number']::-webkit-outer-spin-button {
        position: absolute;
        right: 0.5rem;
      }
    }

    label {
      font-size: 1.2rem;
      margin: 0 0 0 1rem;
      position: relative;

      small {
        font-size: 0.6rem;
        font-style: italic;
        margin-top: 0.33rem;
        position: absolute;
        white-space: nowrap;
      }
    }

    &:first-child {
      border-bottom: 0px;
      display: flex;
      flex: 1 0 100%;
      flex-direction: row;
      justify-self: end;
      margin-top: -11.67rem;

      label {
        color: ${vars.grayDark};
        font-size: 0.85rem;
        margin-right: 1rem;
        text-transform: uppercase;
      }
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
