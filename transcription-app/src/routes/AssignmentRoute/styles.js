//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

function borderColor({ next, completed }){
  if (next) return vars.blueLight

  switch (completed){
    case 100 : return vars.blueLightest
    case 0   : return vars.gray
    default  : return vars.blueLight
  }
}

//-----------  Job Route  ----------- */

Styled.AssignmentRoute = styled.div``

Styled.ModuleWrapper = styled.div`
  background-color : ${vars.grayLighter};
  border-radius    : ${vars.radiusLg};
  margin           : 2rem 0;
  padding          : 0.67rem 0.5rem;
`

Styled.ModuleBlock = styled.div`
  align-items      : center;
  background-color : ${vars.white};
  border           : 1px solid ${borderColor};
  border-radius    : ${vars.radius};
  box-shadow       : ${vars.shadowLight};
  display          : flex;
  flex-wrap        : wrap;
  justify-content  : justify-content;
  margin           : 1.5rem;
  min-height       : 5rem;
  position         : relative;
  padding          : 1.5rem 2rem 1.5rem 1.25rem;

  > * {
    flex: 0 0 10rem;

    &:nth-child(3){
      flex-basis: 15rem;
    }
  }

  span svg path {
    fill: ${p => (p.next || (100 === p.completed)) ? vars.blueBright : vars.grayDark};
  }

  strong {
    color          : ${vars.black};
    font-weight    : ${vars.fontWeight};
    font-size      : 1.15em;
    letter-spacing : 0;
    margin-right   : 1.75rem;

    &::before {
      color        : ${p => p.next ? vars.blueBright : vars.white};
      content      : '•';
      font-size    : 1.33em;
      line-height  : 0;
      margin-right : 1.5rem;
    }
  }

  .btn {
    flex: 0 0 8.5rem;
  }
`

Styled.Percentage = styled.div`
  color       : ${vars.orange};
  flex        : 1 1 auto;
  font-size   : 0.9em;
  font-style  : italic;
  font-weight : ${vars.fontWeightBold};
`

Styled.JobFooter = styled.footer`
  border-top : 1px solid ${vars.grayLight};
  margin     : 1rem;
  padding    : 2rem 1rem;
  text-align : right;

  .btn {
    width: 15rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
