//-----------  Imports  -----------//

import Stylis from 'stylis';
import { normalize } from 'polished';
import { css } from 'styled-components';

import TextStyles from 'styles/globals/text';
import FormStyles from 'styles/globals/form';
import ModalStyles from 'styles/globals/modal';
import InputStyles from 'styles/globals/inputs';
import SelectStyles from 'styles/globals/select';
import SelectorStyles from 'styles/globals/selectors';
import OtherStyles from 'styles/globals/other';

import vars from 'styles/variables';
import { antiAliased } from 'styles/mixins';

//-----------  Definitions  -----------//

const commentRegex = /^\s*\/\/.*$/gm;

//-----------  Styles  -----------//

const styles = `
  ${css(normalize())}

  *, *:after, *:before {
    ${antiAliased()}

    box-sizing     : border-box;
    letter-spacing : 0.05em;
  }

  html, body {
    -webkit-overflow-scrolling : touch;
    background-color           : white;
    height                     : 100%;
    min-height                 : 100%;
    overflow                   : auto;
    overflow-x                 : auto;
    width                      : 100%;
  }

  html {
    font-size: ${vars.emBase};
  }

  body {
    font-family          : ${vars.fontFamily};
    font-size            : 100%;
    font-weight          : ${vars.fontWeight};
    font-variant-numeric : tabular-nums;
  }

  ${TextStyles}
  ${FormStyles}
  ${ModalStyles}
  ${InputStyles}
  ${SelectStyles}
  ${SelectorStyles}
  ${OtherStyles}
`;

//-----------  Exports  -----------//

export default Stylis('', styles.replace(commentRegex, ''));
