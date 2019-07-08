//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'
import Button from '@miro/core-ui/lib/components/Button'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Consent Form  ----------- */

Styled.SignatureForm = styled.form`

  label > span {
    display: block;
  }

  .miro-field-checkbox {
    margin-bottom: -2rem;
  }

  .miro-field-hidden {
    display: none;
  }
`

Styled.Disclaimer = styled.div`
  font-size : 1.1rem;
  margin    : 3rem 0 2.5rem;

  p {
    max-width: 50rem;
  }

`
Styled.ButtonContainer = styled.div`
  float:right
`
Styled.Content = styled.div`
  font-size : 1.1rem;

  p {
    max-width: 48rem;
  }

`

Styled.ParticipantFields = styled.div`
  padding-top: 0rem;
  padding-bottom: 0.5rem
`

Styled.RepresentativeFields = styled.div`
  border-top  : 1px solid ${vars.grayLighter};
  margin-top  : 3rem;
  padding-top : 1rem;
`

Styled.ModalSwitch = styled.div`
  border-bottom  : 1px dashed ${vars.grayLighter};
  font-size      : 0.95rem;
  font-weight    : ${vars.fontWeightBold};
  padding-top    : 1rem;

  a {
    color           : ${vars.blueBright};
    text-decoration : underline;
  }
`

Styled.Sidebar = styled.div`
  align-items    : center;
  display        : flex;
  flex-direction : center;
`

Styled.List = styled.div`

  & + svg {
    height      : auto;
    margin-left : 2rem;
    width       : 10.5rem;
  }
`

Styled.Item = styled.div`
  font-size      : 0.95rem;
  font-weight    : ${vars.fontWeightThin};
  letter-spacing : 0;
  margin-top     : 0.75rem;
  white-space    : nowrap;

  svg {
    height       : auto;
    margin-right : 1rem;
    width        : 0.75rem;
  }
`

Styled.SignatureButton = styled(Button)`
margin-left:20px;
background-color: ${props => props.disabled ? 'lightGray':'#0064FF'};
color:white;

:hover {
  background: ${props => props.disabled ? 'lightGray':'#0064FF'};
  color:white;
  text-decoration:none
}
`;

//-----------  Exports  ----------- */

export default Styled
