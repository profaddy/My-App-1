//-----------  Imports  -----------//

import { lighten }    from 'polished'

import vars           from 'styles/variables'
import { errorClass } from 'utilities/constants'

//-----------  Exports  -----------//

export default `
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    color          : ${vars.grayDarker};
    cursor         : pointer;
    display        : inline-block;
    font-size      : 1rem;
    line-height    : 175%;
    margin-top     : 0.25em;
    padding-bottom : 0.15em;
    padding-left   : 2.75rem;
    position       : relative;
    text-align     : left;
    transition     : ${vars.transition};
    user-select    : none;

    &::before {
      background-color : ${vars.white};
      border           : 1px solid ${vars.grayLight};
      color            : ${vars.white};
      content          : '';
      height           : 22px;
      left             : 0;
      position         : absolute;
      transition       : ${vars.transition};
      width            : 22px;
    }
  }

  input[type='checkbox'] + label:before {
    border-radius    : ${vars.radiusSm};
    color            : ${vars.white};
    content          : '✓';
    font-size        : 1.4em;
    font-weight      : bold;
    line-height      : 95%;
    padding-left     : 0.15em;
    width            : 23px;
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

  input[type='radio'].${errorClass} + label,
  input[type='checkbox'].${errorClass} + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.white};
      border-color     : ${vars.red};
    }
  }

  input[type='radio']:checked.${errorClass} + label {
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

  input[type='radio'].${errorClass} + label:hover,
  input[type='radio'].${errorClass}:focus + label {
    color: ${vars.red};

    &::before {
      background-color : ${lighten(0.3, vars.red)};
      border-color     : ${vars.red};
      box-shadow       : inset 0 0 0 0.33em ${vars.white};
    }
  }

  input[type='checkbox'].${errorClass} + label:hover,
  input[type='checkbox'].${errorClass}:focus + label {
    color: ${vars.red};

    &::before {
      border-color: ${vars.red};
    }
  }

  input[type='radio'].${errorClass}:checked + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.white} !important;
      border-color     : ${vars.red} !important;
      box-shadow       : inset 0 0 0 0.33em ${vars.red} !important;
    }
  }

  input[type='checkbox'].${errorClass}:checked + label {
    color: ${vars.red};

    &::before {
      background-color : ${vars.red} !important;
      border-color     : ${vars.red} !important;
    }
  }

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
