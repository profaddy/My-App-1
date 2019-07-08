//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Scroll Block  ----------- */

Styled.ScrollBlock = styled.div`
  background-color: ${vars.white};
  border: 1px solid ${p => (p.active ? vars.blueLightest : vars.white)};
  border-radius: ${vars.radiusLg};
  box-shadow: ${vars.shadowLight};
  overflow: hidden;
  position: relative;
`;

Styled.Title = styled.h4`
  color: ${vars.grayDark};
  margin-bottom: 1.33rem;
`;

Styled.Content = styled.div`
  padding: 1.33rem 1.75rem;

  & + div {
    margin-top: 1.25rem;
  }

  ${p =>
    p.limited &&
    `
    max-height : ${p.limited}rem;
    overflow   : scroll;
    transition : ${vars.transition};
  `}
`;

Styled.Overlay = styled.div`
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 75%
  );
  bottom: -1px;
  content: '';
  height: 9rem;
  left: 0;
  opacity: ${p => (p.active ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: ${vars.transition};
`;

//-----------  Exports  ----------- */

export default Styled;
