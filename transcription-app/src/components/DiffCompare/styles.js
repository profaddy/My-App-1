//-----------  Imports  -----------//

import styled             from 'styled-components'
import { transparentize } from 'polished'

import vars               from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Diff Compare  ----------- */

Styled.DiffCompare = styled.div`
  margin-bottom : 8rem;
  text-align    : right;
`

Styled.Transcription = styled.div`
  border        : 1px solid ${vars.grayLighter};
  border-radius : ${vars.radiusSm};
  margin-bottom : 1rem;
  text-align    : left;
`

Styled.Stimuli = styled.header`
  align-items     : center;
  background      : ${vars.grayLightest};
  border-bottom   : 1px solid ${vars.grayLighter};
  display         : flex;
  flex-direction  : row;
  font-size       : 1.15rem;
  justify-content : space-between;
  padding         : 1.33rem 1.25rem;

  span {
    color       : ${vars.grayDarker};
    font-weight : ${vars.fontWeightThin};
  }
`

Styled.Count = styled.span`

  &::before {
    color        : ${vars.red};
    content      : '•';
    font-size    : 1.75rem;
    line-height  : 0;
    margin-right : 0.5rem;
  }
`

Styled.DiffContent = styled.div`
  color         : ${vars.grayDarker} !important;
  font-size     : 1.15rem;
  font-weight   : ${vars.fontWeightThiner};
  line-height   : 185%;
  min-height    : 20rem;
  padding       : 1.25rem;
`

Styled.Removed = styled.span`
  background-color : ${transparentize(0.75, vars.red)};
  padding          : 0.5% 0;
`

Styled.Added = styled.span`
  background-color : ${transparentize(0.75, vars.green)};
  padding          : 0.5% 0;
`

//-----------  Exports  ----------- */

export default Styled
