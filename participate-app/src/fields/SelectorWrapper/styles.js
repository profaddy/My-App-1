//-----------  Imports  -----------//

import styled      from 'styled-components'
import { lighten } from 'polished'

import vars        from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Selector Wrapper  ----------- */

Styled.SelectorWrapper = styled.div`
  display    : block;
  text-align : left;

  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    color          : ${vars.grayDarker};
    cursor         : pointer;
    display        : inline-block;
    font-size      : 1.25rem;
    line-height    : 22px;
    margin-top     : 0;
    padding-bottom : 0;
    padding-left   : 2.75rem;
    position       : relative;
    text-align     : left;
    transition     : ${vars.transition};
    user-select    : none;

    &::before {
      background-color : ${vars.white};
      border           : 1px solid ${vars.blueLighter};
      color            : ${vars.white};
      content          : '';
      height           : 20px;
      left             : 0;
      position         : absolute;
      transition       : ${vars.transition};
      width            : 20px;
    }
  }

  input[type='checkbox'] + label:before {
    border-radius    : ${vars.radiusSm};
    color            : ${vars.white};
    content          : '✓';
    font-size        : 1rem;
    font-weight      : bold;
    line-height      : 125%;
    padding-left     : 0.3em;
    width            : 21px;
  }

  input[type='radio'] + label:hover,
  input[type='radio']:focus + label {

    &::before {
      background-color : ${vars.grayLight};
      border-color     : ${vars.grayLight};
      box-shadow       : inset 0 0 0 0.33em ${vars.white};
    }
  }

  input[type='checkbox'] + label:hover,
  input[type='checkbox']:focus + label {

    &::before {
      border-color : ${vars.grayLight};
      color        : ${vars.grayLight};
    }
  }

  input[type='radio']:checked + label {

    &::before {
      background-color : ${vars.white};
      border-color     : ${vars.blueLight};
      box-shadow       : inset 0 0 0 0.33em ${vars.blueLight};
    }
  }

  input[type='checkbox']:checked + label {

    &::before {
      background-color : ${vars.blueLight};
      border-color     : ${vars.blueLight};
      color            : ${vars.white};
    }
  }

  ${p => p.invalid && `
    input[type='radio'] + label,
    input[type='checkbox'] + label {
      color: ${vars.red};

      &::before {
        background-color : ${vars.white};
        border-color     : ${vars.red};
      }
    }

    input[type='radio']:checked + label {
      &::before {
        background-color : ${vars.white} !important;
        box-shadow       : inset 0 0 0 0.33em ${vars.red};
      }
    }

    input[type='radio']:disabled + label,
    input[type='checkbox']:disabled + label {
      color  : ${vars.grayDark};
      cursor : not-allowed;

      &::before {
        background-color : ${vars.grayLighter};
        border-color     : ${vars.gray};
        color            : ${vars.grayLighter};
      }
    }

    input[type='radio']:disabled + label {
      &::before {
        box-shadow: inset 0 0 0 0.33em ${vars.grayLighter};
      }
    }

    input[type='radio'] + label:hover,
    input[type='radio']:focus + label {
      color: ${vars.red};

      &::before {
        background-color : ${lighten(0.3, vars.red)};
        border-color     : ${vars.red};
        box-shadow       : inset 0 0 0 0.33em ${vars.white};
      }
    }

    input[type='checkbox'] + label:hover,
    input[type='checkbox']:focus + label {
      color: ${vars.red};

      &::before {
        border-color: ${vars.red};
      }
    }

    input[type='radio']:checked + label {
      color: ${vars.red};

      &::before {
        background-color : ${vars.white} !important;
        border-color     : ${vars.red} !important;
        box-shadow       : inset 0 0 0 0.33em ${vars.red} !important;
      }
    }

    input[type='checkbox']:checked + label {
      color: ${vars.red};

      &::before {
        background-color : ${vars.red} !important;
        border-color     : ${vars.red} !important;
      }
    }
  `}

  input[type='radio'] + label {
    &::before {
      border-radius : 10em;
      box-shadow    : inset 0 0 0 0.33em ${vars.white};
      top           : 1px;
    }
  }

  input[type='checkbox'] + label {
    &::before {
      top: 2px;
    }
  }
`

Styled.InputWrapper = styled.div`
  display        : inline-block;
  margin-left    : 1.5rem;
  margin-top     : -0.5rem;
  opacity        : ${p => p.visible ? 1      : 0};
  pointer-events : ${p => p.visible ? 'auto' : 'none'};
  transition     : ${vars.transition};
  position       : relative;

  label {
    position: initial !important;
  }

  input {
    font-size : 1em;
    padding   : 0.67em 0.75em 0.65em;
    width     : 18rem;

    &::placeholder {
      font-style: italic;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
