//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Montreal Cognitive Assessment  ----------- */

Styled.TicsTest = styled.div`
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
    padding: 2.5rem 0 2.5rem 8%;
    margin: 0;

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

    &:last-of-type {
      flex: 1 1 100%;
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
