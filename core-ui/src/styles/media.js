//-----------  Imports  -----------//

import { css } from 'styled-components';

import { emBase } from 'styles/variables';

//-----------  Definitions  -----------//

const sizes = {
  mobile: 480,
  tablet: 768,
  desktop: 992,
};

//-----------  Set Media Breakpoints  -----------//

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / emBase;

  accumulator[label] = args => css`
    @media (max-width: ${emSize}em) {
      ${css(args)}
    }
  `;
  return accumulator;
}, {});

//-----------  Exports  -----------//

export default media;
