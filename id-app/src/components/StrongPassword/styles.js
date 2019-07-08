//-----------  Purpose  -----------//
/*
 ** This file contains common form
 ** elements used in multiple components.
 */

//-----------  Imports  -----------//

import styled from 'styled-components';
import { colors } from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Styles  ----------- */

Styled.StrongPassword = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

Styled.ShowPasswordToggle = styled.span`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 2.9rem;
  color: ${colors.blue};
  font-size: 0.9rem;
  user-select: none;
`;

Styled.PasswordSuggestions = styled.div`
  width: 200px;
  position: absolute;
  left: calc(100% + 0.5rem);
  top: 1rem;
  /* padding: .9rem; */
  font-size: 0.9rem;
  color: #666;
  line-height: 1.1rem;
  box-shadow: 0px 1px 5px #ddd;
  border-radius: 0.3rem;

  ul {
    padding-left: 0.8rem;
    list-style: none;
    li {
      margin-bottom: 0.3rem;
      display: flex;

      span {
        display: block;
        margin-left: -0.3rem;
      }

      &:before {
        content: '⚠️';
        padding-right: 0.6rem;
      }
    }
  }
`;

Styled.PasswordStrengthBar = styled.div`
  opacity: 0;

  ${p => (p.strength !== null) && `
      opacity: 1;
  `}

  display: flex;
  width: 100%;
  margin-top: 28px;

  div {
    position: relative;
    margin-top: -23px;
    margin-right: 7px;
    flex: 1;
    background: #ddd;
    height: 7px;
    color: white;

    span {
      position: absolute;
      top: 15px;
      text-align: center;
      right: 0;
      left: 0;
      font-size: 0.7rem;
    }
  }

  div:last-child {
    margin-right: 0;
  }

  ${p => {
    switch (p.strength) {
      case 0:
      case 1:
        return `
          .strength-one {
            background: #DF342E;
            color: #DF342E;
          }
        `;
      case 2:
        return `
          .strength-one,
          .strength-two {
            background: #EE8A12;
          }
          .strength-two {
            color: #EE8A12;
          }
        `;
      case 3:
        return `
        .strength-one,
        .strength-two,
        .strength-three {
          background: #2B84D2;
        }
        .strength-three {
          color: #2B84D2;
        }
        `;
      case 4:
        return `
          div {
            background: #2CC55E;
          }
          .strength-four {
            color: #2CC55E;
          }
        `;
    }
  }}
`;

//-----------  Exports  ----------- */

export default Styled;
