//-----------  Imports  -----------//

import media from 'styles/media';

//-----------  Mixins  -----------//

export const antiAliased = (smooth = true) => `
  -moz-osx-font-smoothing : ${smooth ? 'grayscale' : 'auto'};
  -webkit-font-smoothing  : ${smooth ? 'antialiased' : 'subpixel-antialiased'};
`;

export const fullBgImg = () => `
  background-position : center center;
  background-repeat   : no-repeat;
  background-size     : cover;
`;

export const verticalAlign = (position = 'absolute') => `
  position  : ${position};
  top       : 50%;
  transform : translateY(-50%);
`;

export const horizontalAlign = (position = 'absolute') => `
  left      : 50%;
  position  : ${position};
  transform : translateX(-50%);
`;

export const centerAlign = (position = 'absolute') => `
  left      : 50%;
  position  : ${position};
  top       : 50%;
  transform : translate(-50%, -50%);
`;

export const ellipsis = () => `
  overflow      : hidden;
  text-overflow : ellipsis;
  white-space   : nowrap;
`;

export const flexLayout = () => `
  align-content   : stretch;
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : space-between;

  > * {
    flex: 0 1 auto;
  }
`;

export const sectionBreak = (left = '50%') => `
  position: relative;

  &::after {
    border-right : 1px solid rgba(0, 0, 0, 0.05);
    content      : '';
    display      : block;
    height       : 100%;
    left         : ${left};
    position     : absolute;
    top          : 0;
    width        : 0;

    ${media.small`
      display: none;
    `}
  }
`;

export const cubicBezier = (bezier = '0.645, 0.045, 0.355, 1') => `
  transition-timing-function: cubic-bezier(${bezier}) !important;
`;
