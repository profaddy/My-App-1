//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Styleguide  ----------- */

Styled.Styleguide = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:not('.selector-wrapper') {
    margin-top: 2rem;
  }

  fieldset {
    margin-bottom: 2rem;

    legend {
      margin-bottom: 1rem;
    }

    > span {
      margin: 0.5rem;
    }
  }

  .has-error {
    label {
      color: ${vars.red};
    }

    input {
      border-color: ${vars.red};
      color: ${vars.red};
    }
  }
`;

Styled.ColorPalette = styled.div`
  flex: 0 0 22rem;
  margin-right: 3rem;
  padding-left: 1rem;
`;

Styled.OtherStyles = styled.div`
  flex: 1 1 auto;
  padding-left: 1rem;
`;

Styled.ColorBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1.67rem;
  text-align: left;
  width: 100%;

  > div {
    flex: 0 1 auto;
  }

  h4 {
    font-weight: ${vars.fontWeightThin};
  }
`;

Styled.ColorDot = styled.div`
  border-radius: 100%;
  height: 4rem;
  margin-right: 1.5rem;
  width: 4rem;
`;

//-----------  Exports  ----------- */

export default Styled;
