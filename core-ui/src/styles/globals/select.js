//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  select {
    -webkit-appearance : none;
    appearance         : none;
    background-color   : white;
    border-radius      : ${vars.radiusSm};
    cursor             : pointer;
    font-size          : ${vars.fontSizeSm};
    font-weight        : normal;
    margin-bottom      : 0;
    margin-top         : 0;
    padding            : 0.95em 1em 0.9em;

    &::before {
      bottom         : 2px;
      content        : '▼';
      height         : 2.33em;
      pointer-events : none;
      position       : absolute;
      right          : 2px;
      width          : 2.33em;
    }

    &::after {
      bottom         : 0;
      color          : ${vars.grayDark};
      line-height    : 2rem;
      pointer-events : none;
      position       : absolute;
      right          : 0.67rem;
      transition     : ${vars.transition};
    }

    &::placeholder {
      color: ${vars.grayDark};
    }

    &:hover::after {
      color: ${vars.blueDark};
    }

    &:disabled {
      color  : ${vars.grayDark};
      cursor : not-allowed;

      &::after {
        color: $${vars.gray};
      }
    }
  }

  label {
    position: relative;
  }
`
