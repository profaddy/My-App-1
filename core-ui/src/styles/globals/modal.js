//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  .ReactModal__Overlay {
    opacity  : 0;
    overflow : scroll;

    &.ReactModal__Overlay--after-open {
      opacity    : 1;
      transition : all 300ms ease-in-out;
    }

    &.ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }

  .ReactModal__Content {
    border       : none;
    margin-left  : auto;
    margin-right : auto;
    opacity      : 0;
    transform    : translateY(30px);

    &.ReactModal__Content--after-open {
      opacity    : 1;
      transform  : translateY(0);
      transition : all 300ms ease-in-out;
    }

    &.ReactModal__Content--before-close {
      opacity   : 0;
      transform : translateY(30px);
    }
  }
`