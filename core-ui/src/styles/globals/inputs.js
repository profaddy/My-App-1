//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  input,
  textarea,
  select {
    -webkit-appearance : none;
    appearance         : none;
    border             : 1px solid ${vars.grayLight};
    border-radius      : ${vars.radiusSm};
    color              : ${vars.grayDarker};
    display            : block;
    font-size          : ${vars.fontSizeSm};
    font-weight        : normal;
    max-width          : ${vars.mediumWidth};
    padding            : 0.95em 1em 0.9em;
    resize             : none;
    transition         : ${vars.transition};
    width              : 100%;

    &:focus {
      border-color : ${vars.blueLight};
      color        : ${vars.black};
      outline      : none;
    }

    &::placeholder {
      color: ${vars.grayDark};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    &:disabled {
      border-color : ${vars.gray};
      background   : ${vars.grayLighter};
      color        : ${vars.grayDark};
      cursor       : not-allowed;
    }
  }

  textarea {
    min-height: 8rem;
  }

  input[type='range'] {
    appearance : none;
    background : transparent;
    width      : 100%;

    &:focus {
      outline: none;
    }

    &::-ms-track {
      background   : transparent;
      border-color : transparent;
      color        : transparent;
      cursor       : pointer;
      width        : 100%;
    }

    &::-webkit-slider-runnable-track,
    &::-moz-range-track,
    &::-ms-track {
      border        : 1px solid ${vars.gray};
      border-radius : 10em;
      box-shadow    : inset 1px 1px 3px rgba(0, 0, 0, 0.08);
      cursor        : pointer;
      height        : 0.5rem;
      width         : 100%;
    }

    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb {
      appearance    : none;
      background    : ${vars.blue};
      border        : 0;
      border-radius : 10em;
      box-shadow    : 2px 2px 4px rgba(0, 0, 0, 0.15);
      cursor        : pointer;
      height        : 1.5rem;
      margin-top    : -0.6rem;
      width         : 1.5rem;
    }
  }
`
