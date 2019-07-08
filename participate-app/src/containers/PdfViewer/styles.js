//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Pdf Viewer  ----------- */

Styled.PdfViewer = styled.div`
  height         : 0;
  padding-bottom : 133%;
  position       : relative;

  .react-pdf__Page {
    left     : 0;
    position : absolute;
    top      : 0;
    width    : 100%;
  }

  .react-pdf__Page__svg,
  .react-pdf__Page__svg > svg {
    height : auto !important;
    width  : 100% !important;
  }

  > div:first-child {
    opacity    : ${p => p.isLoading ? 0 : 1};
    transition : ${vars.transition};
  }
`

Styled.PdfControls = styled.div`
  span + span {
    margin-left: 1rem;
  }
`

Styled.ErrorWrapper = styled.div`
  height   : 8rem;
  position : relative;
  width    : 20rem;
`

//-----------  Exports  ----------- */

export default Styled
