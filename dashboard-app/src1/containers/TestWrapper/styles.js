//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Form Wrapper  ----------- */

Styled.Form = styled.form`
  padding: 0;
  width: auto;
  background: transparent;
`;

Styled.Header = styled.header`
  background: ${vars.grayLight};
  padding: 0.75rem 1rem;
`;

Styled.Title = styled.div`
  color: ${vars.black};
  font-size: 1.05rem;
  font-weight: ${vars.fontWeightLight};
  letter-spacing: 0rem;
`;

Styled.Count = styled.div`
  color: ${vars.grayDarker};
  flex: 0 0 auto;
  font-size: 1.33rem;
  font-weight: ${vars.fontWeightBold};
  letter-spacing: 0rem;
  margin-right: 2rem;
`;

Styled.TestContent = styled.div``;

Styled.Skip = styled.a`
  border-bottom: 1px solid transparent;
  color: ${vars.blueDark};
  display: inline-block;
  font-style: italic;
  margin-bottom: 1.85rem;
  margin-left: 1rem;
  position: relative;

  &:hover {
    border-bottom: 1px solid ${vars.blueDark};
  }

  &::after {
    content: '⟶';
    display: inline-block;
    margin-left: 0.5rem;
    position: absolute;
  }
`;

Styled.Bottom = styled.div``;

Styled.Next = styled.div`
  margin-top: 2rem;
  text-align: right;
  background: ${vars.grayLighter};

  .btn {
    margin-bottom: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    width: 15rem;

    & + .btn {
      margin-left: 1rem;
    }
  }

  i {
    color: ${vars.grayDark};
    display: block;
    font-size: 0.9em;
  }

  > div {
    margin: 3rem 0 1rem auto;
    width: 15rem;

    label {
      border-radius: ${vars.radiusLg} !important;
      color: ${vars.black};
      font-size: 1.05em;
      font-weight: ${vars.fontWeightThin};
      margin-bottom: 0.5rem;
      padding: 0;
    }
  }
`;

Styled.Notes = styled.div`
  background-color: ${vars.white};
  border: 1px dashed ${vars.gray};
  border-radius: ${vars.radiusLg};
  padding: 1.5rem 2rem;

  a {
    color: ${vars.black};
    font-size: 1.25rem;
    font-weight: ${vars.fontWeight};
    letter-spacing: 0;

    i {
      color: ${vars.grayDark};
      letter-spacing: 0;
    }
  }

  textarea {
    border: none;
    padding: 0 2rem 2rem;
    margin: -0.75rem -2rem -3.5rem;
    font-size: 1.15rem;
  }
`;

Styled.Footer = styled.footer`
  align-items: center;
  display: flex;
  flex: 1 0 100% !important;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2.5rem;
`;

Styled.Total = styled.span`
  display: block;
  flex: 1 0 auto;
  font-size: 1.67rem;
  letter-spacing: 0.05rem;
  margin-right: ${p => (p.bare ? '1.5rem' : 0)};
  margin-top: ${p => (p.bare ? '2rem' : 0)};
  text-align: right;
  text-transform: uppercase;
`;

Styled.Block = styled.div`
  background: ${p => (p.inverse ? vars.gray : vars.white)};
  border-radius: ${vars.radiusLg};
  margin-bottom: 1.5rem;
  padding: 3rem 2rem;

  ${p =>
    p.inverse &&
    `
    color: ${vars.white};
  `}
`;

//-----------  Exports  ----------- */

export default Styled;
