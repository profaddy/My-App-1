//-----------  Imports  -----------//

import vars from 'styles/variables'

//-----------  Exports  -----------//

export default `
  iframe {
    border   : 0;
    height   : 100%;
    left     : 0;
    position : absolute;
    top      : 0;
    width    : 100%;
  }

  nav {
    ul, ol {
      list-style : none;
      margin     : 0;
      padding    : 0;
    }
  }

  hr {
    background-color : ${vars.grayLighter};
    border           : none;
    content          : '';
    display          : block;
    height           : 1px;
    margin           : 2.5rem 0;
  }

  img {
    border         : 0;
    margin-left    : auto;
    margin-right   : auto;
    vertical-align : bottom;
  }

  blockquote {
    color      : inherit;
    font-style : italic;
    margin     : 0;

    &::before,
    &::after {
      content: '"';
    }
  }
`
